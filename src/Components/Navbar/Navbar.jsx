import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import search from '../Assets/search_img.png';
import heart from '../Assets/heart_simple.png';
import profile from '../Assets/profile_img.png';
import language from '../Assets/Language_img.png';
import cart from '../Assets/cart_img.png';
import element_four from '../Assets/element-4.png';

const Navbar = () => {
  const [menu, setMenu] = useState("SKILLS");

  return (
    <div className='navbar'>
      <div className='element-4'>
        <div className='topmost'>
          <img src={element_four} alt="" />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='topmost'>
          <img src={element_four} alt="" />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='topmost'>
          <img src={element_four} alt="" />
          <p>Lorem, ipsum dolor.</p>
        </div>

      </div>
      <div className='nav-upper'>
        <div className='nav-logo'>
          <img src={logo} alt="loading" />
        </div>
        <h1>LOGO</h1>
        <div className='nav-icons'>
          <img src={search} alt="" />
          <img src={heart} alt="" />
          <img src={profile} alt="" />
          <img src={cart} alt="" />
          <img className='lang_img' width="50px" src={language} alt=""/>
        </div>
      </div>
      <div>
        <ul className='nav-menu'>
          <li className={menu === "SHOP" ? "active" : ""} onClick={()=>{setMenu("SHOP")}}><h3>SHOP</h3></li>
          <li className={menu === "SKILLS" ? "active" : ""} onClick={()=>{setMenu("SKILLS")}}><h3>SKILLS</h3></li>
          <li className={menu === "STORIES" ? "active" : ""} onClick={()=>{setMenu("STORIES")}}><h3>STORIES</h3></li>
          <li className={menu === "ABOUT" ? "active" : ""} onClick={()=>{setMenu("ABOUT")}}><h3>ABOUT</h3></li>
          <li className={menu === "CONTACT" ? "active" : ""} onClick={()=>{setMenu("CONTACT")}}><h3>CONTACT US</h3></li>
        </ul>
      </div>
      <hr className="line" />

      <div className='summary'>
        <div className='summary-head'>DISCOVER OUR PRODUCTS</div>
        <div className='summary-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, labore molestiae voluptate similique quasi voluptatibus harum asperiores architecto autem eveniet </div>
      </div>
    </div>
    
  );
}

export default Navbar;