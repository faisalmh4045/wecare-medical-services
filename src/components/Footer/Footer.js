import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import img from '../../images/payment.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(23, 27, 42)'}} className='py-5 mt-5 text-light'>
            <Container>
                <Row className='row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 mb-4'>
                    <Col>
                        <h4 className='mb-3 fw-bold'>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>All Products</p>
                        <p>Location Map</p>
                        <p>FAQ</p>
                        <p>Contact us</p>
                    </Col>
                    <Col>
                        <h4 className='mb-3 fw-bold'>Services</h4>
                        <p>Electrophysiology</p>
                        <p>Cardiac & Thoracic Surgery</p>
                        <p>Congestive Heart Failure</p>
                        <p>Interventional Cardiology</p>
                    </Col>
                    <Col>
                        <h4 className='mb-3 fw-bold'>Customer Care</h4>
                        <p>Login</p>
                        <p>MY acccount</p>
                        <p>Faq</p>
                        <p>Contact us</p>
                    </Col>
                    <Col>
                        <h4 className='mb-3 fw-bold'>Newsletter</h4>
                        <p>Subscribe to our weekly Newsletter and receive updates via email.
                        </p>
                        <div className='newsletter mb-3 d-flex flex-nowrap'>
                            <input className='border-0 ps-3 ps-lg-1 ps-xl-3 pe-0 py-3' type="email" placeholder='Email'/>
                            <button className='border-0 bg-success px-3 py-3'><i className="fas fa-location-arrow text-light"></i></button>
                        </div>
                        <h6 className='mb-3 fw-bold'>We Accept</h6>
                        <div>
                            <img style={{ width: '250px'}} src={img} alt="" />
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className='d-flex flex-wrap justify-content-lg-between'>
                    <div>
                        All rights reserved © WeCare 2021
                    </div>
                    <div>
                        <small>Terms & Conditions</small>
                        <small className='mx-4'>Claim</small>
                        <small>Privacy & Policy</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;