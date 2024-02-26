import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa6';
import Rating from '../home-components/Rating';
import { CART_ACTIONS } from '../../actions';

const ProductContainer = () => {
    const {state: {cart}, dispatch} = useContext(CartContext);
    
  return (
    <div className=' pt-28 shadow-2xl w-[70%] min-h-screen flex flex-col gap-8'>
        {
                                cart.map((prod)=>(
                                    <div  className='flex justify-between items-center gap-y-4 px-4 border-2 rounded-2xl p-2 mx-4'>
                                   
                                        <img src={prod.image} alt={prod.title} className='w-[200px] object-cover rounded-lg h-[200px]'/>
                                    

                                    
                                        <p>{prod.title}</p>
                                        <p>RS. {prod.price}</p>

                                        <span className='flex'>
                                        <Rating rating={prod.ratings}/>
                                        </span>


                                        <span>
                                            <select value={prod.qty} className='w-[80px]' onChange={(e)=>dispatch({type: CART_ACTIONS.CHANGE_CART_QTY, payload:{
                                                id: prod.id,
                                                qty: e.target.value
                                            }})}>
                                                {[...Array(prod.inStock).keys()].map((x)=>(
                                                    <option key={x+1}>{x+1}</option>
                                                ))}
                                            </select>
                                        </span>
                                   

                                    <div onClick={()=> {dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: prod})}} className='cursor-pointer'>
                                        <FaTrash/>
                                    </div>
                                    </div>
                                ))
                            }
    </div>
  )
}

export default ProductContainer