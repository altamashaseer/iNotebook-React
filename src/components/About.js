import React from 'react'
import '../About.css'
import Lottie from "lottie-react";
import Animation from "../media/animation.json";

const About = () => {
  return (
    <div>
      <div className="back"></div>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="image-column">
            <Lottie animationData={Animation} loop={true} />;
          </div>

          <div className="content-column">
            <div className="sec-title">
              <h2>Get to know about us!</h2>
            </div>
            <div className="text">I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive & efficient in handling by creating usefull plugins thats you need.</div>
            <div className="text">
              We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
            </div>
            <div className="btn-box">
              <a href="#footer" className="btn-style-one">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About