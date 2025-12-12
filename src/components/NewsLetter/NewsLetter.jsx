import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './NewsLetter.css';

const NewLetter = () => {
  return (
    // Main Newsletter Container: Full width, centered, large padding, pink background, rounded corners
    <div className='flex flex-col items-center justify-center mx-auto my-20 p-16 md:p-24 w-full max-w-7xl h-auto min-h-[40vh] 
                    bg-gradient-to-r from-pink-100 to-pink-200 text-gray-800 rounded-3xl shadow-xl space-y-4'>
        
        {/* Title */}
        <h1 className='text-3xl md:text-5xl font-bold text-center leading-tight'>
            Get Exclusive Offers on your Email
        </h1>
        
        {/* Subtitle */}
        <p className='text-lg md:text-xl font-medium text-center text-gray-700'>
            Subscribe to our newsletter and stay updated
        </p>
        
        {/* Input and Button Container */}
        <div className='flex flex-col sm:flex-row items-center justify-center w-full max-w-lg mt-8 h-16 bg-white border border-gray-300 rounded-full shadow-lg'>
            
            {/* Input Field */}
            <input 
                type='email' 
                placeholder='Your Email id'
                className='flex-1 h-full px-6 text-base text-gray-700 bg-transparent border-none outline-none rounded-l-full sm:rounded-none sm:rounded-l-full w-full sm:w-auto'
            />
            
            {/* Subscribe Button */}
            <button
                className='w-full sm:w-auto h-16 sm:h-full px-8 bg-black text-white text-lg font-medium cursor-pointer 
                           transition duration-300 hover:bg-gray-700 rounded-full sm:rounded-r-full sm:rounded-l-none'
            >
                Subscribe
            </button>
        </div>
    </div>
  )
}
export default NewLetter;