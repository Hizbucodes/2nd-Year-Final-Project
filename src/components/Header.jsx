import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import menu from '../assets/cafe-lago-images/menu-svgrepo-com (1).svg';
import logo from '../assets/cafe-lago-images/logo2.png';

const Header = () => {

    const menuLinks = [
        {
            id: 1,
            link: "Home",
            to: "/",
        },
        {
            id: 2,
            link: "About Us",
            to: "/about-us"
        },
        {
            id: 3,
            link: "Menu",
            to: "/menu",
        },
        {
            id: 4,
            link: "Feature",
            to: "/feature"
        },
        {
            id: 5,
            link: "Feedback",
            to: "/feedback",
        }
    ]

    const[menuBar, setMenuBar] = useState(false);

  return (
    <>
    <header className='w-full fixed top-0 left-0 right-0 h-12 md:h-20 bg-black text-HigherText flex justify-between md:justify-evenly items-center p-5 z-10'>
        {/* Cafe - Logo */}
        <div className="text-2xl font-bold">
            <img src={logo} alt="cafe-logo" className='w-10 md:w-14'/>
        </div>

        {/* Cafe - Menu (Desktop) */}
        <div className="hidden md:flex">
            <ul className='flex gap-8'>
                {menuLinks.map(({id, link, to})=>(
                    <li key={id} className='text-LowerText font-medium cursor-pointer hover:text-HigherText duration-300'>
                        <Link to={to}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

            {/* Contact Us Button */}
        <div className='bg-secondary p-3 hidden md:flex border border-secondary hover:bg-transparent duration-300'>
                    <button>Contact Us</button>
        </div>

                <div className='md:hidden' onClick={()=> setMenuBar(!menuBar)}>
                    <img src={menu} alt="hamburger-menu" className='w-10'/>
                </div>
    </header>

    {/* Mobile menu */}

        <div className={menuBar ? "bg-white/95 backdrop:blur-2xl text-black font-bold text-2xl h-screen fixed top-12 right-0 w-full text-center duration-300 items-center justify-around md:hidden" : "bg-white/95 backdrop:blur-3xl text-black font-bold text-2xl h-screen fixed top-12 right-[-100%] w-full text-center duration-300"}>
            <div className='flex flex-col h-screen items-center justify-evenly'>
        <ul className='flex flex-col gap-12 text-4xl'>
            {menuLinks.map(({id, link, to})=>(
                <li key={id} className='font-medium cursor-pointer'>
                    <Link to={to}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
          {/* Contact Us Button */}
          <div className='bg-secondary text-HigherText p-3 font-medium inline-block'>
                    <button>Contact Us</button>
        </div>
        </div>
    </div>

</>
  )
}

export default Header