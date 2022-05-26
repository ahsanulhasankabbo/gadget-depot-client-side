import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import DeleteModal from './DeleteModal';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteModal, setDeleteModal] = useState(null);
    const navigate = useNavigate();

    const { data: result, isLoading, refetch } = useQuery('result', () => fetch(`https://boiling-island-29316.herokuapp.com/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            // console.log('res', res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return res.json()
        }
        ))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map((order, index) =>
                                <OrderRow
                                    key={order._id}
                                    order={order}
                                    setDeleteModal={setDeleteModal}
                                    index={index}
                                ></OrderRow>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteModal && <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} refetch={refetch}></DeleteModal>
            }
        </div>
    );
};

export default MyOrders;