import Image from 'next/image';
import React from 'react';
import {
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import NormalProduct from './partials/NormalProduct';
import VideoProduct from './partials/VideoProduct';
import ProductSlider from './partials/ProductSlider';

export default async function Page({params}){
    //console.log("PP",params)
    return(
        <>
            <Row
            style={{
                padding:"40px 120px"
            }}
            >
                <Col 
                xs={6}
                >
                    <Row>
                        <Col xs={12}>
                            <Card
                            style={{
                                borderRadius:'10px'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={12}
                                    style={{
                                        padding:'10px 30px'
                                    }}
                                    >
                                        <Button
                                        className='save-off-button'
                                        >
                                            Save 20%
                                        </Button>
                                    </Col>
                                </Row>
                                <Row
                                // style={{
                                //     width: '500px',
                                //     height:'500px',
                                //     backgroundImage:`url('/detailsImage.png')`,
                                //     backgroundRepeat: 'no-repeat',
                                //     backgroundSize: '100% 100%',
                                // }}
                                >
                                    <Col 
                                    xs={12}
                                    style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                    >
                                        <Image
                                        src='/detailsImage.png'
                                        height={500}
                                        width={500}
                                        alt="Image"
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'40px 0px'
                    }}
                    >
                        <Col xs={12}>
                            {/* <NormalProduct/> */}
                            <ProductSlider/>
                        </Col>
                    </Row>
                </Col>
                <Col 
                xs={6}
                >
                </Col>
            </Row>
        </>
    )
}
