import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser,updateUser, userAction } from '../redux/actions/userAction';
import { Eye, EyeOff } from "lucide-react";

const SignupPage = ({ edit }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // Redux users (optional: to see or update state)
  const usersFromRedux = useSelector((state) => state.userReducer.users);

  // Local user form state
  const [users, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: 'https://api.lorem.space/image/face?w=150&h=150',
  });

  const location = useLocation();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');

  // Clear success or error message after 2 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Prefill form if in edit mode
  useEffect(() => {
    if (edit && location.state) {
      const { id, name, email, password } = location.state;
      setUser({ id, name, email, password });
    }
  }, [edit, location.state]);

  // Load all users from API (optional, just for Redux state update)
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  // Handle form input
  const handleChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Form submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (users.password !== confirmPassword) {
    setStatus('Passwords do not match.');
    return;
  }

  try {
    if (edit && users.id) {
      // EDIT MODE
      await dispatch(updateUser(users.id, users));
      setStatus('Updated successfully.');
    } else {
      // CREATE MODE
      await dispatch(createUser(users));
      setStatus('Registered successfully. You can now log in.');
      setUser({
        id: '',
        name: '',
        email: '',
        password: '',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150',
      });
      setConfirmPassword('');
    }
  } catch (error) {
    console.error(edit ? 'Update Error:' : 'Registration Error:', error);
    setStatus(edit ? 'Update failed. Please try again.' : 'Registration failed. Please try again.');
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
              {edit ? 'Update account' : 'Create an account'}
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

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={users.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={users.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={users.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3/8 top-5/8
                     transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
              </div>

              {/* Confirm Password */}
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
                  required
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-purple-800 hover:bg-primary-700
                focus:ring-4 focus:outline-none focus:ring-primary-300
                font-medium rounded-lg text-sm px-5 py-2.5 text-center
                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {edit ? 'Update account' : 'Create an account'}
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

            {/* Optional Debug: Show users from Redux */}
            {/* <ul className="pt-4">
              {usersFromRedux.map((u) => (
                <li key={u.id} className="text-white text-sm">
                  {u.name} - {u.email}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
