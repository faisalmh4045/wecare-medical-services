import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'
import img from '../../images/banner.png'

const Header = () => {
    return (
        // start - header section
        <div className='mb-5 position-relative text-center'>
            <div>
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className='info text-light'>
                <h1 className='info-text m-0 mb-lg-4'>Welcome To WeCare Medical Center</h1>
                <h4 className='info-text'>“Do your part, care for your heart.”</h4>
                <Button id='btn-get-started' variant='light' className='m-0 mt-lg-5 w-50 text-uppercase'>Make an Appointment</Button>
            </div>
            
        </div>
        //end - header section
    );
};

export default Header;