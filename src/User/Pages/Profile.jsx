// import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import { useState } from 'react'
import Edit from '../Components/Edit'

function Profile() {
  const [currenttab,setCurrenttab] = useState()
  return (
    <>
      <Header/>
    <div style={{height:'200px' }} className='bg-black'></div>
      <div style={{height:'230px', width:'230px', borderRadius:'50%', marginLeft:'75px', marginTop:'-130px'}} className='bg-white'>

        <img style={{height:'200px', width:'200px', borderRadius:'50%'}} src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" alt="user"/>
      </div>

      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text:-3xl text-2xl'>USER NAME</h1>
          <FaCircleCheck className='text-blue-500 ms-3'/>
        </div>
          <Edit/>
      </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='text-justify md:px-20 px-5 my-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente eaque reprehenderit deleniti error voluptatibus voluptates repudiandae, laudantium consectetur assumenda corporis soluta officiis beatae minus facere! Impedit illum ut blanditiis.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, nesciunt, quae iste sed sint assumenda deleniti pariatur iure obcaecati ex sequi ad velit neque eos cum quaerat quo. Neque, asperiores
      </p>
      <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>(setCurrenttab(1))} className={ currenttab== 1 ? 'p-4 border-gray-200 border-1 border-t border-r rounded cursor-pointer':'p-4 border gray-200 border-b rounded cursor-pointer'
        }>Upload Book</p>
        <p onClick={()=>(setCurrenttab(2))} className={ currenttab== 2 ? 'p-4 border-gray-200 border-1 border-t border-r rounded cursor-pointer':'p-4 border gray-200 border-b rounded cursor-pointer'
        }> Upload Book Status</p>
        <p onClick={()=>(setCurrenttab(3))} className={ currenttab== 3 ? 'p-4 border-gray-200 border-1 border-t border-r rounded cursor-pointer':'p-4 border gray-200 border-b rounded cursor-pointer'
        }> Purchase History</p>
      </div>
    { currenttab==1 && <div>Upload Books</div>}
    {currenttab == 2 && <div>Upload book Picture</div>}
    {currenttab== 3 && <div>Purchase History</div>}
  <Footer/>

    </>
  )
}

export default Profile
