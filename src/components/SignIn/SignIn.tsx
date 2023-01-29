function SignIn() {
  return (
    <>
      <form className="flex flex-col items-center">
        <div>
          <div>
            <label className="text-sm">Email</label>
          </div>
          <div>
            <input name="email" type="email" placeholder="ayush@gmail.com" />
          </div>
        </div>
        <div>
          <div>
            <label className="text-sm">Password </label>
          </div>
          <div>
            <input type="password" placeholder="8+ characters needed" />
          </div>
        </div>
        <button>Login</button>
      </form>
    </>
  );
}

export default SignIn;
