import React from 'react'
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Footer.css' 
import footer_logo from '../Asset/logo_big.png'
import instagram_icon from '../Asset/instagram_icon.png'
import pintester_icon from '../Asset/pintester_icon.png'
import whatsapp_icon from '../Asset/whatsapp_icon.png'

const Footer = () => {
    return (
        // Main Footer Container
        <div className='flex flex-col justify-center items-center gap-8 py-10 bg-white shadow-2xl mt-20'>
            
            {/* Footer Logo */}
            <div className="flex items-center gap-5">
                <img className="w-16 h-16" src={footer_logo} alt='STYLO Logo' />
                <p className='text-gray-800 text-5xl font-semibold'>STYLO</p>
            </div>

            {/* Footer Links */}
            <ul className='flex flex-wrap justify-center gap-10 md:gap-16 text-gray-700 text-lg font-medium list-none'>
                <li className='cursor-pointer hover:text-indigo-600 transition-colors duration-200'>Company</li>
                <li className='cursor-pointer hover:text-indigo-600 transition-colors duration-200'>Products</li>
                <li className='cursor-pointer hover:text-indigo-600 transition-colors duration-200'>Offices</li>
                <li className='cursor-pointer hover:text-indigo-600 transition-colors duration-200'>About</li>
                <li className='cursor-pointer hover:text-indigo-600 transition-colors duration-200'>Contact</li>
            </ul>

            {/* Footer Social Icons */}
            <div className="flex gap-4">
                {/* Individual Icon Container (Added hover effects) */}
                <div className="p-3 bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110">
                    <img className='w-6' src={instagram_icon} alt='Instagram' />
                </div>
                <div className="p-3 bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110">
                    <img className='w-6' src={whatsapp_icon} alt='Whatsapp' />
                </div>
                <div className="p-3 bg-white border border-gray-300 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110">
                    <img className='w-6' src={pintester_icon} alt='Pintester' />
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-center w-full mt-4">
                {/* Horizontal Rule */}
                <hr className='w-4/5 h-0.5 bg-gray-300 border-none mb-6' />
                <p className='text-gray-600 text-sm'>
                    Copyright &copy; 2025 - All Right Reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer