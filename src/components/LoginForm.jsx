import { TextField } from '@material-ui/core';

const LoginForm = (props) => {
  const onUsernameFieldChange = (e) => {
    props.updateUsername(e.target.value)
  };

  const onPasswordFieldChange = (e) => {
    props.updatePassword(e.target.value)
  };

  return (
    <div>
      <div>
        <TextField
          label="Username"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={onUsernameFieldChange}
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          onChange={onPasswordFieldChange}
        />
      </div>
    </div>
  );
};

export { LoginForm };
