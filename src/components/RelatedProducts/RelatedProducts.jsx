import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './RelatedProducts.css';
import data_product from '../Asset/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
    return (
        // Main Related Products Container: Centered title and grid, margin for spacing
        <div className='flex flex-col items-center py-20 px-4 md:px-8'>
            
            {/* Title */}
            <h1 className='text-4xl md:text-5xl font-semibold text-gray-800 mb-2'>
                Related Products
            </h1>
            
            {/* Divider Line (Optional: adds visual weight like in Popular/New Collections) */}
            <hr className='w-40 h-1.5 bg-black border-none rounded-lg mx-auto mb-16' />
            
            {/* Product Grid (relatedproducts-item)
                - Grid layout for responsiveness
                - Responsive columns: 1 on small, 2 on medium, 4 on large screens
                - Gap between items (gap-x-10 gap-y-10)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                {data_product.map((item, i) => {
                    return (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default RelatedProducts;