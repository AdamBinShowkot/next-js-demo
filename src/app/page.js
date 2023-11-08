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

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <SliderBanner/>
        </Col>
      </Row>
      <Container>
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
      </Container>
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
    </>
  )
}
