import React from 'react';
import { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }

    const { signInUsingGoogle, processLogin, setUser, error ,setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('type a 6 char long password');
            return;
        }
        processLogin(email, password);
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card p-3">
                <div className="card-body">
                    <div className="text-center mb-4">
                        <h4 className="card-title">Sign In</h4>
                    </div>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Email address</label>
                            <input onBlur={handleEmailField} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="inputPassword3" className="form-label">Password</label>
                            <input onBlur={handlePasswordField} type="password" className="form-control" id="inputPassword3" required />
                            <p className='text-danger'>{error}</p>
                        </div>
                        <p className='text-muted'>New member? <span><Link className='text-danger text-decoration-none' to='/register'> Sign up now</Link></span></p>
                        <button type="submit" className="btn btn-success btn-sm w-100">Sign In</button>
                    </form>
                    <hr />
                    <button className='btn btn-success btn-sm w-100' onClick={handleGoogleLogin}> Continue with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;