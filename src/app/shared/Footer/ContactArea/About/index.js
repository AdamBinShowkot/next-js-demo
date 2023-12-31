'use client';
import React,{
    useState,
    useEffect
} from 'react';
import { 
    Col 
} from 'react-bootstrap';
import Content from './content';


const AboutMain=({})=>{
    const [isShow,setIsShow]=useState(true);

    return(
        <>
             <Col>
                <strong className="footer-header"><b>About</b></strong><br/><br/>
                <Content isShow={isShow}/>
            </Col>
        </>
    )
}
export default AboutMain;