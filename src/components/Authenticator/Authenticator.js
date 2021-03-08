import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

import { Auth } from 'aws-amplify';
import { makeStyles } from '@material-ui/core';

const btnStyle = {
  width: '380px',
  height: '50px',
  borderRadius: '13px',
  color: '#ffffff',
  border: 'unset',
};

const useStyles = makeStyles({
  styBtnGoogle: {
    ...btnStyle,
    background: '#C94130',
  },
  styBtnFacebook: {
    ...btnStyle,
    background: '#3B5998',
    marginTop: '8px',
    marginBottom: '8px',
  },
});

const Authenticator = ({ children }) => {
  const classes = useStyles();
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="Login"
        federated-buttons={false}
        slot="sign-in"
        submitButtonText="Login"
      >
        <div slot="federated-buttons">
          <button
            onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
            className={classes.styBtnGoogle}
          >
            Login With Google
          </button>
          <button
            onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
            className={classes.styBtnFacebook}
          >
            Login With Facebook
          </button>
        </div>
      </AmplifySignIn>
      {children}
    </AmplifyAuthenticator>
  );
};

export default Authenticator;