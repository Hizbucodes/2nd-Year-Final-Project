import React from 'react';

const FormBody = () => {
  return (
    <section className='w-full capitalize p-10 flex flex-col md:flex-row items-center justify-evenly bg-black h-screen'>
       
        <div className='flex flex-col gap-8 items-start'>
            <h1 className='font-bold text-4xl text-white'>
                Choose Your<br/> Favorite Coffee
            </h1>
            <p className='font-medium text-white'>
                Our current beans lineup for filter coffee, we<br/> will add a new selection for the guest beans. Keep<br/> you guys updated on this page.
            </p>
        </div>

        <div className='flex flex-col gap-4 items-start'>
            <h2 className='font-bold text-2xl text-white'>
                Contact Us
            </h2>
            <form className="flex flex-col gap-4">
                {/* Add your contact form inputs and styling here */}
                <label className="text-white">Name:</label>
                <input type="text" className="bg-gray-200 p-2 rounded-md" />

                <label className="text-white">Email:</label>
                <input type="email" className="bg-gray-200 p-2 rounded-md" />

                <label className="text-white">Message:</label>
                <textarea rows="4" className="bg-gray-200 p-2 rounded-md"></textarea>

                <button type="submit" className='bg-yellow-900 p-3 text-white font-bold hover:bg-white duration-300 hover:text-black border border-yellow-900'>
                    Submit
                </button>
            </form>
        </div>
        
    </section>
  );
}

export default FormBody;
