import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal
import './About.css';
import image1 from '../assets/image1.jpg'; // Import your images
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
        <Fade bottom>
            <div className="content-container">
                <div className="text-container">
                    <h1>About Us</h1>
                    <p>
                        Welcome to Geniale Marketing Services! We are a passionate team dedicated to transforming your digital presence through innovative Website Development, effective Digital Marketing, and expert SEO strategies. Our services include custom web design, mobile app development, graphic design, and targeted online marketing solutions. We believe in delivering exceptional results tailored to your unique needs, helping your business grow and thrive in the digital landscape. Partner with us for a journey to digital excellence and success.
                        <br /><br />
                        Connect with us today to elevate your brand!
                    </p>
                </div>
                <div className="image-collage">
                    <img src={image1} alt="Collage 1" />
                    <img src={image2} alt="Collage 2" />
                    <img src={image3} alt="Collage 3" />
                    <img src={image4} alt="Collage 4" />
                </div>
            </div>
        </Fade>
    </section>
    );
};

export default About;
