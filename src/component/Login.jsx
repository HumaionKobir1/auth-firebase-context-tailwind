import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = event => {
        setShowPassword(event.target.checked);
    }
    return (
        <div className='mx-auto md:w-2/4 bg-white rounded-lg shadow-md p-8 mt-10'>
        <h1 className='text-2xl font-semibold text-center'>Please Login</h1>
        <form  className="w-full max-w-sm mx-auto mt-10">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email"  name='email' id="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input type={showPassword ? 'text' : 'password'} name='password' id="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
            </div>

            <div className='flex gap-1 justify-start'>
                <input onChange={handleShowPassword} checked={showPassword} type="checkbox" id="show-password" />
                <label htmlFor="show-password">Show Password</label>
            </div>

            <div className='text-center mt-2 mb-6'>
                <p className='text-lg font-medium text-red-900'></p>
                <p className='text-lg font-medium text-green-800'></p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
                </button>
                <a  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
                </a>
            </div>
        </form>
        <div className='mt-4 text-center'>
            <p>New to this website? Please <Link to='/register' className='text-blue-500 hover:text-blue-800'>Register</Link></p>
        </div>

    </div>
    );
};

export default Login;