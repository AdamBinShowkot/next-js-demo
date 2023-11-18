'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductHover from './partials/ProuctHover';
import './index.scss';


const Product=()=>{
    const [hoverShow,setHoverShow]=useState(false);


    return(
        <>
            <Card 
            style={{ 
                width: '13vw',
                minHeight:'28rem',
                border:'none',
                padding:'0'
            }}
            className='home-product'
            onMouseEnter={()=>{
                setHoverShow(true)
            }}
            onMouseLeave={()=>{
                setHoverShow(false)
            }}
            >
                {/* <Card.Img variant="top" src="/logo.png" /> */}
                <Card.Body
                style={{
                    textAlign:'center',
                    position:'relative',
                    padding:'0',
                    minHeight:'26.4rem',
                }}
                className=''
                >
                    <Row
                    style={{
                        border:'1px solid rgba(232, 99, 154, 1)',
                        borderRadius:'5px',
                        marginBottom:'10px',
                        width:"14.8vw"
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'5px',
                        }}
                        >
                            <Card.Title
                            style={{
                                textAlign:'left',
                                padding:'0'
                            }}
                            >
                                <Button 
                                className='card-button'
                                >
                                    Shop Now
                                </Button>
                            </Card.Title>
                            <Image
                            src='/products2.jpg'
                            height={300}
                            width={259}
                            alt=""
                            />
                        </Col>
                    </Row>
                   <Row
                   className={`${hoverShow?'details-deactive':'details-active'}`}
                   >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0"
                        }}
                        >
                            <Card.Text
                        style={{
                            
                        }}
                        >
                            <span>
                                Neogen Dermalogy Black 
                                Energy Cream 80ml
                            </span>
                        </Card.Text>
                        <Button 
                        className='card-button product-card-button'
                        style={{
                            position:'absolute',
                            bottom:'5px',
                            left:0,
                            right:0
                        }}
                        >
                            Add To Bag ৳ 2100 ৳ 1900
                        </Button>
                    </Col>
                   </Row>
                   <Row
                   className={`${hoverShow?'hover-card-active':'hover-card-deactive'}`}
                   >
                        <Col 
                        xs={12}
                        style={{
                            padding:"0"
                        }}
                        >
                            <ProductHover/>
                            <Button 
                            className='product-card-button-hover'
                            // style={{
                            //     position:'absolute',
                            //     bottom:'5px',
                            //     left:0,
                            //     right:0
                            // }}
                            >
                                Add To Bag ৳ 2100 ৳ 1900
                            </Button>
                        </Col>
                   </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Product;