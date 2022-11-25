import React from 'react'
import '../Footer.css'
import logo from '../media/logo.png'

const Footer = () => {
  return (
    <div>
      <section className="contact-area" id="contact">
        <div className="container" id='footer'>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <a href="/"><img src={logo} alt="logo"/></a>
                        <p>Write notes, save ideas & keep up with your to-do list with iNotebook!</p>
                        <div className="hr"></div>
                        <h6><i className="fa-solid fa-location-pin"></i>  Delhi, India <span>|</span> <i className="fa-solid fa-phone"></i> +91-9997340479</h6>
                        <div className="contact-social">
                            <ul>
                                <li><a className="hover-target" target='__blank' href = "mailto:altamashaseer9@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
                                <li><a className="hover-target"  href="https://github.com/altamashaseer" target='__blank'><i className="fab fa-github"></i></a></li>
                                <li><a className="hover-target" href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>iNotebook &copy; 2022 | All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer
