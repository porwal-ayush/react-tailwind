import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="p-0 m-0">
      <SignIn
        handleLoginButton={() => {
          console.log('Todo: Login Functionality');
        }}
        handleForgotPassword={() => {
          console.log('Todo: Forgot Password Functionality');
        }}
      />
    </div>
  );
}

export default App;
