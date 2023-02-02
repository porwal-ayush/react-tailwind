function SignIn() {
  return (
    <>
      <form className="border boder-solid flex flex-col items-center gap-2 w-6/12">
        <div className="w-80">
          <div>
            <label className="text-sm">Email</label>
          </div>
          <div className="border border-solid border-black">
            <input name="email" type="email" placeholder="ayush@gmail.com" />
          </div>
        </div>
        <div className="w-80">
          <div>
            <label className="text-sm">Password</label>
          </div>
          <div className="border border-solid border-black">
            <input type="password" placeholder="8+ characters needed" />
          </div>
        </div>
        <div></div>
        <div className="w-80 border-2 border-solid border-purple-400 rounded">
          <button type="button" className="height-48 w-full p-1 rounded">
            Login
          </button>
        </div>
        <div className="w-80 flex flex-row-reverse">
          <p className="text-sm">Forgot Password?</p>
        </div>
        <div className="before:content-[''] after:content-['']">Or</div>
      </form>
    </>
  );
}

export default SignIn;
