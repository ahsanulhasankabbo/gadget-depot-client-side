import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteOrder from './DeleteOrder';
import ManageSingleOrder from './ManageSingleOrder';

const ManageAllOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/manageorder')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Paid info</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts?.map((part,index) => 
                            <ManageSingleOrder 
                                key={part._id}
                                part={part}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></ManageSingleOrder>
                        )
                    }
                </tbody>
            </table>
            {
                deleteOrder && <DeleteOrder deleteOrder={deleteOrder} setDeleteModal={setDeleteOrder} refetch={refetch}></DeleteOrder>
            }
        </div>
    );
};

export default ManageAllOrders;