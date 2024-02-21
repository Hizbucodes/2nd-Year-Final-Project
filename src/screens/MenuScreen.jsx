import React from 'react';
import Header from '../components/Header';
import MenuHeroImage from '../components/menu-components/MenuHeroImage';
import MenuSubHeading from '../components/menu-components/MenuSubHeading';
import Product from '../components/menu-components/Product';

const MenuScreen = () => {
  return (
    <div>
      <Header/>
      <MenuHeroImage/>
      <MenuSubHeading/>
      <Product/>
    </div>
  )
}

export default MenuScreen