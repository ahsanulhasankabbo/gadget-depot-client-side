import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='ml-6'>
            <h1 className='text-xl my-5'>Welcome to my profile</h1>
            <hr className='w-1/2 my-4' />
            <div class="avatar">
                <div class="w-32 rounded-full ring ring-blue ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL || 'https://api.lorem.space/image/face?hash=40361'} alt=' '/>
                </div>
            </div>
            <h1 className='text-2xl mt-3'>Name </h1>
            <h1 className='text-2xl text-primary'> {user.displayName}</h1>
            <h1 className='text-xl my-3'>Email : <span className='text-blue-500'>{user.email}</span></h1>
        </div>
    );
};

export default MyProfile;