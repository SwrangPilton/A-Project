import React from 'react'
import logo from '../assets/logo.png'
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

export default function Signin() {
    return (
        <div className='absolute top-0 z-50 bg-white padding signin w-screen h-screen'>
            <nav className='grid grid-cols-2 mb-6'>
                <img className='h-9' src={logo} alt="" />
                <Link to="/"> <VscChromeClose className='ml-auto text-4xl text-white ' /> </Link>
            </nav>

            <div className="box text-white text-2xl lg:w-2/6 bg-gray-800/80 px-8 lg:px-16 py-12 rounded-lg mx-auto">
                <form>
                    <h1 className='text-4xl pb-4 font-bold tracking-wider'>Sign In</h1>
                    <br />
                    <div className="relative z-0 w-full mb-8 group">
                        <input type="email" name="floating_email" className="rounded-xl px-3 block py-2 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:bg-gray-50 focus:border-red-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="pl-3 peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input type="password" name="password" className="rounded-xl px-3 block py-2 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:bg-gray-50 focus:border-red-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="pl-3 peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10">Password</label>
                    </div>

                    <button type="submit" className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base w-[100%] px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign In</button>

                    <div className='text-sm flex flex-wrap items-center justify-between mt-3'>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className='ml-1'>Remember me</label>
                        </div>
                        <p className='hover:underline text-gray-200 cursor-pointer'>Need Help ?</p>
                    </div>

                    <div>
                        <p className='text-sm mt-6'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500'>Learn more.</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
