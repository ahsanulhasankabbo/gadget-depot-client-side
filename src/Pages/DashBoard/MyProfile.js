import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: update, isLoading, refetch } = useQuery('update', () => fetch(`http://localhost:5000/update?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='ml-6 my-5'>
            <h1 className='text-xl my-5'>Welcome to my profile</h1>
            <hr className='w-1/2 my-4' />
            <div class="avatar">
                <div class="w-32 rounded-full ring ring-blue ring-offset-base-100 ring-offset-2">
                    <img src={update[0]?.img || user?.photoURL || 'https://api.lorem.space/image/face?hash=40361'} alt=' ' />
                </div>
            </div>
            <h1 className='text-2xl mt-3'>Name : <span className='text-blue-500'>{user.displayName}</span></h1>
            <h1 className='text-xl my-3'>Email : <span className='text-blue-500'>{user.email}</span></h1>
            {
                update[0]?.number && <>
                    <h1 className='text-xl my-3'>Education : <span className='text-blue-500'>{update[0]?.education}</span></h1>
                    <h1 className='text-xl my-3'>Location : <span className='text-blue-500'>{update[0]?.location}</span></h1>
                    <h1 className='text-xl my-3'>Phone Number : <span className='text-blue-500'>{update[0]?.number}</span></h1>
                    <h1 className='text-xl my-3'>LinkedIn : <span className='text-blue-500'>{update[0]?.linkedin}</span></h1>
                </>
            }
            <Link to='/updateprofile'><button className='btn btn-primary text-white mt-6'>Update Profile</button></Link>
        </div>
    );
};

export default MyProfile;