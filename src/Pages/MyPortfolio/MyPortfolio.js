import React from 'react';
import image from './20210527_154424 (2).png'
import camera from './camera-stock.png'
import tutor from './tutor-sheba.png'
import car from './car-stock.png'

const MyPortfolio = () => {
    return (
        <div>
            <div className='my-16 mx-16'>
                <div class="divider"><span className='text-4xl font-bold'>My Profile</span></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
                    <div className=''>
                        <img className='w-1/2 border-2 mx-auto' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold'>Ahsanul Hasan Kabbo</h1>
                        <h1 className='text-xl my-2'><span className='font-semibold'>Email :</span> kabboahsanulhasan@gmail.com</h1>
                        <h1 className='text-xl'><span className='font-semibold'>University :</span> Bangabandhu Sheikh Mujibur Rahman Science and Technology University.</h1>
                        <h1 className='text-xl my-2'><span className='font-semibold'>Department :</span> Electrical and Electronic Engineering</h1>
                        <h1 className='text-xl font-semibold mb-3'>Skills : </h1>
                        <div>
                            <p className='inline'>HTML : </p><progress class="progress progress-accent w-56" value="90" max="100"></progress> <br />
                            <p className='inline'>CSS : </p><progress class="progress progress-accent w-56" value="85" max="100"></progress> <br />
                            <p className='inline'>JavaScript : </p><progress class="progress progress-accent w-56" value="70" max="100"></progress> <br />
                            <p className='inline'>React : </p><progress class="progress progress-accent w-56" value="75" max="100"></progress> <br />
                            <p className='inline'>Node : </p><progress class="progress progress-accent w-56" value="60" max="100"></progress> <br />
                            <p className='inline'>MongoDB : </p><progress class="progress progress-accent w-56" value="65" max="100"></progress> <br />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="divider"><span className='text-4xl font-bold'>My Profile</span></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-12 mx-20'>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={car} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <a href="https://car-store-73d89.web.app/"><button class="btn btn-info text-white">Live Website</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={camera} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <a href="https://camera-stock-541820.netlify.app/"><button class="btn btn-info text-white">Live Website</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={tutor} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="card-actions justify-end">
                                <a href="https://tutor-sheba.web.app/"><button class="btn btn-info text-white">Live Website</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;