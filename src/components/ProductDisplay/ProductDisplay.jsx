import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Asset/star_icon.png';
import star_dull_icon from '../Asset/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} className='productdisplay-main-img' alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(132)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old"> ${product.old_price}</div>
                <div className="productdisplay-right-prices-new"> ${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                This men‘s Venice tee shirt is a great choice for a casual, everyday look.

The burnout fabric is soft and comfortable, and the two button notch neck adds a touch of style.            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className='productdisplay-right-category'><span>Tag :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
export default ProductDisplay;