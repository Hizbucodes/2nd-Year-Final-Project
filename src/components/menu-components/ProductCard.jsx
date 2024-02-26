import React, { useContext } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import CartContext from '../../context/CartContext';
import { CART_ACTIONS } from '../../actions';
import Rating from '../home-components/Rating';

const ProductCard = ({prod}) => {

  const {state: {cart}, dispatch} = useContext(CartContext);

  return (
    <div className='max-w-[300px] bg-CardColor  min-h-[430px] rounded-2xl flex flex-col gap-4 pb-4 mx-auto'>
        <img src={prod.image} alt={prod.title} className='w-full h-[200px] object-cover rounded-t-2xl'/>

      <h1 className='font-bold pl-2'>{prod.title}</h1>
      <div className='flex pl-1'>
      <Rating rating={prod.ratings} />
      </div>
      <p className='text-sm max-w-full overflow-hidden pl-2 '>{prod.description}</p>

      
      
      <p className='pl-2 flex items-center'>
      {prod.fastDelivery ? (
        <>
            <div>Fast Delivery</div>
            <TbTruckDelivery className='mt-1 ml-3'/>
            </>
          ) : (
            <div>4 days Delivery</div>
          )}
          
      </p>

      <div className='flex justify-between px-2 items-center'>
          <p>
              Price: RS {prod.price.split(".")[0]}
          </p>


          {cart.some(p=> p.id === prod.id) 
           ?
            ( <button onClick={()=>{dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: prod})}} className='bg-secondary text-primary p-2 rounded-lg'>Remove from Cart</button>) 
           :
           (<button onClick={()=>{dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: prod})}} disabled={prod.inStock===0} className='bg-secondary text-primary p-2 rounded-lg'>{prod.inStock===0 ? "Out of Stock" : "Add to Cart"}</button>)}
           
          
      </div>

    </div>
  )
}

export default ProductCard