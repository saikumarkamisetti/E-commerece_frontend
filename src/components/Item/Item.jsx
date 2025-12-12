import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        // Main Item Card Container: 
        // - Group for hover effect
        // - Shadow and rounded corners for a modern card look
        // - Transition on hover for smooth scale effect
        <div className='group w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                      transition duration-300 ease-in-out transform hover:scale-[1.03] cursor-pointer'>
            
            {/* Link wrapper for the image */}
            <Link to={`/product/${props.id}`}>
                {/* Image: On click, scroll to top of page */}
                <img 
                    onClick={() => window.scrollTo(0, 0)} 
                    src={props.image} 
                    alt={props.name} 
                    // Make the image fill the width and maintain aspect ratio
                    className='w-full h-auto object-cover'
                />
            </Link>
            
            <div className='p-4 flex flex-col gap-2'>
                {/* Product Name */}
                <p className='text-gray-800 text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
                    {props.name}
                </p>
                
                {/* Prices Container */}
                <div className="flex gap-5 items-center">
                    
                    {/* New Price (Bold and primary color) */}
                    <div className="text-xl font-bold text-red-500">
                        ${props.new_price}
                    </div>
                    
                    {/* Old Price (Strikethrough and muted color) */}
                    <div className="text-lg text-gray-400 line-through">
                        ${props.old_price}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;