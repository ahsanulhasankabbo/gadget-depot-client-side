import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";

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
        })
    }

    return (
        <div>
            <h1>order is : {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                    <label for="my-modal-6" class="btn modal-button">Delete</label>

                                        {/* <label for="my-modal-6" class="modal-button"><button className=' bg-red-500 px-6 py-2 rounded text-white'>Delete</button></label> */}
                                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                        <div class="modal modal-bottom sm:modal-middle">
                                            <div class="modal-box">
                                                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>

                                                <div class="modal-action">
                                                    <button onClick={() => handleDelete(order._id)} className='bg-red-500 px-6 py-2 rounded text-white'>Delete</button>
                                                    <label for="my-modal-6" class="btn">Cancel</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <button onClick={() => handleDelete(order._id)} className='bg-red-500 px-6 py-2 rounded text-white'>Delete</button> */}
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;