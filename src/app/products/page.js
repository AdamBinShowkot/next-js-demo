import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import TopBanner from './TopBanner';

const ProductsPage=()=>{
    return(
        <>
            <Row>
                <Col xs={12}>
                    <TopBanner/>
                </Col>
            </Row>
        </>
    )
}
export default ProductsPage;