import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import Rating from '../components/home-components/Rating';
import { CART_ACTIONS } from '../actions';
import CartContext from '../context/CartContext';
import Header from '../components/Header';

const SingleProductScreen = () => {
    const { product } = useContext(ProductContext);
    const { state: { cart }, dispatch } = useContext(CartContext);
    const { id } = useParams();
    const selectedProduct = product.find(prod => prod.id.toString() === id);

    return (
        <>
        <Header/>
        <div className='w-full flex justify-evenly items-center min-h-screen pt-28 p-5'>
            {selectedProduct && (
                <>
                    <div className=' w-[500px]  overflow-hidden'>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className='w-[100%] object-cover aspect-square rounded-2xl'/>
                    </div>

                    <div className='flex flex-col gap-8 items-start justify-start pt-8  pl-8  w-[40%]'>
                        <h1 className='text-6xl font-semibold'>{selectedProduct.title}</h1>
                        <p>{selectedProduct.description}</p>
                        <span className='flex'><Rating rating={selectedProduct.ratings} /></span>
                        <p>RS. {selectedProduct.price}</p>

                        {cart.some(p=> p.id === selectedProduct.id) 
           ?
            ( <button onClick={()=>{dispatch({type: CART_ACTIONS.REMOVE_FROM_CART, payload: selectedProduct})}} className='bg-secondary text-primary p-2 rounded-lg'>Remove from Cart</button>) 
           :
           (<button onClick={()=>{dispatch({type: CART_ACTIONS.ADD_TO_CART, payload: selectedProduct})}} disabled={selectedProduct.inStock===0} className='bg-secondary text-primary p-2 rounded-lg'>{selectedProduct.inStock===0 ? "Out of Stock" : "Add to Cart"}</button>)}
                    </div>
                </>
            )}
        </div>
        </>
    );
};

export default SingleProductScreen;
