import Link from 'next/link';
import React from 'react';
import {
    Col,
    Button,
    Row
} from 'react-bootstrap';
import Image from 'next/image';
import Module from './index.module.css';

const ContactAreaMain=()=>{
    return(
        <>
            <Col
            >
                <Row
                >
                    <Col>
                        <strong className="footer-header"><b>About</b></strong><br/><br/>
                        <span>
                            Korean Shop BD is the online platform, one of the largest retail supermarket in Bangladesh. 
                            A business entity that’s defining the standards in innovation and service quality in the nation.
                        </span>
                    </Col>
                    <Col>
                        <strong className="footer-header">QUICK LINKS</strong><br/><br/>
                        <ul>
                            <li>
                                <Link href="/about-us">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <strong className="footer-header">Service</strong><br/><br/>
                        <ul>
                            <li>
                                <Link href="/blogs">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    BRANDS
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Skip Concern
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <strong className="footer-header"><b>Service</b></strong><br/><br/>
                        <span>
                        Zigatola dhanmondi 1209
                        </span><br/>
                        <span>
                        Email: koreanshop@gmail.com
                        </span>
                        <br/>
                        <span>Hotline: +880170000000</span>
                    </Col>
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