import React from 'react';
// ❌ DELETE OR COMMENT OUT THIS LINE: import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Asset/banner_mens.png';
import women_banner from './components/Asset/banner_women.png';
import kid_banner from './components/Asset/banner_kids.png'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // Main container using min-h-screen to ensure the page pushes the footer down 
    // when content is short, preventing overlap with fixed/sticky headers/footers.
    <div className="min-h-screen flex flex-col">       
      <BrowserRouter>
      <Navbar />
      <div className="flex-grow"> {/* This wrapper ensures content takes up available space */}
        <Routes>
          
          {/* Main Shop Page */}
          <Route path='/' element={<Shop />}/>
          
          {/* Category Pages - Using the correctly capitalized <ShopCategory /> */}
          <Route path='/mens' element={<ShopCategory banner={men_banner} category = "men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category = "Women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
          
          {/* Product Page - Standard setup using the route parameter */}
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Corrected standard setup */}

          {/* Utility Pages */}
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginSignup />}/>
        </Routes>
      </div>
      <Footer/>
      
      {/* Toast Container remains for global notifications */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </BrowserRouter>
   </div>

  );
}

export default App;