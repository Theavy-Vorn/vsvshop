import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import { loginUser } from '../redux/actions/authAction';


const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{ isLogin } = useSelector(state=>state.authReducer)
    const { auth } = useSelector(state=>state.authReducer)
  // Local form state
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

   // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await dispatch(loginUser(form));
      console.log("Login Success. Token:", result.access_token); // ✅ log token
      navigate("/"); // Redirect to home or dashboard
    } catch (err) {
      setError("Login failed. Please check your email or password.");
    }
  };
    return (
        <section className="bg-purple-100 dark:bg-gray-900 h-[100vh]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                <img
                    className="w-20 h-20 mr-2 rounded-full"
                    src="https://i.pinimg.com/736x/dd/9c/da/dd9cda5f517eef649341b406e1fe32eb.jpg"
                    alt="logo"
                />
                VSV.Shop
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login to your account
                    </h1>
                     {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                        Your email
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                            >
                            Remember me
                            </label>
                        </div>
                        </div>
                        <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                        Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Login
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <Link
                        to={"/signup"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                       Signup
                        </Link>
                    </p>
                    </form>
                </div>
                </div>
            </div>
            </section>

    );
}

export default LoginPage;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/actions/authAction";
// import { Link, useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, user } = useSelector((state) => state.authReducer);

//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await dispatch(loginUser(formData));
//     if (!error) navigate("/"); // or wherever post-login
//   };

//   return (
//     <section className="bg-purple-100 dark:bg-gray-900 h-[100vh]">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <a
//                 href="#"
//                 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//                 >
//                 <img
//                     className="w-20 h-20 mr-2 rounded-full"
//                     src="https://i.pinimg.com/736x/dd/9c/da/dd9cda5f517eef649341b406e1fe32eb.jpg"
//                     alt="logo"
//                 />
//                 VSV.Shop
//                 </a>
//                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//                 <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                     Login to your account
//                     </h1>
//                      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
//                     <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
//                     <div>
//                         <label
//                         htmlFor="email"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                         Your email
//                         </label>
//                         <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="name@company.com"
//                         required=""
//                         />
//                     </div>
//                     <div>
//                         <label
//                         htmlFor="password"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                         Password
//                         </label>
//                         <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="••••••••"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         required=""
//                         />
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-start">
//                         <div className="flex items-center h-5">
//                             <input
//                             id="remember"
//                             aria-describedby="remember"
//                             type="checkbox"
//                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                             required=""
//                             />
//                         </div>
//                         <div className="ml-3 text-sm">
//                             <label
//                             htmlFor="remember"
//                             className="text-gray-500 dark:text-gray-300"
//                             >
//                             Remember me
//                             </label>
//                         </div>
//                         </div>
//                         <a
//                         href="#"
//                         className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                         >
//                         Forgot password?
//                         </a>
//                     </div>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <button
//                         disabled={loading}
//                         type="submit"
//                         className="w-full text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                     >
//                        {loading ? "Logging in..." : "Login"}
//                     </button>
//                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                         Don’t have an account yet?{" "}
//                         <Link
//                         to={"/signup"}
//                         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                         >
//                        Signup
//                         </Link>
//                     </p>
//                     </form>
//                 </div>
//                 </div>
//             </div>
//     </section>
    
   
//   );
// };

// export default LoginPage;


