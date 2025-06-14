// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignupPage = () => {
//     const [form, setForm] = useState({
//     email: '',
//     password: '',
//     avatar: 'https://api.lorem.space/image/face?w=150&h=150',
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://api.escuelajs.co/api/v1/users/', form);
//       if (res.status === 201) {
//         setStatus(' Registered successfully. You can now log in.');
//         setForm({
//           name: '',
//           email: '',
//           password: '',
//           avatar: 'https://api.lorem.space/image/face?w=150&h=150',
//         });
//       }
//     } catch (error) {
//       console.error('Registration Error:', error.response?.data || error.message);
//       setStatus(' Registration failed. Please try again.');
//     }
//   };

//     return (
//         <section className="bg-purple-100 dark:bg-gray-900">
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
//                     Create an account
//                     </h1>
//                     <form 
//                     onSubmit={handleSubmit}
//                     className="space-y-4 md:space-y-6" action="#">
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
//                         value={form.email}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
//                          value={form.password}
//                         onChange={handleChange}
//                         placeholder="••••••••"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         required=""
//                         />
//                     </div>
//                     <div>
//                         <label
//                         htmlFor="confirm-password"
//                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                         >
//                         Confirm password
//                         </label>
//                         <input
//                         type="confirm-password"
//                         name="confirm-password"
//                         id="confirm-password"
//                         placeholder="••••••••"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         required=""
//                         />
//                     </div>
//                     <div className="flex items-start">
//                         <div className="flex items-center h-5">
//                         <input
//                             id="terms"
//                             aria-describedby="terms"
//                             type="checkbox"
//                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                             required=""
//                         />
//                         </div>
//                         <div className="ml-3 text-sm">
//                         <label
//                             htmlFor="terms"
//                             className="font-light text-gray-500 dark:text-gray-300"
//                         >
//                             I accept the{" "}
//                             <a
//                             className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                             href="#"
//                             >
//                             Terms and Conditions
//                             </a>
//                         </label>
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                     >
//                         Create an account
//                     </button>
//                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                         Already have an account?{" "}
//                         <Link
//                         to="/login"
//                         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                         >
//                         Login here
//                         </Link>
//                     </p>
//                     </form>
//                 </div>
//                 </div>
//             </div>
//             </section>

//     );
// }

// export default SignupPage;



import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { base_URL } from '../utils/constant';

const SignupPage = () => {
  // Form state including name, email, password, avatar
  const [form, setForm] = useState({
    // name: '',
    email: '',
    password: '',
    avatar: 'https://api.lorem.space/image/face?w=150&h=150',
  });

  // Confirm password separate state
  const [confirmPassword, setConfirmPassword] = useState('');

  // Status message for success or error
  const [status, setStatus] = useState('');

  // Handle form input changes for name, email, password
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle confirm password input separately
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password confirmation validation
    if (form.password !== confirmPassword) {
      setStatus('Passwords do not match.');
      return;
    }

    try {
      // POST request to create user
      const res = await axios.post(`${base_URL}users`, form);
      if (res.status === 201) {
        setStatus('Registered successfully. You can now log in.');
        // Reset form fields after success
        setForm({
          name: '',
          email: '',
          password: '',
          avatar: 'https://api.lorem.space/image/face?w=150&h=150',
        });
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      setStatus('Registration failed. Please try again.');
    }
  };

  return (
    <section className="bg-purple-100 dark:bg-gray-900">
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
              Create an account
            </h1>

            {status && (
              <p
                className={`${
                  status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                } mb-3`}
              >
                {status}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Email Input */}
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
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Password Input */}
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
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50
                               focus:ring-3 focus:ring-primary-300 dark:bg-gray-700
                               dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-purple-800 hover:bg-primary-700
                           focus:ring-4 focus:outline-none focus:ring-primary-300
                           font-medium rounded-lg text-sm px-5 py-2.5 text-center
                           dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>

              {/* Login Link */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;

