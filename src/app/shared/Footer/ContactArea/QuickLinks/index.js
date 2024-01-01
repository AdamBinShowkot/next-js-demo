'use client';
import React,{
    useState,
    useEffect
} from 'react';
import useDeviceSize from '@/hooks/useDeviceSize';
import {
    Row,
    Col 
} from 'react-bootstrap';
import Link from 'next/link';
import './index.scss';

const QuickLinks=()=>{
    const [isContentShow,setIsContentShow]=useState(true);
    const [width, height] = useDeviceSize();  

    useEffect(()=>{
        if(width<420){
            setIsContentShow(false)
        }else{
            setIsContentShow(true)
        }
    
        return () => {
          
        };
    },[width])

    return(
        <>
            <Col className='footer-column'>
                <Row>
                    <Col>
                        <strong className="footer-header">QUICK LINKS</strong>
                    </Col>
                </Row>
                <ul className={`${isContentShow?'show-quick-links content':'hide-quick-links content'}`}>
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
        </>
    )
}
export default QuickLinks;