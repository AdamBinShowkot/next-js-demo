'use client';
import React,{
    useState,
    useEffect
} from 'react';
import { 
    Col 
} from 'react-bootstrap';
import Link from 'next/link';
import './index.scss';

const QuickLinks=()=>{
    const [isShow,setIsShow]=useState(true);
    return(
        <>
            <Col>
                <strong className="footer-header">QUICK LINKS</strong><br/><br/>
                <ul className={`${isShow?'show-quick-links content':'hide-quick-links content'}`}>
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