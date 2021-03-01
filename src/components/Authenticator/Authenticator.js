import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

import { Auth } from 'aws-amplify';
import { styBtnFacebook, styBtnGoogle } from './styles';

function Authenticator() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
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
      </AmplifyAuthenticator>
    </div>
  );
}

export default Authenticator;
