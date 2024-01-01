'use client';
import React,{
    useState,
    useEffect
} from 'react';
import { 
    Col 
} from 'react-bootstrap';
import useDeviceSize from '@/hooks/useDeviceSize';
import Link from 'next/link';
import Content from './Content';

const ContactMain=()=>{
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
                <strong className="footer-header"><b>Contacts</b></strong>
                <Content isContentShow={isContentShow}/>
            </Col>
        </>
    )
}
export default ContactMain;