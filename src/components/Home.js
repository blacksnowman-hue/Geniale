import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal
import './Home.css';
import heroImage from '../assets/hero.png';
const Home = () => {
    return (
        <section id="home" className="home-section">
            <Fade triggerOnce>
            <div className="text-container"> {/* Separate container for text */}
                    <h1>Grow your Business with us!</h1>
                    <p>Welcome to Geniale Marketing Services! We offer cutting-edge Website Development, Digital Marketing, SEO, mobile app development, and graphic design to help your business grow. Partner with us for digital success.</p>
                </div>
                <div className="image-container"> {/* Wrap image in a div */}
                    <img src={heroImage} alt="Hero" className="hero-image" /> {/* Add the image */}
                </div>
            </Fade>
        </section>
    );
};

export default Home;
