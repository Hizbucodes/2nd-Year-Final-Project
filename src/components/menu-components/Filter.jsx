import React, { useContext } from 'react'
import Rating from '../home-components/Rating';
import CartContext from '../../context/CartContext';
import { FILTER_ACTIONS } from '../../actions';

const Filter = () => {

    

      const { stateFilter: { byStock, byFastDelivery, byRating,sort, searchQuery}, dispatchFilter} = useContext(CartContext);

      console.log( byStock, byFastDelivery,sort, byRating);

  return (
    <div className=' text-black bg-red-50 p-[20px] flex flex-col w-[20%]  h-[86vh] sticky top-20'>
        <span className='text-2xl pb-[20px] font-bold text-center'>CAFE</span>
   
            <form className='flex flex-col '>

            <span>
                <input 
                type="search"
                placeholder='Search Products'
                onChange={()=> dispatchFilter({type: FILTER_ACTIONS.FILTER_BY_SEARCH})}
                />
            </span>

                <span className='pb-[20px]'>
                <input 
                    type="radio"
                    name='group1'
                    aria-label='Ascending'
                    id='ascending'
                    onChange={()=> dispatchFilter({type: FILTER_ACTIONS.SORT_BY_PRICE, payload: "lowToHigh"})}
                    checked={sort === "lowToHigh" ? true : false}
                    />
                    <label htmlFor="ascending">Ascending</label>
                </span>
               <span className='pb-[20px]'>
               <input 
                    type="radio"
                    name='group1'
                    aria-label='Descending'
                    id='descending'
                    onChange={()=> dispatchFilter({type: FILTER_ACTIONS.SORT_BY_PRICE, payload: "highToLow"})}
                    checked={sort === "highToLow" ? true : false}
                    />

                    <label htmlFor="descending">Descending</label>
               </span>

               <span className='pb-[20px]'>
                <input 
                    type="checkbox"
                    name='group1'
                    id='outstock'
                    onChange={()=>dispatchFilter({type: FILTER_ACTIONS.FILTER_BY_STOCK,})}
                    checked={byStock}
                    />
                    <label htmlFor="outstock">Includes out of stock</label>
               </span>
               <span className='pb-[20px]'>
                <input 
                    type="checkbox"
                    name='group1'
                    id='fastdeslivery'
                    onChange={()=>dispatchFilter({type: FILTER_ACTIONS.FILTER_BY_DELIVERY,})}
                    checked={byFastDelivery}
                    />
                    <label htmlFor="fastdeslivery">Fast Delivery Only</label>
               </span>

               <span className='flex items-center justify-start'>
                <label htmlFor="rating" className='pr-[10px]'>Rating: </label>
                <Rating rating={byRating} onClick={(i)=> dispatchFilter({type: FILTER_ACTIONS.FILTER_BY_RATING, payload: i + 1})}/>
               </span>

               <button className='w-full bg-white text-black p-2 font-bold' onClick={()=> dispatchFilter({type: FILTER_ACTIONS.CLEAR_FILTER,})}>Clear Filters</button>
            </form>
     
    </div>
  )
}

export default Filter