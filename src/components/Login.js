import React, { useState } from 'react'
// import { useHistory } from 'react-router'
import { useNavigate, Link } from 'react-router-dom'
import Background from './Background';

const Login = (props) => {
    const host="https://puzzled-bull-stockings.cyclic.app"

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    // let history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        props.setProgress(30)
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        props.setProgress(50)
        const json = await response.json();
        if (json.success) {
            //redirect and save auth token
            localStorage.setItem('token', json.authtoken)
            // console.log(json.authtoken);
            navigate("/")
            props.showAlert('Logged in successfully', 'success')
        }
        else {
            props.showAlert('Invalid Crredentials', 'danger')
        }
        props.setProgress(100)
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (    
        <div className="login-container mt-3">
            <form onSubmit={handleSubmit}>
                <h2 className='text-center'>Login to iNotebook</h2>
                <h6 className='mb-4'>Enter your credentials</h6>
                <div className="mb-3 input-box">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" ></div>
                </div>
                <div className="mb-3 input-box">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} value={credentials.password} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-dark mt-3" >Login <i className="fa-solid fa-right-to-bracket"></i></button>
                <p>Don't have an account? <Link to='/signup'> Sign up</Link></p>
            </form>
            <Background/>
        </div>
    )

}

export default Login