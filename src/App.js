import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
