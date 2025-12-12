import React, { useContext, useState } from "react";
// ❌ DELETE OR COMMENT OUT THIS LINE: import "./Navbar.css"; 
import logo from '../Asset/logo.png';
import cart_icon from '../Asset/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    // ✅ FIX: Renamed state variable to 'activeMenu' to avoid conflict with imported Lucide <Menu /> component.
    const [activeMenu, setActiveMenu] = useState("shop");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext);

    // Helper function to close the menu on link click
    const handleLinkClick = (menuName) => {
        setActiveMenu(menuName); // Use the corrected setter
        setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    };

    return (
        // Outer Container: Responsive layout, shadow, sticky to top
        <div className="flex justify-around items-center py-4 px-6 shadow-md bg-white sticky top-0 z-50">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <img className="w-12 h-12" src={logo} alt="STYLO Logo"/>
                <p className="text-gray-800 text-3xl font-semibold">STYLO</p>
            </div>

            {/* Mobile Menu Toggle Button: Hidden on desktop (md:hidden) */}
            <div 
                className="cursor-pointer md:hidden text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {/* Use imported Lucide icons */}
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>

            {/* Navigation Menu (.nav-menu) */}
            <ul className={`
                flex flex-col md:flex-row md:items-center md:gap-10 text-gray-700 font-medium text-lg
                ${isMobileMenuOpen 
                    ? 'fixed inset-0 top-[80px] w-full h-full bg-white z-40 p-10 space-y-8 flex' 
                    : 'hidden md:flex'
                }
            `}>
                {/* Menu Items (Loop/Repeat pattern) */}
                {[
                    { name: 'shop', path: '/', label: 'Shop' },
                    { name: 'men', path: '/mens', label: 'Men' },
                    { name: 'women', path: '/womens', label: 'Women' },
                    { name: 'kids', path: '/kids', label: 'Kids' },
                ].map((item) => (
                    <li 
                        key={item.name}
                        onClick={() => handleLinkClick(item.name)}
                        className="cursor-pointer relative group transition-all duration-300 hover:text-indigo-600"
                    >
                        <Link to={item.path} className="text-inherit no-underline">
                            {item.label}
                        </Link>
                        
                        {/* Active/Hover Indicator: Combined logic for a clean look */}
                        <hr className={`
                            w-full h-1 bg-indigo-600 border-none rounded-sm absolute bottom-[-6px] transition-transform duration-300 ease-out
                            ${activeMenu === item.name 
                                ? 'scale-x-100' // Always visible if active
                                : 'scale-x-0 group-hover:scale-x-75' // Hidden, but shows on hover
                            }
                        `}/>
                    </li>
                ))}
            </ul>

            {/* Login/Cart Section */}
            <div className="flex items-center gap-6">
                
                {/* Login/Logout Button */}
                {localStorage.getItem('auth-token')
                    ? <button 
                        onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}
                        className="h-10 px-6 bg-white border border-gray-400 text-gray-700 rounded-full font-medium transition duration-150 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    : <Link to="/login">
                        <button className="h-10 px-6 bg-white border border-gray-400 text-gray-700 rounded-full font-medium transition duration-150 hover:bg-gray-100">
                            Login
                        </button>
                      </Link>
                }

                {/* Cart Icon and Count */}
                <Link to='/cart' className="relative">
                    <img src={cart_icon} alt="Cart" className="w-8" />
                    {/* Cart Count */}
                    <div className="absolute top-[-8px] right-[-8px] flex items-center justify-center 
                                   w-5 h-5 bg-red-500 text-white rounded-full text-xs font-semibold">
                        {getTotalCartItems()}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;