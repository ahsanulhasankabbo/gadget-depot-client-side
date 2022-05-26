import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const imageStorageKey = '9c83b473d22af9b8a5c758a2d72332d6'

    const onSubmit = async data => {
        // console.log(data);
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
                    const update = {
                        name: user?.displayName,
                        email: user?.email,
                        education : data.education,
                        location: data.location,
                        number: data.number,
                        linkedin: data.linkedin,
                        img: img
                    }
                    fetch('https://boiling-island-29316.herokuapp.com/update', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(update)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.acknowledged === true) {
                                toast.success('Update profile successfully');
                                reset();
                                navigate('/dashboard')
                            }
                            else {
                                toast.error('fail to update the profile');
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h1 className='text-primary mt-4 font-semibold text-3xl text-center'>Update your profile</h1>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder="Your Name"
                                {...register("name", {})} disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input type="email"
                                {...register("email", {})} disabled value={user?.email} className="input input-bordered w-full max-w-xs my-3" />

                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder='Enter your education'
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder="Your Location"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Your Number"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Number is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder="Your LinkedIn"
                                {...register("linkedin", {
                                    required: {
                                        value: true,
                                        message: 'Linkedin is Required'
                                    }
                                })} className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.Linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Linkedin.message}</span>}

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

                        <input className='btn w-full max-w-xs' type="submit" value='Add' />
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;