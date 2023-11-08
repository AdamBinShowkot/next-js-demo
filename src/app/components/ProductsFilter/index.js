'use client'
import React,{
    useRef,
    useEffect,
    useState
} from "react"
import {
    Row,
    Col,
    Button,
    Container
} from 'react-bootstrap';
import FilterProduct from "@/app/ui/FilterProduct";
import StaticCardWithImage from "@/app/ui/StaticCardWithImage";
import './index.scss';


const IsotopeReact = () => {
  const isotope = useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*')

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <>
        <Container>
            <Row
            style={{
                padding:'60px 0px',
                // display:'flex',
                // justifyContent:'center',
                // alignItems:'center'
            }}
            >
                <Col 
                xs={12}
                style={{
                    width:"100%"
                }}
                >
                    <Row>
                        <Col 
                        xs={12}
                        style={{
                            padding:'10px 0px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <h2>BEST <strong style={{color:'rgba(232, 99, 154, 1)'}}>BRAND</strong></h2>
                        </Col>
                    </Row>
                    <Row
                    >
                        <Col 
                        xs={12}
                        style={{
                            padding:'30px 0px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Button
                            variant="outline-primary"
                            className="filter-button"
                            >
                                COSRX
                            </Button>
                            <Button
                            variant="outline-primary"
                            className="filter-button"
                            >
                                NEOGEN
                            </Button>
                            <Button
                            variant="outline-primary"
                            className="filter-button"
                            onClick={handleFilterKeyChange('fruit')}
                            >
                                TIAM
                            </Button>
                            <Button
                            variant="outline-primary"
                            className="filter-button"
                            onClick={handleFilterKeyChange('vege')}
                            >
                                SUM BY MI
                            </Button>
                            <Button
                            variant="outline-primary"
                            className="filter-button"
                            onClick={handleFilterKeyChange('*')}
                            >
                                ALL BRAND
                            </Button>
                        </Col>
                    </Row>
                    {/* <ul>
                        <li onClick={handleFilterKeyChange('*')}>All</li>
                        <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
                        <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
                    </ul> */}
                        <Row className="filter-container">
                            <Col xs={3} className="filter-item vege ">
                                <StaticCardWithImage/>
                            </Col>
                            <Col xs={3} className="filter-item fruit">
                                <FilterProduct/>
                            </Col>
                            <Col xs={3} className="filter-item fruit">
                                <FilterProduct/>
                            </Col>
                            <Col xs={3} className="filter-item fruit">
                                <FilterProduct/>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default IsotopeReact;