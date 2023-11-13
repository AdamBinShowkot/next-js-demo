import React from 'react';
import {
    Row,
    Col,
    InputGroup,
    InputGroupText
} from 'react-bootstrap';
import Image from 'next/image';
import Product from '@/app/ui/Product';
import PaginationMain from './Pagination';
import './index.scss';
import Link from 'next/link';

const ProductsMain=()=>{
    return(
        <>
            <Row
            style={{
                padding:'30px 80px'
            }}
            >
                <Col 
                xs={12}
                >
                    <InputGroup
                    className='product-filter-input-group'
                    >
                        <InputGroupText
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </InputGroupText>
                        <InputGroupText
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </InputGroupText>
                        <InputGroupText
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </InputGroupText>
                        <InputGroupText
                        className='products-filter-group-button'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'80%',
                                    
                                }}
                                >
                                    <span
                                    style={{
                                        marginRight:'10px'
                                    }}
                                    >
                                        Body Care
                                    </span>
                                </div>
                                <div
                                style={{
                                    width:'20%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filterBtn1.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </InputGroupText>
                        <InputGroupText
                        className='products-filter-button-main'
                        >
                            <div
                            style={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            >
                                <div
                                style={{
                                    width:'100%',
                                    textAlign:'right'
                                }}
                                >
                                    <Image
                                    src="/filter.png"
                                    width={18}
                                    height={18}
                                    alt="search"
                                    />
                                </div>
                            </div>
                        </InputGroupText>
                    </InputGroup>
                </Col>
            </Row>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    padding:"40px 100px",
                    display:'flex'
                }}
                >
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                </Col>
            </Row>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    padding:"40px 100px",
                    display:'flex'
                }}
                >
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                </Col>
            </Row>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    padding:"40px 100px",
                    display:'flex'
                }}
                >
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                </Col>
            </Row>
            <Row
            >
                <Col 
                xs={12}
                style={{
                    padding:"40px 100px",
                    display:'flex'
                }}
                >
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                    <Link href="/products/2">
                        <Product/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={12}
                style={{
                    padding:"0px 0px 30px 0px",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <PaginationMain/>
                </Col>
            </Row>
        </>
    )
}
export default ProductsMain;