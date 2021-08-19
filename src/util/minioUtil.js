import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: process.env.REACT_APP_MINIO_ENDPOINT,
  port: +process.env.REACT_APP_MINIO_PORT,
  useSSL: process.env.REACT_APP_MINIO_USE_SSL === 'true',
  accessKey: process.env.REACT_APP_MINIO_ACCESS_KEY,
  secretKey: process.env.REACT_APP_MINIO_SECRET_KEY,
});

const initAuthDb = async () => {
  await createAuthBucketIfDoesNotExist();
  await createTestUserIfDoesNotExist();
};

const createAuthBucketIfDoesNotExist = async () => {
  const authBucketInDb = await isAuthBucketInDb();
  if (!authBucketInDb) {
    try {
      await createAuthBucket();
      console.info('Auth bucket created successfully.');
    } catch (error) {
      console.error(error);
    }
  }
};

const createTestUserIfDoesNotExist = async () => {
  const testUserInDb = await isUserInDb(
    process.env.REACT_APP_MINIO_TEST_USER_USERNAME
  );
  if (!testUserInDb) {
    try {
      await createTestUser();
      console.info('Added test user to auth bucket.');
    } catch (error) {
      console.error(error);
    }
  }
};

const isUserInDb = async (username) => {
  const user = await getUser(username);
  return user !== null;
};

const isAuthBucketInDb = async () => {
  try {
    const exists = await minioClient.bucketExists(
      process.env.REACT_APP_MINIO_USERS_BUCKET
    );
    return exists;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const createAuthBucket = async () => {
  return await minioClient.makeBucket(
    process.env.REACT_APP_MINIO_USERS_BUCKET,
    process.env.REACT_APP_MINIO_REGION
  );
};

const createTestUser = async () => {
  const testUser = {
    username: process.env.REACT_APP_MINIO_TEST_USER_USERNAME,
    password: process.env.REACT_APP_MINIO_TEST_USER_PASSWORD,
  };
  return registerUser(testUser);
};

const getUser = async (username) => {
  try {
    const userStream = await minioClient.getObject(
      process.env.REACT_APP_MINIO_USERS_BUCKET,
      username
    );
    const userString = await streamToString(userStream);
    return JSON.parse(userString);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const registerUser = async (credentials) => {
  return await minioClient.putObject(
    process.env.REACT_APP_MINIO_USERS_BUCKET,
    credentials.username,
    JSON.stringify(credentials)
  );
};

const streamToString = (stream) => {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
};

export { minioClient, initAuthDb, isUserInDb, getUser, registerUser };
