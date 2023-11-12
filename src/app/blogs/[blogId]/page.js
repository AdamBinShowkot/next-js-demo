import React from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import './index.scss'
import Image from 'next/image';

const BlogDetails=({params})=>{
    //console.log(params)
    return(
        <>
            <Row
            style={{
                padding:"40px 100px",
            }}
            >
                <Col 
                xs={12}
                style={{
                    textAlign:'center'
                }}
                >
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Button className='tag-button'>
                                Uncategorized
                            </Button>
                        </Col>
                    </Row>
                    <br/>
                    <h1>Ingredient spotlight: what you need <br/>to know about collage</h1>
                    <span>By: Admin&nbsp;&nbsp;|&nbsp;&nbsp;October 25, 2022&nbsp;&nbsp;|&nbsp;&nbsp;4 Comments</span>
                    <Row
                    style={{
                        marginTop:'15px'
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Image
                            src='/blogDetailsMain.png'
                            height={600}
                            width={1200}
                            />
                        </Col>
                    </Row>
                    <Row
                    style={{
                        // display:'flex',
                        // justifyContent:'flex-start',
                        // alignItems:'center',
                        padding:'20px 100px'
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'10px 30px',
                            border:'2px solid rgba(92, 51, 169, 1)',
                            borderRadius:'10px',
                            textAlign:'left'
                        }}
                        >
                            <span style={{fontSize:'13px'}}> 
                                <strong style={{fontSize:'30px',color:'rgba(92, 51, 169, 1)'}}>❝&nbsp;&nbsp;</strong>
                                <b style={{fontStyle:'italic'}}>
                                If you’re #skincaregoals include a younger-looking, glowing complexion, 
                                it all starts with collagen. Collagen is one of your body’s major building blocks:
                                it’s a protein and critical to keeping your skin structure strong, elastic, 
                                plump, and smooth. Unfortunately, aging, the sun, 
                                and even diet all decrease the quantity and quality of the collagen your body naturally produces.
                                </b>
                            </span>      
                        </Col>
                    </Row>
                    <Row
                    style={{
                        padding:'20px 100px'
                    }}
                    >
                        <Col 
                        xs={12}
                        style={{
                            textAlign:'left'
                        }}
                        >
                            <h3>Ingredient Intolerance</h3><br/>
                            <span>So, when it comes to anti-aging moisturizers creams, and sheet masks, collagen is a pretty popular ingredient because it promises to restore softer, bouncier, and less-wrinkled skin. 
                                Ingredients like Collagen can help strengthen your skin barrier, which is the key to healthy, glowing skin. The catch? Some formulations boasting collagen on the label include a collagen that can’t penetrate into your skin due to its large molecular size. While it might feel nice on your skin’s surface, 
                                it’s a zero in the anti-aging department.<br/>

                            To get the most out of your collagen-enriched skincare arsenal, look for formulations that specifically include hydrolyzed collagen or collagen peptides – that’s collagen which has been broken down into smaller molecules and have the ability to penetrate deeply into your skin.</span>
                            <br/><br/>
                            <h3>The Ultimate Brightening Solution For Sensitive Skin</h3><br/>
                            <span>
                            With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter more revitalized skin after just 10 days of using the Anti-Aging and Brightening Collection. The super-charged treatment achieves these impressive results thanks to Aloisia’s proprietary blend of antioxidants and other effective ingredients like:


                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default BlogDetails;