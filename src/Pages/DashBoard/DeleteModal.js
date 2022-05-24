import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({deleteModal,setDeleteModal,refetch}) => {
    const {_id  } = deleteModal;
    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
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

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} class="btn btn-error text-white btn-sm">Delete</label>
                        <label for="my-modal-6" class="btn text-white btn-primary btn-sm">Cancal</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DeleteModal;