import { Button } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { handleLogin, handleSignup } from '../util/authUtil';

const LoginButton = (props) => {
  const style = props.enabled ? { backgroundColor: '#d68438' } : {};
  const text = props.type === 'login' ? 'Log In' : 'Sign Up';
  const icon = props.type === 'login' ? <ExitToApp /> : <AccountCircleIcon />;

  const onButtonClick = async () => {
    let loggedIn;
    switch (text) {
      case 'Log In':
        loggedIn = await handleLogin({
          username: props.username,
          password: props.password,
        });
        break;

      case 'Sign Up':
        loggedIn = await handleSignup({
          username: props.username,
          password: props.password,
        });
        break;

      default:
        break;
    }
    props.updateLoggedIn(loggedIn);
  };

  return (
    <Button
      disabled={!props.enabled}
      fullWidth
      style={style}
      onClick={onButtonClick}
      endIcon={icon}
    >
      {text}
    </Button>
  );
};

export { LoginButton };
