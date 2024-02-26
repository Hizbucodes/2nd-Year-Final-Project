import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import ProductCard from './ProductCard';
import Filter from './Filter';
import CartContext from '../../context/CartContext';
import Rating from '../home-components/Rating';


const Product = () => {

    const {product, loading, error} = useContext(ProductContext);
    const { stateFilter: { byStock, byFastDelivery, byRating,sort, searchQuery}, dispatchFilter} = useContext(CartContext);

    const transformProducts = () => {
      let sortedProducts = product;

      if(sort){
        sortedProducts= sortedProducts.sort((a,b)=>(
          sort === 'lowToHigh' ? a.price-b.price : b.price-a.price
        ));
      }

      if(!byStock){
        sortedProducts = sortedProducts.filter((prod)=> prod.inStock);
      }

      if(byFastDelivery){
        sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery);
      }

      if(byRating){
        sortedProducts = sortedProducts.filter((prod)=> prod.ratings >= byRating)
      }

      if(searchQuery){
        sortedProducts = sortedProducts.filter((prod)=> prod.title.toLowerCase().includes(searchQuery))
      }

      return sortedProducts;
    };

    console.log((transformProducts()));

  return (
    <section className='flex justify-center bg-primary'>
        <Filter/>

        <div className='grid w-full p-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mx-auto'>
        {loading && <p>Loading...</p>}
        
        {transformProducts().map((prod)=>(
            <ProductCard prod={prod} key={prod.id}/>
        ))}
        </div>
     
    </section>
  )
}

export default Product