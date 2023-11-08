import React from 'react';
import {
    Card,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap';
import Image from 'next/image'
import './index.scss';

const BannerThree=()=>{
    return(
        <>
            <Col 
            xs={12}
            // style={{
            //     padding:'40px 0'
            // }}
            className='banner-three-container'
            >
                <Container>
                    <Row
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:"center",
                        height:'100px'
                    }}
                    >
                        <Col 
                        xs={4}
                        style={{
                            padding:'auto 30px'
                        }}
                        >
                            <Button
                            className='banner-three-button'
                            >
                                Shop By Brand
                            </Button>
                        </Col>
                        <Col 
                        xs={4}
                        style={{
                            padding:'auto 30px',
                            textAlign:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            display:'flex'
                        }}
                        >
                            <Image
                            src='/femaleMakup.png'
                            height={70}
                            width={200}
                            />
                        </Col>
                        <Col 
                        xs={4}
                        style={{
                            padding:'auto 30px'
                        }}
                        >
                            <Button
                            className='banner-three-button'
                            >
                                Shop Now
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
    )
}
export default BannerThree;