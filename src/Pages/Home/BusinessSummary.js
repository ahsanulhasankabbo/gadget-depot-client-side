import React from 'react';
import { FaUserAlt,FaHands,FaSplotch,FaScroll } from "react-icons/fa";
const BusinessSummary = () => {
    return (
        <div>
            <h1 className='my-12 text-4xl text-center'>Bussiness Summary</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow grid grid-cols-1 lg:grid-cols-4 gap-8 mx-12">

                <div className="stat">
                    <h3> <FaUserAlt className='w-12 h-12 mx-auto'/></h3>
                    <div className="stat-title text-2xl my-4">Customers</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                <h3> <FaHands className='w-12 h-12 mx-auto'/></h3>
                    <div className="stat-title text-2xl my-4">Annual Revenue</div>
                    <div className="stat-value">50M+ </div>
                </div>

                <div className="stat">
                <h3> <FaSplotch className='w-12 h-12 mx-auto'/></h3>
                    <div className="stat-title text-2xl my-4">Reviews</div>
                    <div className="stat-value">20K</div>
                </div>

                <div className="stat">
                <h3> <FaScroll className='w-12 h-12 mx-auto'/></h3>
                    <div className="stat-title text-2xl my-4">Tools</div>
                    <div className="stat-value">50+</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;