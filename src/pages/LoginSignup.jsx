import React, { useState } from "react";
// ❌ DELETE OR COMMENT OUT THIS LINE: import "./CSS/LoginSignup.css";
// --- START: New Imports for Toastify and Lucide ---
import { toast } from 'react-toastify'; 
import { LoaderCircle } from 'lucide-react'; 
// --- END: New Imports for Toastify and Lucide ---


const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  
  // Handler for input field changes
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles the login process
  const login = async () => {
    console.log("Attempting login with:", formData);
    setIsLoading(true); // Set loading to true
    let responseData;
    try {
      const response = await fetch('https://e-commerece-backend-8.onrender.com/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      // Check if the HTTP response itself was not OK (e.g., 4xx or 5xx status)
      if (!response.ok) {
        const errorData = await response.json(); 
        toast.error(`Login Error: ${errorData.errors || 'An unexpected server error occurred.'}`); 
        return;
      }

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        
        // Use toast.success for confirmation
        toast.success("Login successful! Redirecting to home...", {
          // Add an optional callback to redirect *after* the toast appears
          onOpen: () => setTimeout(() => window.location.replace("/"), 500) 
        });
      } else {
        // Display backend's specific error message
        toast.error(responseData.errors || "Login failed due to an unknown reason."); 
      }
    } catch (error) {
      console.error("Login fetch error:", error);
      toast.error("Network error or server unreachable. Please check your connection and try again."); 
    } finally {
      setIsLoading(false); 
    }
  };

  // Handles the signup process
  const signup = async () => {
    console.log("Attempting signup with:", formData);
    setIsLoading(true); 
    let responseData;
    try {
      const response = await fetch('https://e-commerece-backend-8.onrender.com/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      // Check for HTTP errors
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(`Signup Error: ${errorData.errors || 'An unexpected server error occurred.'}`); 
        return;
      }

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        
        // Use toast.success for confirmation
        toast.success("Account created successfully! Redirecting to home...", {
          onOpen: () => setTimeout(() => window.location.replace("/"), 500)
        });
      } else {
        // Display backend's specific error message
        toast.error(responseData.errors || "Signup failed due to an unknown reason."); 
      }
    } catch (error) {
      console.error("Signup fetch error:", error);
      toast.error("Network error or server unreachable. Please check your connection and try again."); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
      <div className="w-full min-h-screen bg-pink-50 flex justify-center items-center py-20">
        <div className="w-full max-w-lg bg-white pt-10 pb-16 px-6 md:px-10 rounded-lg shadow-xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 text-center">
            {state}
          </h1>
          
          {/* Input Fields Container */}
          <div className="flex flex-col gap-4">
            {state === "Sign-Up" && (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
                className="h-14 w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-red-500"
              />
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className="h-14 w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-red-500"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="h-14 w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-red-500"
            />
          </div>
          
          {/* Button and Footer Section */}
          <div className="mt-8">
            <button
              disabled={isLoading} 
              onClick={() => {
                if (isLoading) return; 
                if (check) { 
                  state === "Login" ? login() : signup();
                } else {
                  toast.warn("Please accept the terms of use & privacy policy."); 
                }
              }}
              className={`h-14 w-full flex justify-center items-center text-white text-lg font-medium rounded-lg shadow-md transition duration-200 
                ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 cursor-pointer'}`}
            >
              {isLoading ? (
                <LoaderCircle 
                  className="animate-spin" 
                  size={24} 
                  color="white" 
                />
              ) : (
                "Continue"
              )}
            </button>
            
            {state === "Sign-Up" ? (
              <p className="mt-6 text-gray-700 text-center text-base">
                Already have an account?{" "}
                <span 
                  onClick={() => { setState("Login") }} 
                  className="text-red-500 font-semibold cursor-pointer hover:text-red-700"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p className="mt-6 text-gray-700 text-center text-base">
                Create an account?{" "}
                <span 
                  onClick={() => { setState("Sign-Up") }}
                  className="text-red-500 font-semibold cursor-pointer hover:text-red-700"
                >
                  Click here
                </span>
              </p>
            )}

            {/* Agreement Checkbox */}
            <div className="flex items-start gap-2 mt-5 text-gray-600 text-sm">
              <input
                type="checkbox"
                onChange={(e) => setCheck(e.target.checked)}
                checked={check}
                name="terms"
                id="terms"
                className="mt-1 accent-red-500 cursor-pointer" // Tailwind class for checkbox color
              />
              <p>By continuing I agree to the terms of use & privacy policy.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginSignup;