import React from 'react';
import {Row,Col} from 'react-bootstrap';
import DiscountMain from './Discount';
import TopBarMain from './TopBar';
import NavBarMain from './NavBar';
import './index.scss';

const HeaderMain=()=>{
    return(
        <>
            <Row
            className='header-container'
            >
                <Col>
                    <Row
                    className='discount-container'
                    >
                        <DiscountMain/>
                    </Row>
                    <Row>
                        <TopBarMain/>
                    </Row>
                    <Row>
                        <NavBarMain/>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default HeaderMain;