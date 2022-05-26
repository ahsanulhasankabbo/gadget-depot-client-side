import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DeleteOrder = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const {_id} = deleteOrder;
    const handleDelete = id => {
        const url = `http://localhost:5000/manageorder/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your order is Deleted');
                setDeleteOrder(null);
                refetch();
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} class="btn btn-error text-white btn-sm">Delete</label>
                        <label for="delete-order" class="btn text-white btn-primary btn-sm">Cancal</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DeleteOrder;