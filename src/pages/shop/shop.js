import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopsort from '../../components/shopsort/shopsort'
import Shopfilter from '../../components/shopfilter/shopfilter';
import Products from '../../components/Products/Products';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './shop.css'

function App() {
    return (
        <>
            <Header />
            <div className='shoppages'>
                <Container>
                    <Shopsort />
                    <Shopfilter />
                    <Products />
                </Container>
            </div>
            <Footer />
        </>

    );
}

export default App;
