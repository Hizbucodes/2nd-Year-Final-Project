import React from 'react'

const HeroText = () => {
  return (
    <div className='w-full bg-black p-5 flex flex-col gap-12 items-center pt-28'>
        <div className='text-HigherText text-2xl md:text-6xl font-bold text-center'>
            <h1>
                The Cafe Lago For Work
            </h1>
        </div>
        <div className='text-LowerText text-center text-sm font-medium md:text-md'>
            <p>
                Cafe Lago Since 2022 And Bring Comfortable To More Than 10, 000 Customers And Still Growing And<br/> Come With More Than 3 Years Experience To Present The Working For Everyone
            </p>
        </div>
    </div>
  )
}

export default HeroText