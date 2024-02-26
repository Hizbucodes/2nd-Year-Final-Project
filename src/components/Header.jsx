import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import menu from '../assets/cafe-lago-images/menu-svgrepo-com (1).svg';
import logo from '../assets/cafe-lago-images/logo2.png';
import { FaCartShopping } from "react-icons/fa6";
import CartContext from '../context/CartContext';
import { FaTrash } from "react-icons/fa";
import { CART_ACTIONS } from '../actions';
import { useUserAuth } from '../context/UserAuthContext';
import { FiLogOut } from "react-icons/fi";

const Header = () => {

    const {state: {cart}, dispatch} = useContext(CartContext);

    const[isDropDownOpen, setIsDropDownOpen] = useState(false);

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
        },
        {
            id: 6,
            link: "Contact Us",
            to: "/contact-us",
        }
    ]

    const[menuBar, setMenuBar] = useState(false);

    const {user, logOut} = useUserAuth();

    const handleLogOut = async () => {
        try{
            await logOut();
        }catch(err){
            console.log(err.message);
        }
    };  

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


        <div className='bg-secondary p-3 hidden md:flex border border-secondary hover:bg-transparent duration-300 cursor-pointer px-8 items-center font-bold' onClick={handleLogOut}>
                    <button>Log Out</button>
                    <FiLogOut className='ml-4'/>
        </div>

                <div className='md:hidden' onClick={()=> setMenuBar(!menuBar)}>
                    <img src={menu} alt="hamburger-menu" className='w-10'/>
                </div>

                <div className='bg-primary rounded-lg relative p-3 cursor-pointer' onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                    <span className='text-primary absolute -top-3 bg-secondary -right-3 rounded-full px-2 font-bold'>{cart.length}</span>
                    <FaCartShopping color='black' fontSize={20}/>
                </div>

                {/* <span>{user && user.email}</span> */}

                {isDropDownOpen && (
                    <div className='bg-white p-2 w-[25%] absolute top-20 right-[13%] min-h-24 rounded-2xl text-black'>
                    {cart.length>0 ? 
                    (
                        <>
                        <div className='flex flex-col gap-4 my-2 pb-4'>
                            {
                                cart.map((prod)=>(
                                    <div  className='flex justify-between items-center gap-y-4 px-4 border-2 rounded-2xl p-2'>
                                    <div className='flex gap-4'>
                                        <img src={prod.image} alt={prod.title} className='w-[50px] object-cover rounded-full h-[50px]'/>
                                    

                                    <div className='flex flex-col font-bold'>
                                        <p>{prod.title}</p>
                                        <p>RS. {prod.price}</p>
                                    </div>
                                    </div>

                                    <div onClick={()=> {dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: prod})}} className='cursor-pointer'>
                                        <FaTrash/>
                                    </div>
                                    </div>
                                ))
                            }
                        </div>

                        <Link to='/cart'>
                        <div className='bg-secondary p-2 text-center text-primary font-semibold rounded-2xl'>
                            Go to Cart
                        </div>
                        </Link>
                        </>
                    ) 
                    : 
                    (
                        <h1>Empty Cart</h1>
                    )}
                </div>
                )}
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