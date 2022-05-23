import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const restockRef = useRef('');
    const [user] = useAuthState(auth);
    // console.log(user)
    const { id } = useParams();
    const { data: gadget, isLoading, refetch } = useQuery('gadget', () => fetch(`http://localhost:5000/gadget/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleRestock = id => {
        const restockQuantity = restockRef.current.value;
        if (restockQuantity > gadget.minimunOrderQuantity && restockQuantity < gadget.availableQuantity) {
            const { availableQuantity, ...rest } = gadget;
            const newQuantity = parseInt(availableQuantity) - parseInt(restockQuantity);
            const newItem = { availableQuantity: newQuantity, ...rest };

            const url = `http://localhost:5000/gadget/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    // refetch();
                    if (data.acknowledged === true) {
                        // console.log(data)
                        refetch();
                        toast.success('Your order is set!')
                    }
                });
        }
        else{
            toast.error('Please Provide a valid number')
        }
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-12 md:m-24">
            <figure className='w-1/2 h-full mx-auto'><img src={gadget.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{gadget.name}</h2>
                <p>Price : ${gadget.price}</p>
                <p>Available Quantity : {gadget.availableQuantity}</p>
                <p>Minimin Order Quantity : {gadget.minimunOrderQuantity}</p>
                <p><small>{gadget.discription}</small></p>
                <div>
                    <label htmlFor="purchaseModal" className="btn btn-primary modal-button">Place Order</label>

                    <input type="checkbox" id="purchaseModal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <input type="text" value={user.displayName} disabled class="input input-bordered w-full max-w-xs" />
                            <input type="email" value={user.email} disabled class="input input-bordered w-full my-3 max-w-xs" />
                            <input type="text" placeholder='Enter Your Address' class="input input-bordered w-full max-w-xs" />
                            <input type="number" placeholder='Enter Your Phone Number' class="input input-bordered my-3 w-full max-w-xs" />
                            <input ref={restockRef} type="number" placeholder='Set Order Quantity' class="input input-bordered w-full max-w-xs" />

                            <div className="modal-action">

                                <button onClick={() => handleRestock(id)} className="btn btn-primary">Set order</button>

                                {/* <label onClick={()=> handleRestock(gadget._id)} className="btn btn-primary">Set Order</label> */}
                                <label htmlFor="purchaseModal" className="btn btn-primary">Cancal</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Purchase;