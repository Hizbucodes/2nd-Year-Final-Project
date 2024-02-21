import React from 'react';
import brownie from '/src/assets/cafe-lago-images/brownie.jpg';

const ChooseCoffee = () => {
  return (
    <section className='w-full capitalize p-5 flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-evenly bg-black h-auto pt-10'>
       
            
        <div className='flex flex-col gap-8 items-start'>
            <h1 className='font-bold text-4xl text-white'>
                choose your<br/> favorite coffee
            </h1>
            <p className='font-medium text-primary'>
                our current beans line up for filter coffee, we<br/> will add new selection for the guest beans. keep<br/> you guys updated on this page.
            </p>

            <button className='bg-white p-3 text-black font-bold hover:bg-black duration-300 hover:text-white border border-white'>
                learn more
            </button>
        </div>

        <div>
            <img src={brownie} alt="cafe-solo" className='aspect-video object-cover w-96'/>
        </div>
        
    </section>
  )
}

export default ChooseCoffee