'use client';
import React,{
    useState,
    useEffect
} from 'react';
import { 
    Col 
} from 'react-bootstrap';
import Link from 'next/link';
import Content from './Content';

const ContactMain=()=>{
    const [isShow,setIsShow]=useState(false);

    return(
        <>
            <Col>
                <strong className="footer-header"><b>Contacts</b></strong><br/><br/>
                <Content isShow={isShow}/>
            </Col>
        </>
    )
}
export default ContactMain;