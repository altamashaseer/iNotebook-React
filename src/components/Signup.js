import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Background from './Background';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    if (json.success) {
      //redirect and save auth token
      localStorage.setItem('token', json.authtoken)
      console.log(json.authtoken);
      navigate("/")
      props.showAlert('Yayy! Account created successfully', 'success')
    }
    else {
      props.showAlert('Invalid Credentials', 'danger')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='signup-container'>
      <form onSubmit={handleSubmit}>
          <h2 className='mb-4 text-center' >Create a new account</h2>
          
        <div className="mb-3 input-box">
          <label htmlFor="name" className="form-label">Username</label>
          <input type="text" className="form-control" onChange={onChange} id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 input-box">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We never share your details with anyone.</div>
        </div>
        <div className="mb-3 input-box">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onChange} name='password' required minLength={5} id="password" />
        </div>
        <div className="mb-3 input-box">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" onChange={onChange} name='cpassword' required minLength={5} id="cpassword" />
        </div>
        <button type="submit" className="btn btn-dark mt-3">Sign Up</button>
      </form>
      <Background/>
    </div>
  )
}

export default Signup
