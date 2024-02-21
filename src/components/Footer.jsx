import React from 'react';
import logo from '../assets/cafe-lago-images/logo2.png';

const Footer = () => {

    const footerDetails = [
        {
            id: 1,
            heading: "Main Menu",
            details: ["About", "Menus", "Events", "New Launch", "Dishes"],
            
        },
        {
            id: 2,
            heading: "Collections",
            details: ["Short Eats", "Hot Beverages", "Cold Drinks", "Soups", "Sandwiches", "Pasta", "Desserts"],

        },
        {
            id: 3,
            heading: "Information",
            details: ["Contact", "Orders", "Return"],

        },
        {
            id: 4,
            heading: "Address",
            details: ["Instagram", "Facebook", "Twitter", "Youtube"],

        },
    ]

  return (
    <footer className='w-full min-h-[300px] flex flex-col-reverse md:flex-row justify-between md:justify-around md:items-start items-center py-10 gap-y-16 bg-primary px-5 md:px-0'>
        <div>
            <img src={logo} alt="cafe-logo" className='w-16'/>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-1/2 text-start'>
        {footerDetails.map(({ id, heading, details }) => (
  <div key={id} className='flex flex-col gap-4'>
    <h1 className='font-bold'>{heading}</h1>

    <ul className='flex flex-col gap-3 text-md'>
              {details.map((detail, index) => (
                <li key={index} >
                  <a href="#" >{detail}</a>
                </li>
              ))}
            </ul>
  </div>
))} 
          
        </div>
    </footer>
  )
}

export default Footer