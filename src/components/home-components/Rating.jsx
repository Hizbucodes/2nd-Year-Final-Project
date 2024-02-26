import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({rating, onClick}) => {
  return (
    <>
    {
        [...Array(5)].map((_, i)=>(
            <span key={i} onClick={()=>onClick(i)} className='mx-1'>
                {rating > i ? (
                    <AiFillStar color='#FFA534' fontSize='15px' className='cursor-pointer'/>
                ) : (
                    <AiOutlineStar fontSize='15px' className='cursor-pointer'/>
                )}
            </span>
        ))
    }
</>
  )
}

export default Rating