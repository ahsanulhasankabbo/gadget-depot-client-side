import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteModal, setDeleteModal] = useState(null);

    const { data: result, isLoading, refetch } = useQuery('result', () => fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res => res.json()))

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
                            result.map((order, index) =>
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