import React, { useState } from 'react';
import login_image from '../assets/login-register-images/login-bg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {useUserAuth} from '../context/UserAuthContext'

const Register = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const {signUp} = useUserAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email, password);
            navigate("/login");

        }catch(err){
            setError(err.message);
        }   
    }

  return (
    <section className='w-full h-screen flex items-center justify-center '>
        
    <div className='h-screen w-[50%] overflow-hidden shadow-2xl'>
        <img className='aspect-square object-cover' src={login_image} alt={login_image} title='Cafe Lago'/>
    </div>



    <div className=' flex flex-col gap-8  h-screen py-8 w-[40%] shadow-2xl justify-center'>
        {error && <h2>{error}</h2>}

        <h1 className='font-bold text-3xl px-12'>Cafe LAGO</h1>

        <div className='flex flex-col gap-4 px-12 font-semibold'>
            <p className='text-2xl'>Create an account</p>
            <p>Welcome Back! Please enter your details</p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col w-full px-12 gap-8'>
            <input 
            type="email"
            placeholder='Email'
            className='p-2 outline-none focus:outline-none bg-transparent border-b-2 focus:border-black focus:transition-all focus:duration-300'
            onChange={(e)=> setEmail(e.target.value)}
            />

            <input 
            type="password"
            placeholder='Password'
            className='p-2 outline-none focus:outline-none bg-transparent border-b-2 focus:border-black focus:transition-all focus:duration-300'
            onChange={(e)=> setPassword(e.target.value)}
            />

            <button className='bg-black text-primary p-4 rounded-2xl font-bold tracking-wider'>Register</button>
        </form>

        <div className='text-center'>
            <p>
                Already have an account? <Link to='/login'>Log in</Link>
            </p>
        </div>
    </div>
</section>
  )
}

export default Register