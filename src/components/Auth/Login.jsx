import React from 'react'
import { useState } from 'react';
const Login = ({handleLogin}) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        
        setEmail("")
        setPassword("")

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div id='login-page' className='border-2 border-emerald-600 p-20'>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}
            className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
             setEmail(e.target.value)
               
                
            }}
             required className='border-2 border-emerald-600 rounded-full bg-transparent py-2 px-6 text-xl text-white outline-none placeholder:text-gray-400' type="email" placeholder='Enter Your Email'
             />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required className='border-2 border-emerald-600 rounded-full bg-transparent  py-2 px-6 text-xl text-white outline-none placeholder:text-gray-400 mt-4' type="text" placeholder='Password'/>
            <button id='btn' className='border-none bg-emerald-600 rounded-full   py-2 px-25 text-xl text-white outline-none placeholder:text-white mt-7'>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login