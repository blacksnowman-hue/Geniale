import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
    });

    const [errors, setErrors] = useState({}); // State for form errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear error for the current field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        // Service selection validation
        if (!formData.service) {
            newErrors.service = 'Please select a service.';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (validateForm()) {
            // Handle form submission (e.g., send data to an API or email)
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                service: '',
            });
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Get In touch with us</h2>
          <h3>Fill out your details below with the service that you need and we’ll get back to you.</h3>  
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="service">Select a Service:</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="development">Development</option>
                        <option value="design">Design</option>
                        <option value="Logo">Logo</option>
                        <option value="SEO">SEO</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Bulk SMS">Bulk SMS</option>
                        <option value="Bulk Whatsapp">Bulk Whatsapp</option>

                    </select>
                    {errors.service && <span className="error">{errors.service}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
