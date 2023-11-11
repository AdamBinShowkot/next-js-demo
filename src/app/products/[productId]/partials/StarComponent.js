'use client';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import './index.scss';

const StarComponent=()=>{
    const [rating, setRating] = useState(3)
    return(
        <>
            <div className='star-rating' style={{display:"flex !important"}}>
                <Rating 
                //onClick={handleRating}
                 size={20}
                transition
                allowFraction
                //showTooltip 
                initialValue={rating} 
                />
            </div>
        </>
    )
}
export default StarComponent;