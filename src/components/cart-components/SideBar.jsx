import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
 
import { db, collection, addDoc } from '../../firebase';
import { useUserAuth } from '../../context/UserAuthContext';

const SideBar = () => {

  const {state: {cart}} = useContext(CartContext);

  const [total, setTotal] = useState(0);

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);


  const {user} = useUserAuth();

    const[email, setEmail] = useState(user.email.split('@')[0]);

    console.log(email);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price) * curr.qty, 0))
  }, [cart]);

  
 const handlePlaceOrder = async () => {
  try {
    
    cart.forEach(async (item) => {
      const docRef = await addDoc(collection(db, "orders"), {
        email: email,
        productName: item.title,
        qty: item.qty,
        price: item.price,
       
      });
      console.log("Document written with ID: ", docRef.id);
    });



    console.log("Order placed successfully!");
  } catch (error) {
    console.error("Error placing order: ", error);
  }
};


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

        <button className='bg-red-50 p-2 font-bold' onClick={()=>handlePlaceOrder()}>Place order</button>
        <button disabled={cart.length===0} className='bg-red-50 p-2 font-bold'>Proceed to Checkout</button>
    </div>
  )
}

export default SideBar