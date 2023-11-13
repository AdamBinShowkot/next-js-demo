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
import Module from './index.module.css';
import Image from 'next/image';

const ContactFormMain=()=>{
    return(
        <>
            <Col>
                <Row
                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Col
                    style={{
                        textAlign:'left',
                        display:'flex',
                        // justifyContent:'start',
                        alignItems:'center !important'
                    }}
                    >
                        <Image
                        src='/messageBox.png'
                        height={40}
                        width={50}
                        alt=""
                        style={{
                            marginRight:'10px'
                        }}
                        />
                        <p>SIGN UP FOR NEWSLETTER FOR OFFER AND UPDATES</p>
                    </Col>
                    <Col
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <InputGroup>
                            <FormControl
                            className='normal-input'
                            placeholder='Enter Your Email Address'
                            >

                            </FormControl>
                            <Button
                             className={`${Module.contactSubmmit} normal-input global-search`}
                            >
                                Send
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ContactFormMain;