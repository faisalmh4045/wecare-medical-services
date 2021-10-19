import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container mt-5'>
            <h5 className='text-muted mb-5'>If you have any concerns about for your outpatients appointment, please contact the Referral and Booking Service for Cardiology.</h5>

            <h3 className='mb-5'>Contact Info</h3>
            <Row className='row-cols-1 row-cols-lg-4 mb-5'>
                <Col>
                    <h4>Address</h4>
                    <p className='pe-3 text-muted'>4100 South-Middle Halishahr, Bander, Chattogram, Bangladesh.</p>
                </Col>
                <Col>
                    <h4>Email Us</h4>
                    <p className='pe-3 text-muted'>info@wecare.com <br />
                        contact@wecare.com</p>
                </Col>
                <Col>
                    <h4>Phone</h4>
                    <p className='pe-3 text-muted'>+(880) 123-4567 <br />
                        +(880) 123-8910</p>
                </Col>
                <Col>
                    <h4>Opening Hours</h4>
                    <p className='pe-3 text-muted'>Saturday-Thursday <br />
                        9:00 am - 08:00 pm</p>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;