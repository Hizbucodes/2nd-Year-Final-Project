import React from 'react';
import heroImage from "/src/assets/cafe-lago-images/menu-hero-image.jpg";

const MenuHeroImage = () => {
  return (
    <div className='w-full h-96 mt-12 relative -z-10'>
        <img src={heroImage} alt="menu-image" className='size-full object-cover'/>
        <div className='absolute top-24 md:left-28 left-12 flex flex-col md:gap-5'>
        <h1 className='uppercase font-bold md:text-8xl text-4xl'>menu</h1>
        <h5 className='capitalize font-semibold text-xl tracking-wider'>great coffee served everyday</h5>
        </div>
    </div>
  )
}

export default MenuHeroImage