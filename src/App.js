import React, { Component } from 'react'
import Home from './pages/home/home'
import Shop from './pages/shop/shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct/SingleProduct';
import A from './assets/images/newImg.png'
import ProductPage from './pages/productPage/ProductPage';

export class App extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />

        } />
        <Route path='/shop-all' element={
          <>
            <Shop />
          </>
        } />

      </Routes>

    </BrowserRouter> */}
    <ProductPage />
    {/* <SingleProduct imageSrc={A} productName="Garden Of Saturn Thermals" productPrice="149 $" btnValue="Tops" btnValue2="Designers"/> */}
      </div>
    )
  }
}

export default App
