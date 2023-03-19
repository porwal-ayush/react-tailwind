import { SignIn } from './packages/user-screens';
import { SignUp } from './packages/user-screens';

function App() {
  return (
    <div className="p-0 m-0">
      <div className="m-6">
        <SignIn
          handleLoginButton={() => {
            console.log('Todo: Login Functionality');
          }}
          handleForgotPassword={() => {
            console.log('Todo: Forgot Password Functionality');
          }}
        />
      </div>
      <div className="m-6">
        <SignUp
          handleSignUpButton={() => {
            console.log('Todo: Sign Up Functionality');
          }}
        />
      </div>
    </div>
  );
}

export default App;
