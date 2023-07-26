import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="height flex justify-center items-center bg-pinkWhite ">
      <div className=" shadow-xl rounded-xl bg-white py-4 md:p-10">
        <div className="flex justify-center items-center">
          <form action="" className="px-8" onSubmit={handleLogin}>
            <div className="flex justify-around">
              <h1 className="text-3xl mx-auto font-bold text-navy">Login</h1>
            </div>

            <input
              type="email"
              placeholder="Gmail"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-8 mb-2 mx-auto"
              
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-4 mb-4 mx-auto"
              
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              className="py-1 px-4 mb-2 font-semibold text-lg bg-pinkWhite hover: shadow-medium border-2 border-navy rounded-xl hover:text-white hover:bg-navy transition-all duration-300 text-navy block mx-auto mt-8"
              type="submit"
              // disabled={isloading}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
