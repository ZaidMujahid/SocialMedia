import React, { useContext, useRef } from "react";
import axios from "axios"
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, dispatch } = useContext(AuthContext)

  const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:6000/auth/login", userCredentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch)
    console.log(email.current.value, password.current.value);
  };
  console.log(user)

  return (
    <>
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
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-4 mb-4 mx-auto"
              required
              minLength={8}
              ref={password}
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
              </>
  );
};

export default Login;
