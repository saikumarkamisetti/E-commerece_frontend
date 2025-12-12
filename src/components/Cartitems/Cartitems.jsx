import React, { useContext } from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './Cartitems.css';
import remove_icon from '../Asset/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Cartitems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext); 
    
    // Define the grid template for cart rows (7 columns: image, title, price, quantity, total, remove)
    const gridFormat = 'grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center text-gray-700 text-sm md:text-base font-medium py-3 border-b border-gray-200';

    return (
        <div className='max-w-7xl mx-auto py-10 px-4'>
            
            {/* Table Header (cartitem-format-main) */}
            <div className={`${gridFormat} font-bold uppercase text-lg hidden md:grid`}>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='hidden md:block border-gray-300'/>

            {/* Cart Items List */}
            {all_product.map((e) => {
                if(cartItems[e.id] > 0)
                {
                    return (
                        <div key={e.id}>
                            {/* Mobile/Single-Column Display (visible on small screens) */}
                            <div className='flex flex-col md:hidden border border-gray-200 rounded-lg p-4 mb-4 shadow-sm'>
                                <div className='flex items-center gap-4'>
                                    <img src={e.image} alt={e.name} className='w-20 h-20 object-cover rounded-md' />
                                    <div className='flex-1'>
                                        <p className='font-semibold text-lg'>{e.name}</p>
                                        <p className='text-red-500 font-bold'>${e.new_price}</p>
                                    </div>
                                    <img 
                                        className='w-5 h-5 cursor-pointer' 
                                        src={remove_icon} 
                                        onClick={() => {removeFromCart(e.id)}} 
                                        alt="Remove" 
                                    />
                                </div>
                                <div className='flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-200'>
                                    <p>Quantity: 
                                        <button className='ml-2 px-3 py-1 border border-gray-400 rounded-md text-sm bg-gray-100'>
                                            {cartItems[e.id]}
                                        </button>
                                    </p>
                                    <p className='font-bold'>Total: ${e.new_price * cartItems[e.id]}</p>
                                </div>
                            </div>

                            {/* Desktop Row (hidden on small screens) */}
                            <div className={`${gridFormat} hidden md:grid`}>
                                <img src={e.image} alt={e.name} className='w-16 h-16 object-cover rounded-md' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='px-3 py-1 border border-gray-400 rounded-md w-16 bg-white'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img 
                                    className='w-4 h-4 cursor-pointer mx-auto' 
                                    src={remove_icon} 
                                    onClick={() => {removeFromCart(e.id)}} 
                                    alt="Remove" 
                                />
                            </div>
                        </div>
                    )
                }
                return null;
            })}

            {/* Cart Totals and Promo Code Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10">
                
                {/* Cart Totals (cartitems-total) */}
                <div className="flex flex-col flex-1 gap-6">
                    <h1 className='text-3xl font-bold mb-4'>Cart Totals</h1>
                    <div className='flex flex-col gap-4'>
                        {/* Subtotal */}
                        <div className="flex justify-between text-lg text-gray-700">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='border-gray-300'/>
                        
                        {/* Shipping Fee */}
                        <div className='flex justify-between text-lg text-gray-700'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className='border-gray-300'/>
                        
                        {/* Total */}
                        <div className="flex justify-between text-2xl font-bold text-gray-900">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    
                    {/* Checkout Button */}
                    <button className='w-full lg:w-60 h-14 mt-6 bg-red-500 text-white text-lg font-medium rounded-lg cursor-pointer transition duration-200 hover:bg-red-600 shadow-md'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                {/* Promo Code Section (cartitems-promocode) */}
                <div className="flex flex-col flex-1 gap-4 mt-8 lg:mt-0">
                    <p className='text-gray-700 font-medium'>If you have a promo code, Enter it here</p>
                    <div className="flex h-12">
                        <input 
                            type="text" 
                            placeholder='promo code' 
                            className='flex-1 px-4 border border-gray-300 rounded-l-lg outline-none focus:border-red-500'
                        />
                        <button className='w-32 bg-black text-white text-base font-medium rounded-r-lg cursor-pointer transition duration-200 hover:bg-gray-800'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cartitems;