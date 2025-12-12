import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='my-20'>
            
            {/* Navigator Tabs */}
            <div className="flex">
                {/* Active Tab: Description */}
                <div className="flex items-center justify-center h-16 px-10 text-base font-medium 
                                border border-b-0 border-gray-300 bg-white cursor-pointer">
                    Description
                </div>
                {/* Inactive Tab: Reviews */}
                <div className="flex items-center justify-center h-16 px-10 text-base font-medium text-gray-500 
                                border border-gray-300 bg-gray-100 cursor-pointer 
                                transition duration-150 hover:bg-gray-200">
                    Reviews (132)
                </div>
            </div>
            
            {/* Description Content Area */}
            <div className="flex flex-col gap-6 p-6 border border-gray-300 text-gray-700 leading-relaxed bg-white">
                <p>
                    An e-commerce website is essentially an online storefront where businesses can sell their products or services directly to customers over the internet. Think of it as a digital version of a physical shop.
                </p>
                <p>
                    In short, an e-commerce website provides all the necessary tools and features for businesses to conduct sales online and for customers to browse and purchase goods or services from the comfort of their own devices.
                </p>
            </div>
        </div>
    );
};
export default DescriptionBox;