import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);


    const {user} = useContext(AuthContext);
    console.log(user)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }



    const handleShowPassword = (event) => {
        setShowPassword(event.target.checked);
    }
    return (
        <div className='bg-fuchsia-600 p-5 rounded-lg mt-8 grid justify-center md:w-2/4 mx-auto'>

        <h4 className='text-3xl font-semibold mb-5 text-center'>Please Register</h4>

        <form onSubmit={handleRegister} className='w-80 mx-auto'>
            <div className='mb-4'>
                <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Your name</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50' type="text" name='name' placeholder='Your name' required/>
            </div>

            <div className='mb-4'>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50' type="email" name='email' placeholder='Your Email' required/>
            </div>
            
            <div className='mb-2'>
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50' type={showPassword ? 'text' : 'password'} name='password' id='password' placeholder='Your password' required/>
            </div>
            <div className='flex gap-1 justify-start'>
                <input onChange={handleShowPassword} checked={showPassword} type="checkbox" id="show-password" />
                <label htmlFor="show-password">Show Password</label>
            </div>
            

            <div className='text-center mt-4'>
                <p className='text-lg font-medium text-red-900'></p>
                <p className='text-lg font-medium text-green-800'></p>
            </div>

            <div className="flex justify-start -mt-5">
                <label className="text-gray-500 font-bold my-4 flex items-center">
                    <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                        <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                            <a href="#"
                                className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> Terms and Conditions of the site
                                      </a> and
                            <a href="#"
                                className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> the information data policy.</a>
                        </span>
                </label>
            </div>
                        <button className="mt-3 text-lg font-semibold
        bg-gray-800 w-full text-white rounded-lg
        px-6 py-3 block shadow-xl hover:text-white hover:bg-black" type="submit" value="Register">
                            Register
                        </button>
        </form>
        <div className='mt-4 text-center'>
            <p>Already you have account? Please <Link to='/login' className=' text-green-300 hover:text-blue-800'>Login</Link></p>
        </div>
    </div>
    );
};

export default Register;