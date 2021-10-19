import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useServices from '../hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    const history = useHistory();
    const handleViewDetails = (id) => {
        history.push(`/service-details/${id}`);
    }

    return (
        <div className='container'>
            <h2 className='mb-3'>Services We Provide</h2>
            {/* start - service container */}
            <Row lg={4} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleViewDetails={handleViewDetails}
                        ></Service>)
                }
            </Row>
            {/* end - courses container */}
        </div>
    );
};

export default Services;