import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import BlogCard from './BlogCard';

const BlogPosts=()=>{
    return(
        <>
            <Row>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
                <Col xs={6}>
                    <BlogCard/>
                </Col>
            </Row>
        </>
    )
}
export default BlogPosts;