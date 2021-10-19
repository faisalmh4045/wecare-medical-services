import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {
    // destructuring service data and event handler
    const { id, name, img, description } = props.service;
    const { handleViewDetails } = props;

    return (
        <div>
            {/* start - service component */}
            <Col>
                <Card className='p-0 shadow-sm'>
                    <Card.Img style={{ width: '448px', height: '190px' }} variant="top" className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small className='text-muted'>{description}</small></Card.Text>
                        
                        <Button onClick={() => handleViewDetails(id)} variant='outline-dark' className='w-100'>View more details</Button>
                    </Card.Body>
                </Card>
            </Col>
            {/* end - service component */}
        </div>
    );
};

export default Service;
