import React, { useRef, useState } from 'react';

import login_image from '../assets/login-register-images/login-bg.jpg';
import { useUserAuth } from '../context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const emailRef = useRef();

    const {resetPassword} = useUserAuth();    
    const[error, setError] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try{
            await resetPassword(emailRef.current.value);
        }catch(err){
            setError(err.message);
        }   
    }
  return (
    <section className='w-full h-screen flex items-center justify-center '>

        <div className=' flex flex-col gap-8  h-screen py-8 w-[40%] shadow-2xl justify-center'>
        {error && <h1>{error}</h1>}
            <h1 className='font-bold text-3xl px-12 text-center'>Cafe LAGO</h1>

            <div className='flex flex-col gap-4 px-12 font-semibold'>
                <p className='text-2xl'>Password Reset</p>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col w-full px-12 gap-8'>
                <input 
                type="email"
                placeholder='Email'
                className='p-2 outline-none focus:outline-none bg-transparent border-b-2 focus:border-black focus:transition-all focus:duration-300'
                ref={emailRef}
                required
                />


     

                <button className='bg-black text-primary p-4 rounded-2xl font-bold tracking-wider'>Reset Password</button>
            </form>

<Link to='/login'>
            <div className='text-center bg-black text-primary p-4 rounded-2xl font-bold tracking-wider w-[300px] mx-auto'>
                <p>
                     Login
                </p>
            </div>
            </Link>
        </div>
    </section>
  )
}

export default ForgotPassword