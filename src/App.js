import React, { Component } from 'react'
import Home from './pages/home/home'
import Shop from './pages/shop/shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />

        } />
        <Route path='/shop-all' element={
          <>
            <Shop />
          </>
        } />

      </Routes>

    </BrowserRouter>
      </div>
    )
  }
}

export default App
