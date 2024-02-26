import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

const SideBar = () => {

  const {state: {cart}} = useContext(CartContext);

  const [total, setTotal] = useState(0);


  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price) * curr.qty, 0))
  }, [cart]);

  return (
    <div className='pt-28 min-h-screen shadow-2xl w-[20%] flex flex-col gap-12 p-5'>
        <div className='font-bold text-2xl '>
        <h1>Subtotal ({cart.length}) items</h1>
        
        </div>

        <div className=''>
            <p>
                Total: RS. {total}
            </p>
        </div>

        <button disabled={cart.length===0} className='bg-red-50 p-2 font-bold'>Proceed to Checkout</button>
    </div>
  )
}

export default SideBar