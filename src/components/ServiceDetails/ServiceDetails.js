import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../hooks/useService';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServices();

    let selectedService = {};
    for (const service of services) {
        if (service.id === Number(serviceId)) {
            selectedService = service;
            break;
        }
    }
    const { name, description, img } = selectedService;

    return (
        <div className='container mt-5'>
            <Row>
                <Col className='col-lg-3'>
                    <Card className='p-0 shadow-sm'>
                        <Card.Img style={{ width: '448px', height: '190px' }} variant="top" className='img-fluid' src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text><small className='text-muted'>{description}</small></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceDetails;
