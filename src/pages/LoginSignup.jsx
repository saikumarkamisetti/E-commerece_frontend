import React, { useState } from "react";
// The original import for './CSS/LoginSignup.css' is commented out.
// If you still wish to use a custom CSS file, please ensure it exists at the correct path.
// The CSS has been embedded directly for a self-contained and responsive solution.
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [check, setCheck] = useState(false); // State to manage checkbox checked status
  const [formData, setFormData] = useState({
    username: "", // This will be mapped to 'name' for the backend
    password: "",
    email: ""
  });
  const [message, setMessage] = useState(""); // For custom message box messages
  const [showMessage, setShowMessage] = useState(false); // To control message box visibility

  // Handler for input field changes
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to display a custom message box
  const showCustomMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };

  // Function to hide the custom message box
  const hideCustomMessage = () => {
    setShowMessage(false);
    setMessage("");
  };

  // Handles the login process
  const login = async () => {
    console.log("Attempting login with:", formData);
    let responseData;
    try {
      // Send data to backend. Explicitly map 'username' from formData to 'name'
      // as required by your backend.
      const response = await fetch('https://e-commerece-backend-8.onrender.com/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json', // Inform the server we prefer JSON response
          'Content-Type': 'application/json', // Inform the server we are sending JSON
        },
        body: JSON.stringify({
          name: formData.username, // Sending 'username' as 'name' to backend
          email: formData.email,
          password: formData.password
        }),
      });

      // Check if the HTTP response itself was not OK (e.g., 4xx or 5xx status)
      if (!response.ok) {
        const errorData = await response.json(); // Parse backend's error response
        showCustomMessage(`Login Error: ${errorData.errors || 'An unexpected error occurred on the server.'}`);
        return; // Stop execution if there was an HTTP error
      }

      responseData = await response.json(); // Parse the successful JSON response

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        // This will typically trigger a page reload to the home page in a browser environment.
        window.location.replace("/");
      } else {
        // Display backend's specific error message if login was not successful
        showCustomMessage(responseData.errors || "Login failed due to an unknown reason.");
      }
    } catch (error) {
      // Catch network-related errors (e.g., server unreachable, CORS issues)
      console.error("Login fetch error:", error);
      showCustomMessage("Network error or server unreachable. Please check your connection and try again.");
    }
  };

  // Handles the signup process
  const signup = async () => {
    console.log("Attempting signup with:", formData);
    let responseData;
    try {
      // Send data to backend. Explicitly map 'username' from formData to 'name'
      // as required by your backend.
      const response = await fetch('https://e-commerece-backend-8.onrender.com/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username, // Sending 'username' as 'name' to backend
          email: formData.email,
          password: formData.password
        }),
      });

      // Check for HTTP errors
      if (!response.ok) {
        const errorData = await response.json();
        showCustomMessage(`Signup Error: ${errorData.errors || 'An unexpected error occurred on the server.'}`);
        return;
      }

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        // This will typically trigger a page reload to the home page in a browser environment.
        window.location.replace("/");
      } else {
        // Display backend's specific error message if signup was not successful
        showCustomMessage(responseData.errors || "Signup failed due to an unknown reason.");
      }
    } catch (error) {
      // Catch network-related errors
      console.error("Signup fetch error:", error);
      showCustomMessage("Network error or server unreachable. Please check your connection and try again.");
    }
  };

  return (
    <>
      
      <div className="loginsignup"> {/* Original class name */}
        <div className="loginsignup-container"> {/* Original class name */}
          <h1>{state}</h1>
          <div className="loginsignup-fields"> {/* Original class name */}
            {/* Username input field, only visible for Sign-Up state */}
            {state === "Sign-Up" && (
              <input
                name="username" // Frontend state key
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
                className="loginsignup-fields input" // Applied class
              />
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className="loginsignup-fields input" // Applied class
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="loginsignup-fields input" // Applied class
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (check) { // Check if terms and conditions are accepted
                  state === "Login" ? login() : signup();
                } else {
                  showCustomMessage("Please accept the terms of use & privacy policy."); // Use custom message box
                }
              }}
              className="loginsignup-container button" // Applied class
            >
              Continue
            </button>
            {/* Toggle between Login and Sign-Up states */}
            {state === "Sign-Up" ? (
              <p className="loginsignup-login"> {/* Original class name */}
                Already have an account?{" "}
                <span onClick={() => { setState("Login") }}>Login here</span>
              </p>
            ) : (
              <p className="loginsignup-login"> {/* Original class name */}
                Create an account?{" "}
                <span onClick={() => { setState("Sign-Up") }}>Click here</span>
              </p>
            )}

            {/* Terms and Privacy Policy checkbox */}
            <div className="loginsignup-agree"> {/* Original class name */}
              <input
                type="checkbox"
                onChange={(e) => setCheck(e.target.checked)} // Correct way to handle checkbox state
                checked={check} // Ensure checkbox reflects state
                name="terms"
                id="terms"
              />
              <p>By continuing I agree to the terms of use & privacy policy.</p>
            </div>
          </div>
        </div>

        {/* Custom Message Box - displayed conditionally based on showMessage state */}
        {showMessage && (
          <div className="custom-message-overlay"> {/* Custom class for overlay */}
            <div className="custom-message-box"> {/* Custom class for message box */}
              <p className="custom-message-text">{message}</p>
              <button
                onClick={hideCustomMessage}
                className="custom-message-button" // Custom class for button
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginSignup;
