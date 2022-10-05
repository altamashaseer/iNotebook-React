import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    let history = useHistory();

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
            history.push("/")
        }
        else {
            alert('Invalid Credentials')
        }
    }

}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} id="password" />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
)


export default Login