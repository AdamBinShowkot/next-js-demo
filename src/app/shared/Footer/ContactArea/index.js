import Link from 'next/link';
import React from 'react';
import {
    Col,
    Button,
    Row
} from 'react-bootstrap';
import AboutMain from './About';
import QuickLinks from './QuickLinks';
import ServiceMain from './Service';
import ContactMain from './Contact';
import Image from 'next/image';
import Module from './index.module.css';

const ContactAreaMain=()=>{
    return(
        <>
            <Col
            >
                <Row
                >
                    <AboutMain/>
                    <QuickLinks/>
                    <ServiceMain/>
                    <ContactMain/>
                </Row>
                <hr className={Module.hrStyle}/>
                <Row>
                    <Col 
                    xs={3}
                    style={{
                        textAlign:'left'
                    }}
                    >
                        <Button
                        className='normal-social-button no-left-margin'
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
                    <Col 
                    xs={6}
                    style={{
                        justifyContent:'center',
                        textAlign:'center'
                    }}
                    >
                       <span>© 2023 Korean Shop BD | All Rights Reserved.</span> 
                    </Col>
                    <Col 
                    xs={3}
                    style={{
                        textAlign:'right'
                    }}
                    >
                        <span>Work In Progress...</span>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ContactAreaMain;