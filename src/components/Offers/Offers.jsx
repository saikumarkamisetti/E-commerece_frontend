import React from 'react'
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Offers.css' 
import exclusive_image from '../Asset/exclusive_image.png';

const Offers = () => {
  return (
    // Main Offers Container: Centered, large background with pink gradient
    <div className='w-full max-w-7xl h-auto min-h-[60vh] flex flex-col lg:flex-row mx-auto my-24 p-8 md:p-12 lg:p-24 bg-gradient-to-r from-pink-50 to-pink-200 rounded-3xl shadow-xl'>
      
      {/* Offers Left Section: Text Content */}
      <div className="flex flex-col justify-center gap-4 flex-1 text-gray-800">
        
        {/* Title Lines */}
        <h1 className='text-5xl md:text-7xl font-bold leading-tight'>Exclusive</h1>
        <h1 className='text-5xl md:text-7xl font-bold leading-tight'>OFFERS FOR YOU</h1>
        
        {/* Subtitle */}
        <p className='text-xl md:text-2xl font-normal mt-4'>ONLY ON BEST SELLERS PRODUCTS</p>
        
        {/* Button */}
        <button className='w-48 h-14 mt-8 rounded-full bg-red-500 text-white text-lg font-medium cursor-pointer 
                           transition duration-300 hover:bg-red-600 shadow-md'>
          Check Now
        </button>
      </div>
      
      {/* Offers Right Section: Image */}
      <div className="flex flex-1 justify-center items-center mt-10 lg:mt-0">
        <img 
          className='w-full max-w-xs md:max-w-sm lg:max-w-lg object-contain' 
          src={exclusive_image} 
          alt="Exclusive Offer Model" 
        />
      </div>
    </div>
  )
}
export default Offers;