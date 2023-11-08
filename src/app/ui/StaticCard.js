'use client'
import React from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';

const StaticProducts=()=>{
    return(
        <>
            <Card style={{ 
                width: '11rem',
                marginRight:'2rem !important',
                minHeight:'26.4rem', 
                }}>
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                style={{
                    textAlign:'center'

                }}
                className='product-card-body'
                >
                    <Card.Title>
                        <h4 className='product-card-title'>
                            Online at Best Price
                        </h4>
                    </Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text> */}
                    <Image
                    src='/shopProduct.jpg'
                    height={350}
                    width={259}
                    />
                    <Button 
                    className='card-button'
                    style={{
                        marginTop:'40px'
                    }}
                    >
                        Shop Now
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default StaticProducts;