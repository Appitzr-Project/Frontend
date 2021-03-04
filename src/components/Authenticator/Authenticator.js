import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

import { Auth } from 'aws-amplify';
import { styBtnFacebook, styBtnGoogle } from './styles';

const Authenticator = ({ children }) => {
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
              style={styBtnGoogle}
            >
              Login With Google
            </button>
            <button
              onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
              style={styBtnFacebook}
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
