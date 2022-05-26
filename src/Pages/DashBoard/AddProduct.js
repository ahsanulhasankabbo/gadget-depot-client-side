import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '9c83b473d22af9b8a5c758a2d72332d6'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const addProduct = {
                        name : data.name,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minimunOrderQuantity: data.minimunOrderQuantity,
                        discription: data.discription,
                        image: img
                    }
                    fetch('https://boiling-island-29316.herokuapp.com/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.acknowledged === true) {
                                toast.success('Add Product successfully');
                                reset();
                            }
                            else {
                                toast.error('fail to Add product');
                            }
                        })
                }
            })

    }
    return (
        <div>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-primary my-4 font-semibold text-2xl'>Add a Product</h1>


                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder='Enter Product Name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Enter Product Price"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Enter Available Quantity"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Enter Minimun Quantity"
                                {...register("minimunOrderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimun Order Quantity is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.minimunOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimunOrderQuantity.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <textarea type="text" placeholder='Enter Product Description'
                                {...register("discription", {
                                    required: {
                                        value: true,
                                        message: 'Product Description is Required'
                                    }
                                })} className="input h-16 input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.discription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.discription.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="file"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;