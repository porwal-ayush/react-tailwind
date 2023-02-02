import { useState } from 'react';

interface SignUpProps {
  handleSignUpButton: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

function SignUp(props: SignUpProps) {
  const [password, setPassword] = useState('');

  const isValidPassword = password.length !== 0 && password.length < 8;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form className="p-6 shadow-md rounded border boder-solid flex flex-col items-center gap-2 w-6/12">
        <div className="w-9/12">
          <div>
            <input
              className="w-full p-1 border-2 border-solid border-purple-400 rounded"
              name="Full Name"
              type="text"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="w-9/12">
          <div>
            <input
              className="w-full p-1 border-2 border-solid border-purple-400 rounded"
              name="userName"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="w-9/12">
          <div>
            <input
              className="w-full p-1 border-2 border-solid border-purple-400 rounded"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-9/12">
          <input
            className="w-full p-1 border-2 border-solid border-purple-400 rounded"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          {isValidPassword && (
            <p className="text-sm text-red-700">* Invalid password</p>
          )}
        </div>
        <div
          className="w-9/12 flex items-center justify-center cursor-pointer border-2 height-48 p-1 border-solid border-purple-400 rounded"
          onClick={props.handleSignUpButton}
        >
          Sign Up
        </div>
        <div className="flex w-9/12 gap-4 items-center before:content-[''] before:flex-1 before:bg-purple-400 before:h-0.5 after:content-[''] after:flex-1 after:bg-purple-400 after:h-0.5">Or</div>
        <div className="flex gap-4 cursor-pointer">
          <img src="/icons/github.svg" />
          <img src="/icons/google.svg" />
        </div>
      </form>
    </>
  );
}

export default SignUp;
