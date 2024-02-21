import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomerReviewCard from '../home-components/CustomerReviewCard';

const CustomerReview = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      const reviewData = [
        {
            id: 1,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 2,
            review: '"having an afternoon tea with"',
            reviewdBy: "- Meshith",
        },
        {
            id: 3,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 4,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 5,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 6,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 7,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
        {
            id: 8,
            review: '"having an afternoon tea with best friend is all theraphy you need"',
            reviewdBy: "- Meshith",
        },
      ]

     
     

      
  return (
   <section className='w-full p-5 flex flex-col bg-black text-center gap-y-20'>
        <div>
            <h1 className='text-HigherText font-bold text-3xl'>
                Some of Our Happy Customer
            </h1>
        </div>

     <div>
          
       <Carousel responsive={responsive} infinite={true} autoPlaySpeed={3000} autoPlay={true} transitionDuration={500}>
            {  reviewData.map((rev)=>(
            <CustomerReviewCard key={rev.id} review={rev.review} reviewdBy={rev.reviewdBy}/>
       
      ))}
        </Carousel>
     </div>
  
   </section>
  )
}

export default CustomerReview