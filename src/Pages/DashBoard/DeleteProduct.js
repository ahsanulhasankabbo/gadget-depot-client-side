import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteProduct = ({ deleteModal, setDeleteModal, refetch }) => {
    const { _id } = deleteModal;
    const handleDelete = id => {
        const url = `https://boiling-island-29316.herokuapp.com/gadgets/${id}`
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
                setDeleteModal(null);
                refetch();
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-product" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} class="btn btn-error text-white btn-sm">Delete</label>
                        <label for="delete-product" class="btn text-white btn-primary btn-sm">Cancal</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DeleteProduct;