import React from 'react'
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Breadcrums.css';
import arrow_icon from '../Asset/arrow.png';

const Breadcrums = (props) => {
    const {product} = props;
    
    return (
        // Main Breadcrumb Container: Centered items, medium text size, capitalization
        // Added margin to separate it from surrounding content
        <div className='flex items-center gap-2 text-gray-700 text-sm md:text-base capitalize my-10 mx-auto'>
            
            <span className='font-medium'>HOME</span> 
            <img className='w-2' src={arrow_icon} alt='Arrow icon'/> 
            
            <span className='font-medium'>SHOP</span> 
            <img className='w-2' src={arrow_icon} alt='Arrow icon'/> 
            
            <span className='font-medium'>{product.category}</span> 
            <img className='w-2' src={arrow_icon} alt='Arrow icon'/> 
            
            {/* Final Item (Current Product Name) - Usually slightly dimmer */}
            <span className='font-normal text-gray-500'>
                {product.name}
            </span>
        </div>
    )
}
export default Breadcrums;