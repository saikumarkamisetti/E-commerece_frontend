import React ,{useContext} from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from '../components/Item/Item';
import dropdowm_icon from '../components/Asset/dropdown_icon.png';
const ShopCategory = (props)=>{
    const {all_product} = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="omg" src={props.banner} alt=""/ >
             <div className="ShopCategory-indexsort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdowm_icon} alt=""/>
            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item,i)=>{
                if (props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                    return null;
                }
            }
            )}
        </div>
        <div className="shop-loadmore">
            Explore More
        </div>
        </div>
       
    )
}
export default ShopCategory