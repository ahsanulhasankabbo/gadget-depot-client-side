import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

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
                    const addReview = {
                        name: data.name,
                        company: data.company,
                        rating: data.rating,
                        feedback: data.feedback,
                        image: img
                    }
                    fetch('https://boiling-island-29316.herokuapp.com/addreview', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addReview)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.acknowledged === true) {
                                reset();
                                navigate('/');
                                toast.success('Add Product successfully');
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' my-4 font-semibold text-2xl'>Add a Review</h1>


                <div className="form-control w-full max-w-xs">

                    <input type="text" placeholder='Enter Your Name'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">

                    <input type="text" placeholder="Enter Your Company Name"
                        {...register("company", {
                            required: {
                                value: true,
                                message: 'Company Name is Required'
                            }
                        })} className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.company?.type === 'required' && <span className="label-text-alt text-red-500">{errors.company.message}</span>}

                    </label>
                </div>


                <div className="form-control w-full max-w-xs">

                    <input type="number" placeholder="Enter Your Rating between 1 to 5"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            }
                        })} className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">

                    <textarea type="text" placeholder='Enter Your Feedback'
                        {...register("feedback", {
                            required: {
                                value: true,
                                message: 'Feedback is Required'
                            }
                        })} className="input h-16 input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.feedback?.type === 'required' && <span className="label-text-alt text-red-500">{errors.feedback.message}</span>}

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

                <input className='btn w-full max-w-xs' type="submit" value='Add Review' />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReview;