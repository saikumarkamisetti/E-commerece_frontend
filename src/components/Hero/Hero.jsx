import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Hero.css' 
import hand_icon from '../Asset/hand_icon.png';
import arrow_icon from '../Asset/arrow.png';
import hero_image from '../Asset/hero_image.png';

const Hero = () => {
  return (
    // Main Hero Container: Full width, pink background, padding, flex layout
    <div className='flex flex-col lg:flex-row justify-between items-center bg-pink-100 h-screen-3/4 px-6 md:px-24 lg:px-36 py-10'>
      
      {/* Hero Left Section: Text Content */}
      <div className="flex flex-col justify-center gap-5 text-gray-800 flex-1 p-4 lg:p-0">
        <h2 className='text-xl md:text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
        
        {/* Large Text Block */}
        <div className='mt-4'>
          <div className="flex items-center gap-5">
            {/* 'New' Text and Hand Icon */}
            <p className='text-7xl md:text-8xl font-bold leading-tight'>new</p>
            <img 
              className='w-16 md:w-20' 
              src={hand_icon} 
              alt='Waving hand icon'
            />
          </div>
          {/* Remaining large text lines */}
          <p className='text-7xl md:text-8xl font-bold leading-tight'>collections</p>
          <p className='text-7xl md:text-8xl font-bold leading-tight'>for everyone</p>
        </div>

        {/* Latest Collection Button */}
        <div className="flex justify-center items-center gap-4 w-64 h-16 rounded-full mt-10 
                        bg-red-500 text-white text-lg font-medium cursor-pointer 
                        transition duration-300 hover:bg-red-600 shadow-lg">
          <div>Latest Collection</div>
          <img className='w-5' src={arrow_icon} alt="Arrow pointing right"/>
        </div>
      </div>

      {/* Hero Right Section: Image */}
      <div className="flex flex-1 justify-center items-center p-4 lg:p-0">
        <img 
          className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain' 
          src={hero_image} 
          alt='Hero model'
        />
      </div>
    </div>
  );
}
export default Hero;