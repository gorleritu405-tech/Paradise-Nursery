import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "./ProductList";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          plants. Bring nature into your home and make every space greener.
        </p>
        <button className="get-started" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
