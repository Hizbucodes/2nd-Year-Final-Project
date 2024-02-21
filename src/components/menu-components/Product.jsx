import React, { useEffect, useReducer } from 'react';
import { INITIAL_VALUES, productReducer } from '../../reducers/productReducer';
import { FETCH_ACTIONS } from '../../actions';


const Product = () => {

    const[state, dispatch] = useReducer(productReducer, INITIAL_VALUES);

    const {product, loading, error} = state;

    useEffect(()=>{
        dispatch({type: FETCH_ACTIONS.PROGRESS})
        const fetch_products = async () =>{
            try{
                const response = await fetch('http://localhost:3500/products');
                if(response.status === 200){
                    const data = await response.json();
                    dispatch({type: FETCH_ACTIONS.SUCCESS, data: data});
                }
            }catch(err){    
                dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
            };
        };

        fetch_products();
    }, []);

  return (
    <section className='bg-seconday min-h-screen w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {loading && <p>Loading...</p>}
        <ul>
            {product.map((prod)=>(
                <li key={prod.id}>{prod.title}</li>
            ))}
        </ul>
    </section>
  )
}

export default Product