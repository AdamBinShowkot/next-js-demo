import React from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';
import SliderProducts from './SliderProducts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';


const ProductsSlider=()=>{
    return(
        <>
            <SliderProducts/>
        </>
    )
}
export default ProductsSlider;