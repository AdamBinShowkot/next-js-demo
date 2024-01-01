'use client';
import React,{
    useState,
    useEffect
} from 'react';
import Link from 'next/link';
import useDeviceSize from '@/hooks/useDeviceSize';
import { 
    Col,
    Row
} from 'react-bootstrap';

const ServiceMain=()=>{
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
                        <strong className="footer-header">Service</strong>
                    </Col>
                </Row>
                <ul className={`${isContentShow?'show-service-content content':'hide-service-content content'}`}>
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
                        <Link href="/products">
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
        </>
    )
}
export default ServiceMain;