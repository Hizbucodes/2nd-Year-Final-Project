import React from 'react'

const BookTeaHome = () => {
    const image = {
        id: 1,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  return (
    <section className='w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-around p-5 gap-12'>
        {/* Image Side */}
        <div className='bg-red-50 md:w-[50%]'>
            <img src={image.image} alt="coffe with cheers" className='object-cover aspect-video'/>
        </div>

        {/* Content Side */}
        <div className='flex flex-col gap-8 items-center md:items-start md:w-[40%] text-center md:text-start '>
            
<blockquote className="text-2xl md:text-4xl font-bold text-HigherText tracking-wider">
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>   "having an afternoon tea with best friend is all theraphy you need" <br/>- Meshith</p>
</blockquote>

          
            <p className='text-LowerText'>
                Imagine having a quality time with you family and friend in a comfortable and fully aesthetic place where you can taste various asian fusion food and a finest baans coffee.
            </p>

            <button className='uppercase p-3 md:p-5 bg-HigherText text-black font-bold border hover:bg-transparent duration-300 hover:text-HigherText'>
                book now
            </button>
        </div>
    </section>
  )
}

export default BookTeaHome