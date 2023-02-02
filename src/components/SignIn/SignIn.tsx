import React, { useState } from 'react';

interface SignInProps {
  handleLoginButton: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  handleForgotPassword: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

function SignIn(props: SignInProps) {
  const [password, setPassword] = useState('');

  const isValidPassword = password.length !== 0 && password.length < 8;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form className="p-6 shadow-sm rounded border boder-solid flex flex-col items-center gap-2 w-6/12">
        <div className="w-80">
          <div>
            <input
              className="w-full p-1 border-2 border-solid border-purple-400 rounded"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-80">
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
          className="w-80 flex items-center justify-center cursor-pointer border-2 height-48 p-1 border-solid border-purple-400 rounded"
          onClick={props.handleLoginButton}
        >
          Login
        </div>
        <div className="w-80 flex flex-row-reverse">
          <p
            onClick={props.handleForgotPassword}
            className="text-sm text-purple-400 cursor-pointer"
          >
            Forgot Password?
          </p>
        </div>
        <div className="relative before:block before:content-[''] before:h-0.5 before:w-32 before:absolute before:top-1/2 before:left-8 before:bg-purple-400 after:block after:content-[''] after:h-0.5 after:w-32 after:absolute after:top-1/2 after:right-8 after:bg-purple-400">
          Or
        </div>
        <div className="flex gap-4 cursor-pointer">
          <img src="/icons/github.svg" />
          <img src="/icons/google.svg" />
        </div>
        <div className="flex gap-2 items-center mb-6">
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <a className="text-purple-400 cursor-pointer">Sign Up</a>
        </div>
      </form>
    </>
  );
}
export default SignIn;
