import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center front-bold text-3xl my-5'> CONTACT</h1>
        <p className='text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rem, possimus quos molestias voluptatum aspernatur. Labore corrupti, aut consectetur, quibusdam veniam obcaecati dolore atque incidunt soluta, eum a tenetur maiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa odio libero facilis earum provident soluta et minima recusandae animi, eum, illum quo tempore quam iste praesentium amet ex. Saepe!.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam molestias laborum quia eius dolores dolorum nihil omnis, possimus esse consequuntur ab accusamus. Ipsa, excepturi perferendis! Quae voluptatum officia similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem autem ex error consectetur laborum illum quis perferendis voluptatibus unde provident inventore repudiandae maiores, deserunt doloribus necessitatibus voluptates similique nobis.
        </p>
        {/* grid address,number,gmail */}
        <div className='md:grid grid-cols-3 item-center mt-5 p-5 md:px-40 md:mt-0'>
          {/* location */}
          <div className='flex items-center'>
            <div style={{height:'50px', width:'50px', borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaLocationPin/>
            </div>
           <p className='ms-5'>123 Main Street, Apt 40, Anytown, Ca 91234</p>

          </div>

         <div className='flex items-center'>
            <div style={{height:'50px', width:'50px', borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaPhone/>
            </div>
           <p className='ms-5'>+9903459823</p>

          </div>

          <div className='flex items-center'>
            <div style={{height:'50px', width:'50px', borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'>
              <FaEnvelope/>
            </div>
           <p className='ms-5'>contact@bookstore.com</p>

          </div>

        </div>
         <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
          {/* message */}
          <div className='bg-gray-300 text-center p-5'>
            <h1 className='font-bold text-2xl'> Send Us Message</h1>
            <form>
              <div className='mb-5 mt-10'>
                <input type='text' placeholder='Name' className='bg-white w-full p-2'/>
              </div>
              <div className='mb-5 mt-10'>
                <input type='text' placeholder='Email' className='bg-white w-full p-2'/>
              </div>
              <div className='mb-5 mt-10'>
                <input type='text' placeholder='Message' className='bg-white w-full p-2'/>
              </div>
             <div className='my-5'>
              <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submitt  <FaPaperPlane className='ms-2'/></button>
             </div>
            </form>

          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.558327202896!2d76.3094810239631!3d10.008813464714764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Keralam!5e0!3m2!1sen!2sin!4v1795065757788!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
         </div>

        <div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
