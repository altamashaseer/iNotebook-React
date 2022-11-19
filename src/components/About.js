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
            <div className="text">Organize your thoughts, discoveries, and ideas and simplify planning important moments in your life with your digital notepad. <b>Take notes on your phone and sync them across all your devices with iNotebook</b>. Access your notes anytime, anywhere. Save ideas and check your list at home, in the office, or on the go across your devices.</div>
            <div className="text">
              iNotebook is simple yet very powerful online notebook where you can store, edit & manage your notes without worrying about filling up your device storage. <b>Your notes are secured by high level password encryption method ensuring only you can access your notes.</b> 
            </div>
            <div className="text">
              We hope you like your experience using iNotebook. We are continuously working towards enhancing the application for better user experience. For any query or inputs, you can reach out to us using below details. <b> We'd love to hear your feedback! </b>
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