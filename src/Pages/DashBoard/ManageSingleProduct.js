import React from 'react';

const ManageSingleProduct = ({part,setDeleteModal}) => {
    const {_id,name, image, discription,minimunOrderQuantity,availableQuantity,price} = part;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='text-2xl'>Price : <span className='text-primary font-semibold'>${price}</span></p>
                <p>Minimun Order Quantity : {minimunOrderQuantity}</p>
                <p>Available Quantity : {availableQuantity}</p>
                <p><small>{discription}</small></p>
                <label htmlFor='delete-product'  onClick={()=> setDeleteModal(part)} className='btn btn-error text-white'>Delete</label>
            </div>
        </div>
    );
};

export default ManageSingleProduct;