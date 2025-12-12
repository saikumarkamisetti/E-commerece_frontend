import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollection from "../components/NewCollection/NewCollection";
import NewLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

 const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection/>
            <NewLetter/>
            
        </div>
    )
 }
 export default Shop