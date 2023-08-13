import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer} from "react-toastify";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    
    try {
      const res = await axios.post("/auth/register", user);
      if(res.data.error) return toast.error(<p className="text-lg">{res.data.error}</p>);
      else {
        username.current.value = ""
        email.current.value = ""
        password.current.value = ""
        toast.success(<p className="text-lg">Registered successfully! You can login now</p>);
        navigate('/login')
      }
      } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <ToastContainer position="top-center"
        autoClose={3000}
        newestOnTop={false}
        pauseOnHover={false}
        font={20}
    />
    <div className="height flex justify-center items-center bg-pinkWhite ">
      <div className=" shadow-xl rounded-xl bg-white py-4 md:p-10">
        <div className="flex justify-center items-center">
          <form action="" className="px-8" onSubmit={handleSignup}>
            <div className="flex justify-around">
              <h1 className="text-3xl mx-auto font-bold text-navy">Register</h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-8 mb-2 mx-auto"
              ref={username}
              required
            />
            <input
              type="email"
              placeholder="Gmail"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-4 mb-2 mx-auto"
              ref={email}
              required
              />
            <input
              type="password"
              placeholder="Password"
              className="text-base border-2 rounded-xl p-2 m-2 outline-none block mt-4 mb-2 mx-auto"
              ref={password}
              required
              minLength={6}
            />
            <button
              className="py-1 px-4 mb-2 font-semibold text-lg bg-pinkWhite hover: shadow-medium border-2 border-navy rounded-xl hover:text-white hover:bg-navy transition-all duration-300 text-navy block mx-auto mt-8"
              type="submit"
              // disabled={isloading}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
              </>
  );
};

export default Register;
