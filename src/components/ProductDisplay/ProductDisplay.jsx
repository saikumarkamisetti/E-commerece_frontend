import React, { useContext } from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './ProductDisplay.css';
import star_icon from '../Asset/star_icon.png';
import star_dull_icon from '../Asset/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
        // Main Product Display Container: Responsive two-column layout (flex on medium/large screens)
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 py-10'>
            
            {/* Product Display Left: Image Gallery */}
            <div className="flex flex-col md:flex-row gap-4 lg:w-1/2">
                
                {/* Image List (Thumbnails) */}
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden p-2 lg:p-0">
                    <img className="w-20 h-auto cursor-pointer border border-gray-200 rounded-md object-cover hover:border-red-500 transition" src={product.image} alt="Thumbnail 1" />
                    <img className="w-20 h-auto cursor-pointer border border-gray-200 rounded-md object-cover hover:border-red-500 transition" src={product.image} alt="Thumbnail 2" />
                    <img className="w-20 h-auto cursor-pointer border border-gray-200 rounded-md object-cover hover:border-red-500 transition" src={product.image} alt="Thumbnail 3" />
                    <img className="w-20 h-auto cursor-pointer border border-gray-200 rounded-md object-cover hover:border-red-500 transition" src={product.image} alt="Thumbnail 4" />
                </div>
                
                {/* Main Image */}
                <div className="flex-1">
                    <img src={product.image} className='w-full h-auto object-cover rounded-lg shadow-md' alt="Main Product" />
                </div>
            </div>
            
            {/* Product Display Right: Details and CTA */}
            <div className="flex flex-col gap-4 lg:w-1/2">
                
                {/* Product Name */}
                <h1 className='text-3xl md:text-4xl font-semibold text-gray-800'>{product.name}</h1>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <img className='w-4' src={star_icon} alt="Star Icon" />
                    <img className='w-4' src={star_icon} alt="Star Icon" />
                    <img className='w-4' src={star_icon} alt="Star Icon" />
                    <img className='w-4' src={star_icon} alt="Star Icon" />
                    <img className='w-4' src={star_dull_icon} alt="Dull Star Icon" />
                    <p className='text-sm'>(132)</p>
                </div>
                
                {/* Prices */}
                <div className="flex items-center gap-5 my-4">
                    <div className="text-gray-400 text-xl font-medium line-through"> ${product.old_price}</div>
                    <div className="text-red-500 text-3xl font-bold"> ${product.new_price}</div>
                </div>
                
                {/* Description */}
                <div className="text-gray-600 text-base leading-relaxed">
                    This men‘s Venice tee shirt is a great choice for a casual, everyday look.
                    The burnout fabric is soft and comfortable, and the two button notch neck adds a touch of style.
                </div>
                
                {/* Size Selection */}
                <div className="mt-6">
                    <h1 className='text-xl font-medium mb-3'>Select Size</h1>
                    <div className="flex gap-4">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size}
                                className='w-12 h-12 flex items-center justify-center border border-gray-400 rounded-md cursor-pointer 
                                           text-gray-700 text-base font-medium transition duration-150 hover:bg-gray-200 active:bg-red-500 active:text-white'
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                    onClick={() => {addToCart(product.id)}}
                    className='w-full md:w-48 h-12 mt-8 bg-red-500 text-white text-lg font-medium rounded-lg cursor-pointer transition duration-200 hover:bg-red-600 shadow-md'
                >
                    ADD TO CART
                </button>
                
                {/* Category and Tags */}
                <p className='text-gray-600 mt-4 text-base'>
                    <span className='font-semibold text-gray-800'>Category :</span> Women , T-Shirt , Crop Top
                </p>
                <p className='text-gray-600 text-base'>
                    <span className='font-semibold text-gray-800'>Tag :</span> Modern, Latest
                </p>
            </div>
        </div>
    )
}
export default ProductDisplay;