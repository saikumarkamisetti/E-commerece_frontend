import "./Navbar.css";
import React, { useContext, useRef, useState } from "react";
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_png from "../Asset/dropdown_png.png";
const Navbar = () => {
    const [Menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>STYLO</p>
            </div>
            <img onClick={dropdown_toggle} className="nav-dropdown" src={dropdown_png} alt=" "/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop");}}><Link style={{textDecoration:"none",color:"none"}} to='/'>Shop</Link>{Menu === "shop" && <hr/>}</li>
                <li onClick={()=>{setMenu("men");}}><Link style={{textDecoration:"none", color:"none"}} to='/mens'>Men</Link>{Menu === "men" && <hr/>}</li>
                <li onClick={()=>{setMenu("women");}}><Link style={{textDecoration:"none"}} to='/womens'>Women</Link>{Menu === "women" && <hr/>}</li>
                <li onClick={()=>{setMenu("kids");}}><Link style={{textDecoration:"none"}} to = "kids">Kids</Link>{Menu === "kids" && <hr/>}</li>
                
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<><button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button></>
            :<Link to = "/login"><button>Login</button></Link>}
                 <Link to = '/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar