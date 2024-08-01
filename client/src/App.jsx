import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import ProductPage from './components/ProductPage';
import ProductTypePage from './components/ProductTypePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  console.log('qwe wtf');
  return (
    <Router>
      <div className="App">
        <Header />
        {/* TODO: Move pages into <Body> and replace here */}
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/product-types/:typeId" element={<ProductTypePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
