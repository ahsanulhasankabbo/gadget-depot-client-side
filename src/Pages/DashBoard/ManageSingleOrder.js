import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageSingleOrder = ({ part, index,refetch }) => {
    const {_id, name} = part;
    const handleApprove = id => {
        const approve = {
            approve : true
        };
        const url = `http://localhost:5000/manageorder/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(approve)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Product send for shipping");
            refetch()
        })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img className='w-14 h-14 rounded' src={part.image} alt="" /></td>
            <td>{part.name}</td>
            <td>${part.price}</td>
            <td>
                {!part.paid && <button className='btn btn-sm btn-warning text-white'>Unpaid</button> }
                {part.paid && <button onClick={() => handleApprove(_id)} disabled={part.approve} className='btn btn-sm btn-success text-white'>Paid</button> }
            </td>
            <td> <label for="my-modal-6" class="btn btn-sm btn-error text-white">Delete</label></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default ManageSingleOrder;