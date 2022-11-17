import React from 'react'
import '../Footer.css'
import logo from '../media/logo.png'

const Footer = () => {
  return (
    <div>
      <section class="contact-area" id="contact">
        <div class="container" id='footer'>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="/"><img src={logo} alt="logo"/></a>
                        <p>Write notes, save ideas & keep up with your to-do list with iNotebook!</p>
                        <div class="hr"></div>
                        <h6></h6>
                        <h6><i class="fa-solid fa-location-pin"></i>  Delhi, India <span>|</span> <i class="fa-solid fa-phone"></i> +91-9997340479</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" target='__blank' href = "mailto:altamashaseer9@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
                                <li><a class="hover-target"  href="https://github.com/altamashaseer" target='__blank'><i class="fab fa-github"></i></a></li>
                                <li><a class="hover-target" href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>NewsJunky &copy; 2022 | All Rights Reserved</p>
    </footer>
    </div>
  )
}

export default Footer
