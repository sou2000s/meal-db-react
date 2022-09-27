import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div style={{display: 'flex' , justifyContent: "space-evenly" , backgroundColor:"#FF6263"}}>
              <h1>Meal db</h1>
              <ul className='li-container'>
                <li>Home</li>
                <li>Contact</li>
                <li>Srarch</li>
              </ul>
        </div>
    );
};

export default Navbar;