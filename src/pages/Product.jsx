import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    // Ensure product is found and exists before passing it down
    const product = all_product.find((e)=> e.id === Number(productId)); 
    
    // Safety check to ensure the product is found
    if (!product) {
        return <div className="p-20 text-center text-xl font-medium">Product Not Found</div>;
    }

    return (
        // Added standard horizontal padding for consistency with other pages
        <div className="px-4 md:px-12 lg:px-20 py-8">
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    )
}
export default Product;