import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <HomePage />
        <ServicesPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
