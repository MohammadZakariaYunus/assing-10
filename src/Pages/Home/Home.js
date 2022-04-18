import React from 'react';
import banner from '../../images/banner.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='banner-section'>
            <img src={banner} alt="" className='w-100' />
        </div>
    );
};

export default Home;