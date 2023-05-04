import React, {useContext, useState} from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/login.json";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../providers/AuthProvider';
import {updateProfile} from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {SignUpNewUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegisterUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');
        setSuccess('');

        if (password !== confirm) {
            setError('Password not matched');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        SignUpNewUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                setSuccess('successfully registered user');
                updateuserInfo(result.user, name, photo);
                navigate(from, {replace: true});
                console.log(registeredUser);
            })
            .catch(error => setError(error.message));

        const updateuserInfo = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then()
                .catch(error => setError(error.message));
        }
    }

    return (
        <div className="hero min-h-screen my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterUser} className="card-body">
                        <p className='text-center text-red-600'>{error}</p>
                        <p className='text-center text-success'>{success}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="6 characters password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <p><small>Already have an account? <Link className='text-primary underline' to='/login'>Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;