import React from 'react';

const OrderRow = ({order,setDeleteModal,index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td><img className='w-14 h-14 rounded' src={order.image} alt="" /></td>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td><button className='bg-green-500 btn-sm rounded text-white'>Pay Now</button></td>
            <td> <label onClick={()=> setDeleteModal(order)} for="my-modal-6" class="btn btn-sm btn-error text-white">Delete</label></td>
        </tr>

    );
};

export default OrderRow;