import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home'
import Shop from './pages/shop/shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
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

  );
}

export default App;
