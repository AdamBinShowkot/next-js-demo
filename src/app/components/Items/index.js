'use client'
import React from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
import Product from '@/app/ui/Product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';

const ItemsContainer=({title})=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    return(
        <>
            <Row>
                <Col 
                sx={12}
                style={{
                    padding:'15px 20',
                    textAlign:'left'
                }}
                >
                    <p>
                        <strong style={{color:'#000',fontSize:'22px'}}>{title?title:''}</strong> <span>{'  '}items</span>
                    </p>
                </Col>
            </Row>
            <Row style={{padding:'40px 0px'}}>
                <Col xs={12}>
                    <Slider {...settings}>
                        <div>
                            <StaticProducts/>
                        </div>
                        <div >
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </>
    )
}
export default ItemsContainer;