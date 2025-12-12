import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { LoaderCircle } from 'lucide-react'; // 1. Import Loader

export const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 2. New Loading State (default true)

    useEffect(() => {
        // Set loading to true at the start of fetch
        setIsLoading(true); 
        
        fetch('https://e-commerece-backend-8.onrender.com/popularinwomen')
            .then((res) => res.json())
            .then((data) => {
                setPopularProducts(data);
            })
            .catch(error => {
                console.error("Failed to fetch popular products:", error);
                // Optionally show a toast error here
            })
            .finally(() => {
                setIsLoading(false); // 3. Set loading to false when fetch completes (success or fail)
            });
    }, []);

    return (
        <div className='flex flex-col items-center gap-20 py-20 px-4 md:px-10 lg:px-20'>

            {/* Title and Divider (Always visible) */}
            <div className='text-center'>
                <h1 className='text-5xl md:text-6xl font-semibold text-gray-800'>
                    POPULAR IN WOMEN
                </h1>
                <hr className='w-40 h-1.5 bg-black border-none rounded-lg mx-auto mt-2' />
            </div>

            {/* 4. Conditional Rendering based on Loading State */}
            {isLoading ? (
                // Show Loader
                <div className='flex justify-center items-center h-48'>
                    <LoaderCircle className="animate-spin text-gray-500" size={48} />
                </div>
            ) : popularProducts.length > 0 ? (
                // Show Products Grid if loaded and products exist
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                    {popularProducts.map((item, i) => {
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
            ) : (
                // Show No Products message if loaded but empty
                <div className='text-center text-xl text-gray-500 h-48'>
                    No popular products found.
                </div>
            )}
        </div>
    );
};

export default Popular;