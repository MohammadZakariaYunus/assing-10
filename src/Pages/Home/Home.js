import React from 'react';
import banner from '../../images/banner.jpg';
import './Home.css'

const Home = () => {
    return (
        <div id='home' className='banner-section'>
            <img src={banner} alt="" className='w-100' />
            <button className='btn btn-info '>Book Now...</button>
        </div>
    );
};

export default Home;