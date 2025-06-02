import React from 'react'
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (132)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is essentially an online storefront where businesses can sell their products or services directly to customers over the internet. Think of it as a digital version of a physical shop.</p>
            <p>
                In short, an e-commerce website provides all the necessary tools and features for businesses to conduct sales online and for customers to browse and purchase goods or services from the comfort of their own devices.
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox