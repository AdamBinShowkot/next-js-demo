'use client'
import React from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Card,
    Form,
    InputGroup,
    FormControl,
    InputGroupText
} from 'react-bootstrap';
import Image from 'next/image';
import './index.scss';

const HomeBlogSection=()=>{
    return(
        <>
            <Container>
                <Row
                // style={{
                //     display:'flex',
                //     justifyContent:'center',
                //     alignItems:'center'
                // }}
                >
                    <Col 
                    xs={9}
                    style={{
                        padding:'6px'
                    }}
                    >
                        <Row
                        style={{
                            height:'300px',
                            backgroundImage:`url('/videoBg.jpg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%'
                        }}
                        >
                            <Col 
                            xs={12}
                            style={{
                                position:'relative',
                                padding:'25px 30px'
                            }}
                            >
                                <h2>
                                Korean Shop BD
                                </h2>
                                <Button
                                className="video-watch-button"
                                >
                                    Watch Now
                                </Button>
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'20px 0'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                padding:'0'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={6}
                                   
                                    >
                                        <span><b>Video</b></span>
                                    </Col>
                                    <Col 
                                    xs={6}
                                    
                                    >
                                        <span>| 12 video</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                textAlign:'right',
                                justifyContent:'flex-end'
                            }}
                            >
                                {/* <Form.Select
                                style={{
                                    width:'10%'
                                }}
                                size="sm">
                                    <option>All Video</option>
                                </Form.Select> */}
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'0px'
                        }}
                        >
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    backgroundImage:`url('/sVideo3.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                >
                                    <Row
                                    
                                    >
                                        <Col 
                                        xs={12}
                                        style={{
                                            padding:"10px 20px",
                                            position:'relative'
                                        }}
                                        >
                                            <Button>
                                                Like
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    backgroundImage:`url('/sVideo2.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                >

                                </Card>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    backgroundImage:`url('/sVideo1.png')`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                >

                                </Card>
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'20px 0'
                        }}
                        >
                            <Col 
                            xs={6}
                            style={{
                                padding:'0'
                            }}
                            >
                                <Row>
                                    <Col 
                                    xs={6}
                                   
                                    >
                                        <span><b>Recent Post</b></span>
                                    </Col>
                                    <Col 
                                    xs={6}
                                    
                                    >
                                        <span>| 12 video</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col 
                            xs={6}
                            style={{
                                textAlign:'right',
                                justifyContent:'flex-end'
                            }}
                            >
                                {/* <Form.Select
                                style={{
                                    width:'10%'
                                }}
                                size="sm">
                                    <option>All Video</option>
                                </Form.Select> */}
                            </Col>
                        </Row>
                        <Row
                        style={{
                            padding:'0px'
                        }}
                        >
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                className="home-post-container"
                                >
                                    <Row
                                    
                                    >
                                        <Col 
                                        xs={12}
                                        style={{
                                            padding:"10px 20px",
                                            position:'relative'
                                        }}
                                        >
                                         
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                className="home-post-container"
                                >

                                </Card>
                            </Col>
                            <Col 
                            xs={4}
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Card
                                style={{ 
                                    width: '100%',
                                    height:'170px',
                                    padding:'0',
                                    margin:'0px',
                                    borderRadius:'5px'
                                }}
                                className="home-post-container"
                                >

                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col 
                    xs={3}
                    style={{
                        padding:'6px'
                    }}
                    >
                        <Card
                        style={{ 
                            width: '100%',
                            padding:'0',
                            //margin:'0px',
                            borderRadius:'5px'
                        }}
                        >
                            <Card.Body
                            style={{
                                padding:'6px'
                            }}
                            >
                                <Row>
                                    <Col xs={12}>
                                        <InputGroup>
                                            <FormControl
                                            className='normal-input'
                                            placeholder='search here'
                                            >

                                            </FormControl>
                                            <InputGroupText
                                            className='normal-input global-search'
                                            >
                                                <Image
                                                src="/search.png"
                                                width={20}
                                                height={20}
                                                alt="search"
                                                />
                                            </InputGroupText>
                                        </InputGroup>
                                    </Col>
                                </Row><br/><br/>
                                <Row>
                                    <Col xs={12}>
                                        <h3>Work in progress...</h3>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomeBlogSection;