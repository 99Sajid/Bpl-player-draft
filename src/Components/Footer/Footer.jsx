import React from 'react';
import Navimg from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='relative mt-80'>
        <div className='absolute top-0 left-1/2
         -translate-x-1/2 -translate-y-1/2
         w-[80%] max-w-3xl z-20 border-18 border-white rounded-2xl shadow-2xl '>
        <div className="relative bg-neutral-900 text-white
rounded-xl p-10 overflow-hidden shadow-2xl">

  {/* Top-left shade */}
  <div className="absolute -bottom-20 -left-20 w-60 h-60 
  bg-red-700/40 rounded-full blur-2xl"></div>

  <div className='absolute -top-20 -right-20 w-60
   h-60 bg-green-700/40 rounded-full blur-2xl'> </div>

  

  {/* Content */}
  <div className="relative z-10 text-center ">
  <h2 className='text-2xl font-semibold '>Subscribe to our Newsletter</h2>
  <p>Get the latest updates and news delivered to your inbox!</p>
  <div className='flex gap-4 text-center justify-center mt-4'>
  <input type="email" placeholder="Enter your email" className="bg-gray-200 rounded-xl p-2 mt-4 text-gray-800" />
    <button className="btn rounded-xl bg-[#E7FE29] p-2 mt-4">Subscribe</button>


  </div>
  
  </div>
</div>
</div>

        <div className="bg-black pt-40 pb-10 px-6 text-center">
            <div>
            <img src={Navimg} className="h-24 w-24 mr-2 inline-block" />
            </div>
<div className='flex flex-col md:flex-row justify-between gap-8 text-white mt-5'>
           <div className='text-xs text-left p-2  text-gray-600'>
            <h2 className='text-xl font-bold pb-2 text-white'>About Us</h2>
            <p >We are a passionate team</p>
            <p>dedicated to providing the best</p>
            <p>services to our customers.</p> 
            </div>
            <div className='text-xs text-left p-2  text-gray-600'>
            <h2 className='text-xl font-bold pb-2 text-white'>Quick Links</h2>
            <ol>
            <p>Home</p>
            <p>Services</p>
            <p>About</p>
            <p>Contact Us</p>
            </ol>
            </div>
            <div className='text-xs text-left p-2 text-gray-600'>
            <h2 className='text-xl font-bold pb-2 text-white'>Subscribe</h2>
            <p>Subscribe to our newsletter for <br></br> the latest updates.</p>
            <div className='flex mt-2 text-center'>
            <input type="email" placeholder="Enter your email" className="rounded-r-0 rounded-l-xl bg-white text-gray-500 " />
            <button className="btn rounded-l-0 rounded-r-xl  bg-[#E7FE29]">Subscribe</button>

            </div>            
            
            </div>
</div>
            
        </div>
        </div>
    );
};

export default Footer;