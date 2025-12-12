import React, { useEffect, useState } from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './NewCollection.css';
import Item from '../Item/Item';
import { LoaderCircle } from 'lucide-react'; // 1. Import Loader

const NewCollection = () => {
    const [new_collection, setNew_Collection] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 2. New Loading State (default true)

    useEffect(() => {
        setIsLoading(true);
        fetch('https://e-commerece-backend-8.onrender.com/newcollection')
            .then((res) => res.json())
            .then((data) => {
                setNew_Collection(data);
            })
            .catch(error => {
                console.error("Failed to fetch new collection:", error);
                // Optionally handle fetch error here
            })
            .finally(() => {
                setIsLoading(false); // 3. Set loading to false when fetch completes
            });
    }, []);

    return (
        // Main Container for New Collection Section: Centered layout with padding
        <div className='flex flex-col items-center gap-10 py-10 px-4 md:px-10 lg:px-20'>

            {/* Title and Divider (Always visible) */}
            <div className='text-center'>
                <h1 className='text-5xl md:text-6xl font-semibold text-gray-800 uppercase'>
                    new collections
                </h1>
                {/* Custom Divider Line */}
                <hr className='w-40 h-1.5 bg-black border-none rounded-lg mx-auto mt-2' />
            </div>

            {/* 4. Conditional Rendering based on Loading State */}
            {isLoading ? (
                // Show Loader
                <div className='flex justify-center items-center h-48'>
                    <LoaderCircle className="animate-spin text-gray-500" size={48} />
                </div>
            ) : new_collection.length > 0 ? (
                // Show Products Grid if loaded and products exist
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mt-10">
                    {new_collection.map((item, i) => {
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
                    No new collection products found.
                </div>
            )}
        </div>
    );
};

export default NewCollection;