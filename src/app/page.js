import Image from 'next/image'
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';
import SliderBanner from './components/SliderBanner';
import HomeFeatured from './components/HomeFeater2';
import ProductsSlider from './components/ProductsSlider';
import BannerTwo from './components/Banner2';
import ItemsContainer from './components/Items';
import BannerThree from './components/Banner3';
import IsotopeReact from './components/ProductsFilter';
import HomeBlogSection from './components/HomeBlogSection';

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <SliderBanner/>
        </Col>
      </Row>
      <Row
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        padding:"20px 8vw"
      }}
      >
        <Col xs={12}>
          <Row>
            <HomeFeatured/>
          </Row>
          <Row>
            <ProductsSlider/>
          </Row>
          <Row>
            <BannerTwo/>
          </Row>
          <Row>
            <ItemsContainer title="CLEANSER "/>
          </Row>
          <Row>
            <ItemsContainer title="TONER "/>
          </Row>
          <Row>
            <ItemsContainer title="SERUM/ESSENCE/AMPOULE "/>
          </Row>
          <Row>
            <ItemsContainer title="BODY CARE "/>
          </Row>
          <Row>
            <ItemsContainer title="EYE CARE "/>
          </Row>
        </Col>
      </Row>
      <Row>
        <BannerThree/>
      </Row>
      <Row
      // style={{
      //   padding:'50px 0px',
      //   minHeight:'500px'
      // }}
      >
        <Col>
          <IsotopeReact/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <HomeBlogSection/>
        </Col>
      </Row>
    </>
  )
}
