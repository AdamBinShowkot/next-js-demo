import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import KeepTouch from './partials/KeepTouch';
import GoogleMap from './partials/GoogleMap';
import './index.scss';

const ContactPage=()=>{
    return(
        <>
            <Row
            className='contact-container'
            >
                <Col xs={12}>
                    <KeepTouch/>
                    <GoogleMap/>
                </Col>
            </Row>
        </>
    )
}
export default ContactPage;