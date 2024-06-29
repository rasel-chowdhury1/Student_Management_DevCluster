// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../Firebase/Firebase.config';
// import { auth, googleProvider } from '../Firebase/Firebase.config';

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    password2: "",
  });
const [error, setError] = useState(null);

const { email, password } = formdata;

const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    console.log({email,password})
    // try {
    //   console.log({email,password})
    //   setError("")
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate('/manage-student');
    // } catch (err) {
    //   console.log({err})
    //   setError(err.message);
    // }
  };

  const handleGoogleSignIn = async () => {
    console.log("google button clicked -> ")
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/manage-student');
    } catch (err) {
      setError(err.message);
      console.log(err.message)
    }
  };

    return (
        <div className="py-10 px-10 text-[#F33823] ">
        {/* {loading && (
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-md"></span>Loging
            Processing....
          </div>
        )} */}
        
        <div className="flex gap-3 justify-center md:justify-normal items-center">
          <Link to={"/"} className="text-2xl font-bold">
            <TiArrowBackOutline />
          </Link>
          <Link to={"/"} className="text-lg font-bold">
            Back to home
          </Link>
        </div>
        <div className="min-h-[600px] md:min-h-[600px] flex flex-col md:flex-row justify-between gap-3 md:gap-5">
          <div className="w-full md:w-[60%] flex flex-col items-center justify-center md:p-0">
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#F33823] to-[#73e9fe] bg-clip-text py-3">
              Login
            </h1>
            <p className="mt-6 text-lg">Login with your social account</p>
            <div className=" mt-3">
              <button  onClick={handleGoogleSignIn} className='flex items-center gap-2 border-2 py-2 px-4 rounded-full text-black hover:text-[#F33823]' >
                 <FcGoogle className="w-8 h-8" />
                 Sign In With Google
              </button>
            </div>
            <span className="my-5 hidden md:flex">
              __________________________________or__________________________________
            </span>
            <hr />
            <form onSubmit={handleEmailSignIn} className="w-full md:w-1/2">
              <div className="flex flex-col mt-5 ">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="outline-none w-full  mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-md"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="outline-none w-full  px-8 py-4 bg-[#EEF5F3] rounded-md"
                  required
                />
                {error}
                <button
                  type="submit"
                  className="mt-5 w-full  text-white py-3 rounded-full bg-gradient-to-r from-[#F33823] to-[#73e9fe] hover:from-[#73e9fe] hover:to-[#F33823] font-bold"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div
  
            className="w-full md:w-[40%] text-white flex flex-col justify-center items-center text-center gap-y-2 md:gap-y-3 px-10 py-24 rounded md:p-0 bg-gradient-to-r from-[#F33823] to-[#73e9fe]"
          
  
          >
            <h1 className="text-3xl md:text-5xl font-bold">New Here ?</h1>
            <h3 className="text-lg md:text-xl md:px-16">
              Sign up and discover a great amount of opportunities
            </h3>
            <Link to="/register">
              <button className="hover:bg-gradient-to-r from-[#F33823] to-[#73e9fe] text-white font-bold  px-10 py-2 rounded-full  border-2">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;