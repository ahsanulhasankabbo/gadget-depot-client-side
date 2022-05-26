import React from 'react';
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'

const Service = () => {
    return (
        <div className='my-12'>
            <h1 className='text-4xl m-12 font-semibold text-center text-primary divider'>Our Experts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mx-16'>
                <div className='border rounded-xl p-10'>
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user1} alt='' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl my-4'>Christiano Ronaldo</h1>
                        <p>Exicutive Member</p>
                    </div>
                </div>
                <div className='border rounded-xl p-10'>
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user2} alt='' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl my-4'>Leone Messi</h1>
                        <p>Managing Director</p>
                    </div>
                </div>
                <div  className='border rounded-xl p-10'>
                    <div class="avatar flex justify-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user3} alt='' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl my-4'>Naymer jr</h1>
                        <p>Assistance Manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;