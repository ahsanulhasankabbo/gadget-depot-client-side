import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
                <div className='text-white py-44 px-12'>
                    <h1 className='text-4xl my-5'>Gadget Depot</h1>
                    <p>Explore the vast parts of bikes by widely know manufactures on our website.</p>
                    <button className='btn mt-6'>Explore more</button>
                </div>
            </div>
    );
};

export default Banner;