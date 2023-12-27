'use client'
import React,{
    useState,
    useEffect
} from 'react';
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import StaticProducts from '@/app/ui/StaticCard';
import Product from '@/app/ui/Product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import Image from 'next/image';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-next-arrow-btn`}
        // style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className+` slider-previous-arrow-btn`}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}
const SliderProducts=()=>{
    const [settings,setSetting]=useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    })
    const [windowSize, setWindowSize] = useState([
        window.innerHeight,
        window.innerWidth,
    ]);   
    
    useEffect(() => {
        // window.addEventListener("resize", windowSizeHandler);
    
        // return () => {
        //   window.removeEventListener("resize", windowSizeHandler);
        // };
    }, []);

    const windowSizeHandler = () => {
        if(window.innerWidth<420){
            let newSettings={...settings,slidesToShow:2};
            setSetting(newSettings)
        }else{

        }
        setWindowSize([window.innerWidth, window.innerHeight]);
    };

    console.log(windowSize)
    return(
        <>
            <Row 
            style={{
                padding:'40px 0px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Col xs={12}>
                    <Slider {...settings}>
                        <div>
                            <StaticProducts/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                        <div>
                            <Product/>
                        </div>
                    </Slider>
                </Col>
           </Row>

            <Row 
            style={{
                padding:'20px 0px'
            }}
            >
               <Col 
               xs={12}
               style={{
                // padding:'40px 0px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:"0px"
                }}
               >
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
               </Col>
           </Row>

            <Row 
            style={{
                padding:'20px 0px'
            }}
            >
               <Col 
               xs={12}
               style={{
                // padding:'40px 0px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'0'
                }}
               >
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
               </Col>
           </Row>
        </>
    )
}
export default SliderProducts;