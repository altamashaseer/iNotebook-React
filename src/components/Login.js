import React from 'react'
// import { useHistory } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    // let history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            //redirect and save auth token
            localStorage.setItem('token', json.authtoken)
            navigate("/")
        }
        else {
            alert('Invalid Credentials')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )

}

export default Login