import React, { useState } from 'react';
import { useUser } from '../../UserContext'; // Import the UserContext
import { useNavigate } from "react-router-dom";

export default function AuthenticationPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { login, signup } = useUser(); // Destructure login and signup from UserContext

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await signup(formData.name, formData.email, formData.password);
      console.log('Registration successful:', userData);
      navigate('/'); // Navigate to home page on successful signup
    } catch (error) {
      setErrors(error.response.data.errors || {});
      console.error('Registration error:', error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await login(formData.email, formData.password);
      console.log('Login successful:', userData);
      navigate('/'); // Navigate to home page on successful login
    } catch (error) {
      setErrors(error.response.data.errors || {});
      console.error('Login error:', error);
    }
  };

  const handleSwitch = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({
      email: '',
      password: '',
      name: '', // Only for signup
    });
    setErrors({});
  };

  return (
    <>
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/backgroundLow.png")' }}
      ></div>
  
      {/* Main Content */}
      <div className="relative flex min-h-screen justify-center items-center p-4">
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-500 text-white text-2xl sm:text-3xl font-bold py-3 px-4 text-center">
            {isLoginMode ? 'Log In' : 'Sign Up'}
          </div>
          {isLoginMode ? (
            <form
              className="p-4 space-y-4 mt-4 flex flex-col"
              onSubmit={handleLoginSubmit}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <button
                type="submit"
                className="w-full border-green-500 border-2 py-2 rounded-md text-green-500 hover:bg-green-500 hover:text-white font-bold"
              >
                Log In
              </button>
            </form>
          ) : (
            <form
              className="p-4 space-y-4 mt-4 flex flex-col"
              onSubmit={handleRegisterSubmit}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <button
                type="submit"
                className="w-full border-green-500 border-2 py-2 rounded-md text-green-500 hover:bg-green-500 hover:text-white font-bold"
              >
                Sign Up
              </button>
            </form>
          )}
          <div className="text-sm p-4 text-center">
            <p>
              {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                className="text-green-500 cursor-pointer font-bold"
                onClick={handleSwitch}
              >
                {isLoginMode ? 'Sign up here' : 'Log in here'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
  
}
