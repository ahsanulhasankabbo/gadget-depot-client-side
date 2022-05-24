import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let signInError ;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        console.log(user || gUser);
        navigate(from, { replace: true });
    }
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if ( loading || gLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register("email", {
                                required:{
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Enter a valid Email'
                                }
                            })} type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("password", {
                                required:{
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="Enter your Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>

                        {signInError}

                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                    </form>

                    <p>New to Gadget Depot <Link className='text-primary font-semibold' to='/signup'>Create a Account</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;