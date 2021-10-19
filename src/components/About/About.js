import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../images/about-img.jpg'

const About = () => {
    return (
        <div className='container mt-5'>
            <Row className='row-cols-1 row-cols-lg-2 mb-5'>
                <Col>
                    <h3 className='mb-5'>Who We Are?</h3>
                    <p>The goal of the physicians and staff of 'WeCare' heart care is to provide state-of-the cardio service care in a comfortable and caring environment with the special needs of our patients.</p>
                </Col>
                <Col>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
            </Row>
            <Row className='row-cols-1 row-cols-lg-3 g-4 mb-5'>
                <Col>
                    <h3>Our Mission</h3>
                    <p className='pe-3 text-muted'>“Our mission is to provide our patients the highest quality cardiovascular care available lorem ipsum dolor sit amet conecteture”</p>
                </Col>
                <Col>
                    <h3>Our Vision</h3>
                    <p className='pe-3 text-muted'>“We look not only at the present, but also to the future for each patient and to the future for the field of cardiology as a whole”</p>
                </Col>
                <Col>
                    <h3>Our Values</h3>
                    <p className='pe-3 text-muted'>As we provide our patients with exceptional clinical results, we are also concerned with the overall health of each individual we serve.</p>
                </Col>
            </Row>

        </div>
    );
};

export default About;