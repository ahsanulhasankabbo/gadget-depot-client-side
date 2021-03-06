import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order,setDeleteModal,index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td><img className='w-14 h-14 rounded' src={order.image} alt="" /></td>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='bg-green-500 btn-sm rounded text-white'>Pay Now</button></Link>}
                {(order.price && order.paid && !order.approve) && <span className='btn btn-sm btn-warning text-white'>Pending</span>}
                {(order.price && order.paid && order.approve) && <span className='btn btn-sm btn-info text-white'>Shipped</span>}

            </td>
            <td> <label onClick={()=> setDeleteModal(order)} disabled={order.paid} for="my-modal-6" class="btn btn-sm btn-error text-white">Delete</label></td>
        </tr>

    );
};

export default OrderRow;