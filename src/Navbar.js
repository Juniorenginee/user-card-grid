import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav>
      <div className="navbar">
        <span className="brand">Your Brand Name</span>
        <button onClick={onGetUsers} className="get-users-btn">
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
