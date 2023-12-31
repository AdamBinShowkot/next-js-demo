'use client';
import React,{
    useState,
    useEffect
} from 'react';
import Link from 'next/link';
import { 
    Col 
} from 'react-bootstrap';

const ServiceMain=()=>{
    const [isShow,setIsShow]=useState(true);

    return(
        <>
            <Col>
                <strong className="footer-header">Service</strong><br/><br/>
                <ul className={`${isShow?'show-service-content content':'hide-service-content content'}`}>
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