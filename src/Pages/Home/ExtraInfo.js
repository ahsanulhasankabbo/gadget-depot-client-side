import React from 'react';
import brakes from './images/brakes.jpg';

const ExtraInfo = () => {
    return (
        <div class="hero w-4/5 mx-auto bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={brakes} class="w-full md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='md:p-14'>
                    <h1 class="text-3xl font-bold">Gadget-Depot</h1>
                    <p class="py-6">The main parts of a bicycle are wheels, frame, seat, handle bars, and components. We also could consider the helmet as a key safety issue. Wheels give the fundamental purpose to the bicycle.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraInfo;