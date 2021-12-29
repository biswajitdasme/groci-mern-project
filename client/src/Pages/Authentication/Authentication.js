import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false);  
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const from = location.state ? location.state.from.pathname : '/';
  const { login, registerUser, signInWithGoogle } = useAuth();

  const handleChange = (e) => {
    const field = e.target.name;
    const newData = { ...formData, [field]: e.target.value };
    setFormData(newData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData.email, formData.password, from);
    }
    else {
      registerUser(formData.email, formData.password, formData.name, from);
    }

    e.target.reset();
  }


    return (
    <>
    <Header />
    <div className="bg-gradient-to-r from-teal-400 to-green-400">
      <h1 className="py-8 text-center text-5xl text-green-50 font-medium">Authentication</h1>
    </div>
    <div className=''>
      <div className="flex mx-auto my-12 flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
          {isLogin?'Login to your account':'Create an account'}
        </div>
        <div className="flex gap-4 item-center">
          {/* <button
            type="button"
            className="py-2 px-4 flex justify-center items-center bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
            Facebook
          </button> */}
              <button
                onClick={() => signInWithGoogle(from)}
            type="button"
            className="py-2 px-4 flex justify-center items-center bg-red-500 shadow-lg shadow-red-500/50 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            Google
          </button>
        </div>
        <div className="mt-8">
            <form onSubmit={handleFormSubmit}>
            {isLogin || <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <i className='fas fa-user'></i>
                </span>
                <input
                  type="text"
                      id="name"
                      name="name"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your name"
                      onBlur={handleChange}
                />
                  </div>
              </div>
              }
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <i className='fas fa-envelope'></i>
                </span>
                <input
                  type="text"
                      id="email"
                      name="email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your email"
                      onBlur={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <i className="fas fa-unlock"></i>
                </span>
                <input
                  type="password"
                      id="password"
                      name="password"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Your password"
                      onBlur={handleChange}
                />
              </div>
            </div>
            {/* <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="/"
                  className="inline-flex text-xs font-thin text-gray-500 sm:text-sm  hover:text-gray-700 "
                >
                  Forgot Your Password?
                </a>
              </div>
            </div> */}
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-emerald-500 shadow-lg shadow-emerald-500/50 hover:bg-emerald-700 focus:ring-emerald-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                    {isLogin? 'Login': 'Register'}
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
                className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 "
                onClick={() => setIsLogin(!isLogin)}
          >
                {isLogin || <span className="text-base ml-2 font-bold">Already registered? <span className="text-emerald-500">Login here</span></span>}
                {isLogin && <span className="text-base ml-2 font-bold">Not have an account? <span className="text-emerald-500">Register here</span></span>}

          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
    );
};

export default Authentication;