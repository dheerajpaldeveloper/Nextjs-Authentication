'use client';

import React from 'react';
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useState } from 'react';
import Image from 'next/image';
import googleLogo from '../../../assets/google-logo.png';
import facebookLogo from '../../../assets/facebook-logo.png';
import appleLogo from '../../../assets/apple-logo.png';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmailAndPassword = () => {
    console.log(email, password);
    if (email === '' || password === '') {
      console.log('Please enter email and password');
    }
  };

  const forgotPassword = () => {
    console.log('Forgot Password');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h1 className="text-4xl text-center mb-6 font-semibold">Sign in with Email</h1>
        <form>
          {/* Email Input */}
          <div className="mb-4 relative">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          
          {/* Password Input */}
          <div className=" relative">
            <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <IoEyeOff className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
            <IoEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
          </div>
          <div className='flex justify-end mb-4 mt-2'>
            <button onClick={forgotPassword} className='text-sm text-gray-500'>Forgot Password?</button>
          </div>
          
          {/* Sign In Button */}
          <div className="flex">
            <button onClick={getEmailAndPassword}
              type="submit" 
              className="w-full text-white p-3 rounded-md bg-[#1c1c25] hover:bg-[#2c2c35]"
            >
              Get Started
            </button>
          </div>
          <div className='flex justify-center py-2 text-sm'>
            <p>Or sign in with</p>
          </div>
          <div className='flex gap-4 justify-center mt-4'>
            <button className='flex justify-center items-center bg-white rounded-md shadow-md w-full py-2'>
              <Image src={googleLogo} alt="google" height={20} width={20} />
            </button>
            <button className='flex justify-center items-center bg-white rounded-md shadow-md w-full py-2'>
              <Image src={facebookLogo} alt="facebook" height={20} width={20} />
            </button>
            <button className='flex justify-center items-center bg-white rounded-md shadow-md w-full py-2'>
              <Image src={appleLogo} alt="apple" height={20} width={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
