import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraInfo from './ExtraInfo';
import Parts from './Parts';
import Reviews from './Reviews';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <ExtraInfo></ExtraInfo>
            <Service></Service>
        </div>
    );
};

export default Home;