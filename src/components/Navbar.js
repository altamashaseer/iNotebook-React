import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../media/logo.png'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    let location = useLocation(); //for active class

    React.useEffect(() => {
        // console.log(location.pathname);
    }, [location]);
    return (    
        <nav className="navbar  navbar-dark navbar-expand-lg bg-dark" id='navbar'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/mynotes' ? 'active' : ""}`} to="/mynotes">My Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link type="button" className="btn btn-dark mx-1" to='/login' role="button">Login</Link>
                        <Link type="button" className="btn btn-dark mx-1" to='/signup' role="button">Sign Up</Link>
                    </form> : <button onClick={handleLogout} className='btn btn-dark'>Logout <i className="fa-solid fa-right-from-bracket"></i></button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar