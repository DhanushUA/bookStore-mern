import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {

  const [togglePasswordType,settogglePasswordType] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(landing.jpg)]  bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='font-bold text-3xl text-white text-center'>BOOK STORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{width:'80px', height:'80px', borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl'/>
          </div>
          <h1 className='text-2xl'> {insideRegister?"Register": "Login"}  </h1>
          {/* form */}
          <form>
            {/* username */}
            {
              insideRegister &&
              <input type='text' placeholder='username' className='bg-white text-black p-2 my-5 w-full rounded'/>
            }
            {/* gmail */}
            <input type='email' placeholder='E-mail' className='bg-white text-black p-2 my-5 w-full rounded'/>
            <div className='flex items-center'>
              <input type={ togglePasswordType ? "text":"password"} placeholder='password' className='bg-white text-black p-2 mb-5 w-full rounded'/>
              {
                togglePasswordType ?
                <FaEyeSlash onClick={()=>settogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px' , marginTop:'-20px'}}/>
                :
               <FaEye  onClick={()=>settogglePasswordType(!togglePasswordType)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px' , marginTop:'-20px'}}/>
              }
            </div>
            {/* forget password */}
            <div className='flex justify-between mb-5'>
              <p className='text-xs text-orange-500'>*Never Share your password with others.</p>
              {
                !insideRegister &&
                <button className='text-xs underline'> Forget Password</button>
              }
            </div>
            {/* login or register button */}
            <div className='my-5 text-center'>
              {
                insideRegister ?
                <button className='bg-green-800 w-full p-2 rounded'>Register</button>
                :
                 <button className='bg-green-800 w-full p-2 rounded'>Login</button>
              }
            </div>
             {/* google auth */}
             {
               !insideRegister &&
                <div>
                  <p>---------------------------or----------------------------</p>
                  <div className='flex justify-center w-full mt-2'>
                    Google Authentication
                  </div>
                </div>

             }
             {/* new / already user */}
             <div className='text-center'>
              {
                 insideRegister ?
                 <p className='text-blue-500'> Existing User ? <Link to={'/login'} className='ms-4 underline'> Login </Link></p>
                :
                 <p className='text-blue-500'> New User ? <Link to={'/register'} className='ms-4 underline'> Register </Link></p>
              }
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
