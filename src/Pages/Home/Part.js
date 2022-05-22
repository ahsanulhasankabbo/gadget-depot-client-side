import React from 'react';

const Part = ({part}) => {
    const {name, image, discription,minimunOrderQuantity,availableQuantity,price} = part;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-3xl">{name}</h2>
                <p className='text-2xl'>Price : <span className='text-primary font-semibold'>${price}</span></p>
                <p>Minimun Order Quantity : {minimunOrderQuantity}</p>
                <p>Available Quantity : {availableQuantity}</p>
                <p><small>{discription}</small></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;