'use client';
import React,{
    useState,
    useEffect
} from 'react';
import { 
    Row,
    Col 
} from 'react-bootstrap';
import Image from 'next/image';
import useDeviceSize from '@/hooks/useDeviceSize';
import Content from './content';


const AboutMain=({})=>{
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
                    <Col
                    xs={12}
                    className='inner-column'
                    >
                        <strong className="footer-header"><b>About</b></strong>
                        <Image
                        src="/footer_plus.png"
                        width={16}
                        height={16}
                        alt="search"
                        className={`${isContentShow?'hide image':'show image'}`}
                        />
                    </Col>
                </Row>
                <Content isContentShow={isContentShow}/>
            </Col>
        </>
    )
}
export default AboutMain;