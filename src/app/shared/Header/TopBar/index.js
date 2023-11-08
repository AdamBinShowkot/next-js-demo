import React from 'react';
import {
    Col,
    Container,
    Row,
    FormControl,
    InputGroup,
    InputGroupText,
    Form,
    Button
} from 'react-bootstrap';
import './index.scss'
import Image from 'next/image';

const TopBarMain=()=>{
    return(
        <>
            <Col
            className='top-bar-container'
            >
                <Row
                style={{
                    justifyContent:'center',
                    display:'flex',
                    alignItems:'center'
                }}
                >
                    <Col xs={3} className='logo-div'>
                        <Image
                        src="/shop-logo.png"
                        width={250}
                        height={100}
                        alt="Picture of the author"
                        />
                    </Col>
                    <Col xs={5}>
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
                    <Col 
                    xs={2}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <Button
                        className='user-button'
                        >
                            <Image
                            src="/user.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button>

                        <Button
                        className='user-button'
                        style={{
                            marginLeft:'10px'
                        }}
                        >
                            <Image
                            src="/cart.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </Button>
                    </Col>
                    <Col xs={2}>
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/facebook.png"
                            width={16}
                            height={16}
                            alt="search"
                            />
                        </Button>
                    
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/instagram.png"
                            width={20}
                            height={20}
                            alt="search"
                            />
                        </Button>
                        <Button
                        className='normal-social-button'
                        >
                            <Image
                            src="/youtube.png"
                            width={22}
                            height={22}
                            alt="search"
                            />
                        </Button>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default TopBarMain;