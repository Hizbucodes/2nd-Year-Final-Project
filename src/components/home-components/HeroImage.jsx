import React from 'react';
import happyCustomers from '/src/assets/cafe-lago-images/happy-customers.jpg';
import mainEntrance from '/src/assets/cafe-lago-images/main.jpg';
import lemonJuice from '/src/assets/cafe-lago-images/lemon-juice.jpg';

const HeroImage = () => {
  return (
    <div className='w-full bg-primary pb-10'>
    <main className=' max-w-[1024px] mx-auto grid md:grid-cols-3 gap-4 items-center place-items-center pt-10'>
        
<div>
            <img className='object-cover h-72 border-4 border-black' src={happyCustomers} alt="customers enjoying coffee" />
            
        </div>
         <div>
            <img className='object-cover h-60 border-4 border-black' src={lemonJuice} alt="duo lemon juice" />
            
        </div>

        <div className='w-40 border-2 h-32 border-black flex items-center justify-center'>
            <p className='text-black text-2xl font-medium rounded-[50%] border-2 border-black flex items-center justify-center p-5 aspect-square h-32'>
                COFFEE
            </p>
        </div>

        <div className='w-40 border-2 h-52 border-black flex flex-col items-center justify-center gap-4 text-center bg-secondary text-HigherText p-2'>
           
           <h1 className='font-bold text-2xl'>RELAX</h1>
           <p className='capitalize'>
               you can rest safely and do all your work in the best place.
           </p>
       </div>

      
        <div className='w-40 border-2 h-32 border-black flex items-center justify-center'>
            <p className='text-black text-2xl font-medium rounded-[50%] border-2 border-black flex items-center justify-center p-5 aspect-square h-32'>
                WORK
            </p>
        </div>
 
   
        <div className=''>
            <img className='border-4 border-black h-80 w-full object-cover' src={mainEntrance} alt="cafe entrance" />
        </div> 

     
    </main>
    </div>
  )
}

export default HeroImage