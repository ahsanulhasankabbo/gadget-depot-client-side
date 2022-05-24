import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
                toast.success('Your order is Deleted')
            })
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
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <th><img className='w-14 h-14 rounded' src={order.image} alt="" /></th>
                                    <th>{order.name}</th>
                                    <td>${order.price}</td>
                                    <td><button className='bg-green-500 px-6 py-2 rounded text-white'>Pay</button></td>
                                    <td>
                                        <label for="my-modal-6" className="btn modal-button">Delete</label>

                                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>

                                                <div className="modal-action">
                                                    <button onClick={() => handleDelete(order._id)} className='bg-red-500 px-6 py-2 rounded text-white'>Yes</button>
                                                    <label for="my-modal-6" className="btn">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyOrders;