// import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      {/* hero section */}
      <div style={{height:'600px'}} className='flex flex-col justify-center items-center bg-[url(/landing.jpg)] bg-cover text-white'>
        <div  style={{height:'600px', backgroundColor:"rgba(0,0,0,0)"}}className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Wonderful gifts</h1>
          <p> Gift your Family and friends a Book</p>
          <div className='mt-5 flex items-center'>
            <input type="text" placeholder='serach a book' className='bg-white text-black rounded-3xl  w-100 p-2'/>
              <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}}/>
          </div>
        </div>
      </div>
      {/* new arrivals */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
       <h1 className='text-3xl font-bold'> NEW ARRIVALS</h1>
       <h1 className='text-4xl my-2'> Explore Our Latest collections</h1>

      <div className='md:grid grid-cols-4 w-full my-10'>
        <div className='shadow rounded p-3 m-4 md:my-0'>
         <img width={'100%'} height={'300px'} src="https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg/edition/9780330412599.jpg" alt='book'/>
        <div className='flex flex-col justify-center items-center mt-4'>
          <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
          <h3 className='text-lg font-bold'>Title</h3>
          <p className='font-bold text-red-500'>$ 12</p>
        </div>
        </div>
      </div>
       <div>
        <Link to={'/books'} className='bg-black p-3 text-white rounded'>Explore More...</Link>
       </div>

      </section>

      {/* authors */}
     <section className='md:grid grid-cols-2 items-center gap-10'>
      <div className='text-center'>
       <h2 className='font-bold text-xl'>FEATURED AUTHORS</h2>
       <h3 className='text-xl'>Captivates With every word</h3>
       <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
       <p className='text-justify'>Our Author Features include:</p>
       <p className='text-justify my-4'> <span className='font-bold'> ✨ Author Profiles: </span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.  </p>
       <p className='text-justify'> <span className='font-bold'> 📖 Published Works  </span>  Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.   </p>
       <p className='text-justify my-4'>  <span> 🎤 Interviews & Insights : </span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world. </p>
      </div>
      <div className='p-5'>
      <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt=""/>

      </div>
     </section>

     {/* testimonial */}
      <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
       <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
       <h1 className='text-4xl my-2'> See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
        <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}}  src="https://icon2.cleanpng.com/20180508/sgw/kisspng-owen-jones-the-establishment-and-how-they-get-awa-5af255b9b03826.3524218115258310977218.jpg" alt='author'/>

        <h3 className='my-3'>Luther King</h3>
        <p className='text-justify'> This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>

        </div>

      </section>
      <Footer/>
    </>
  )
}

export default Home
