import React, { useState } from 'react';
import './Shop.css';
import Item from '../Components/Item/Item.jsx';
import data_product from '../Components/Assets/data';
import arrow_left from '../Components/Assets/arrow-left.png';
import arrow_bottom from '../Components/Assets/arrow-bottom.png';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Shop = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <hr className="line" />
      <div className='filter-bar'>
        <p className='total-items'>3425 ITEMS</p>
        <div className='hide_show_filter' onClick={toggleSidebar}>
          <img src={arrow_left} alt="" />
          <p>HIDE FILTER</p>
        </div>
        <div className='recommended' onClick={toggleOptions}>
          <p>Recommended</p>
          <img src={arrow_bottom} alt="" />
        </div>
        {showOptions && (
          <div className="options-slider">
            <p ><b>Recommended</b></p>
            <p>NEWEST FIRST</p>
            <p>POPULAR</p>
            <p>PRICE : HIGH TO LOW</p>
            <p>PRICE : LOW TO HIGH</p>
          </div>
        )}
      </div>

      <hr className="line" />
      <div className='shop-container'>
        <div className={showSidebar ? 'sidebar-container overlay' : 'sidebar-container'}>
          {showSidebar && (
            <Sidebar className='sidebar-filter'>
              <Menu>
                <SubMenu label="IDEAL FOR">
                  <MenuItem> Men </MenuItem>
                  <MenuItem> Women</MenuItem>
                  <MenuItem> Baby & Kids</MenuItem>
                </SubMenu>
                <SubMenu label="OCCASION"></SubMenu>
                <SubMenu label="WORK"></SubMenu>
                <SubMenu label="FABRIC"></SubMenu>
                <SubMenu label="SEGMENT"></SubMenu>
                <SubMenu label="SUITABLE FOR"></SubMenu>
                <SubMenu label="ROW MATERAIL"></SubMenu>
                <SubMenu label="PATTERN"></SubMenu>
              </Menu>
            </Sidebar>
          )}
        </div>
        <div className={showSidebar ? 'shop-container3' : 'shop-container4'}>
          {data_product.map((item) => {
            return <Item image={item.image} name={item.name} sidebar={showSidebar} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
