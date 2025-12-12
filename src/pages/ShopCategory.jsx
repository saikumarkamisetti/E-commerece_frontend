import React ,{useContext} from "react";
// ❌ DELETE OR COMMENT OUT THIS LINE: import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from '../components/Item/Item';
import dropdowm_icon from '../components/Asset/dropdown_icon.png';
import { LoaderCircle } from 'lucide-react'; // Import Loader

const ShopCategory = (props)=>{
    const {all_product} = useContext(ShopContext);
    
    // Check if the product list is empty. This is used as a proxy for "loading".
    const isLoading = all_product.length === 0;

    return (
        // Main Shop Category Container
        <div className="px-4 py-8 md:px-12 lg:px-20">
            
            {/* Category Banner Image */}
            <img className="w-full h-auto object-cover mb-8 rounded-lg shadow-lg" src={props.banner} alt="Category Banner" />
            
            {/* Index/Sort Bar Container (Always visible) */}
            <div className="flex justify-between items-center mb-8">
                
                {/* Showing Products Text */}
                <p className="text-gray-700 text-base md:text-lg">
                    {/* Note: This is hardcoded to 1-12 out of 36, consider updating if you implement pagination */}
                    <span>Showing 1-12</span> out of 36 products
                </p>
                
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-full cursor-pointer transition-colors duration-150 hover:bg-gray-100 text-gray-700 text-base">
                    Sort by <img className="w-3.5" src={dropdowm_icon} alt="Dropdown Icon"/>
                </div>
            </div>
            
            {/* Conditional Rendering */}
            {isLoading ? (
                // Show Loader
                <div className='flex justify-center items-center h-48'>
                    <LoaderCircle className="animate-spin text-gray-500" size={48} />
                </div>
            ) : (
                // Product Grid (shopcategory-products)
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">
                    {all_product.map((item,i)=>{
                        if (props.category === item.category){
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
                        }
                        return null;
                    })}
                </div>
            )}
            
            {/* Load More Button */}
            <div className="flex justify-center mt-16">
                <div className="w-56 h-16 flex items-center justify-center border border-gray-400 rounded-full text-gray-700 text-lg font-medium cursor-pointer transition duration-200 hover:bg-gray-100">
                    Explore More
                </div>
            </div>
        </div>
    );
}
export default ShopCategory;