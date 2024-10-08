import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import Fade from react-awesome-reveal
import './Services.css';
import service1 from '../assets/service1.jpg'; // Import images
import service2 from '../assets/service2.jpg'; 
import service3 from '../assets/service3.jpg'; 
import service4 from '../assets/service4.jpg'; 

const Services = () => {
    return (
        <section id="services" className="services-section">
            <Fade bottom>
                <h1>Our Services</h1>
                <div className="services-grid">
                    <div className="service-item">
                        <img src={service1} alt="Service 1" />
                       <h4>Website Designing </h4>
                       <p>  We create custom, responsive websites tailored to your brand. Benefit from a stunning online presence that attracts visitors and converts them into loyal customers.</p>
                    </div>
                    <div className="service-item">
                        <img src={service2} alt="Service 2" />
                        <h4>Website Development</h4>
                        <p> We create strong, easy-to-use websites that help your business run smoothly. Enjoy a better online presence that attracts more visitors and supports your growth</p>
                    </div>
                    <div className="service-item">
                        <img src={service3} alt="Service 3" />
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p> We improve your website's visibility on search engines like Google. This helps more people find your business online, leading to increased traffic and potential customers.</p>
                    </div>
                    <div className="service-item">
                        <img src={service4} alt="Service 4" />
                        <h4>Graphic Designing</h4>
                        <p> Transform your ideas into impactful visuals with our creative graphic design services, helping you stand out and connect with your audience.</p>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Services;
