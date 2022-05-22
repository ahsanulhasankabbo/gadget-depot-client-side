import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './images/notfound404.jpg';

const NotFound = () => {
    return (
        <div className='w-1/2 mx-auto mt-12 mb-36'>
            <img src={notFound} alt="" />
            <Link to='/'><button className='btn mt-5'>Go to Home page</button></Link>
        </div>
    );
};

export default NotFound;