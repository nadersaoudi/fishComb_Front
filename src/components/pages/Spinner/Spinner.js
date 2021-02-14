import React from 'react'
import {Row, Col, Image} from 'react-bootstrap';
import './Spinner.css'
const Spinner = () => {
    return <Row className='pt-5 pb-5'>
        <Row className='pt-5 pb-5'>
        <Col sm={5}></Col>
        <Col sm={2}
            className='pt-5'>
            <Image src='logofish.png' alt='fishcomb spinner' className='rotate'/>
        </Col></Row>
    </Row>

}
export default Spinner;
