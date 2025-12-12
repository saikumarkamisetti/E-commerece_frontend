import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);
    const getDefaultCart = () =>{
        let cart = {};
        for(let index = 0;index<300+1;index++){
            cart[index] = 0;
        }
        
        return cart;
    }

const ShopContextProvider = (props) => {
     const [cartItems,setCartItems] = useState(getDefaultCart());
     const [all_product,setAll_Product] = useState([]);

    useEffect(()=>{
        fetch('https://e-commerece-backend-8.onrender.com/allproducts')
        .then((res)=>res.json())
        .then((data)=>setAll_Product(data)); // Added semicolon

        // The dependency array for this useEffect is empty, meaning it runs once on mount.
        // If 'auth-token' were to change reactively (e.g., through a state variable),
        // you might need to add it to the dependency array.
        // For localStorage, it's typically checked once on load.
        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerece-backend-8.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/json', // Changed from form-data as JSON is sent
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"", // body for GET should generally be empty or null. For POST without specific data, an empty string is common.

            }).then((res)=>res.json())
            .then((data)=>setCartItems(data));
        }
    },[]); // Empty dependency array means this effect runs once after the initial render.

    // console.log(cartItems); // This console.log is fine for debugging, but typically removed in production.

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://e-commerece-backend-8.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json', // Changed from form-data as JSON is sent
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data)) // Added semicolon
            .catch((error) => console.error("Error adding to cart:", error)); // Added error handling
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('https://e-commerece-backend-8.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/json', // Changed from form-data as JSON is sent
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data)) // Added semicolon
            .catch((error) => console.error("Error removing from cart:", error)); // Added error handling
        }
    }
    
    const getTotalCartAmount = () => {
          let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                // Ensure itemInfo exists before accessing its properties
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    console.warn(`Product with ID ${item} not found in all_product.`);
                }
            }
            // console.log(totalAmount); // Removed this console.log from inside the loop
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

   const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    
   return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   ) 
}
export default ShopContextProvider;