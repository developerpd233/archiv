import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import TabsCarousel from './components/Tabs/Tabs'
import Trending from './components/TrendingSection/Trending'
import Slider from './components/Slider/Slider'
import TopCategory from './components/TopCategory/TopCategory'
import Cards from './components/Cards/Cards'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products/Products'
function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<>
              <Header />
            <Banner />
            <TabsCarousel />
            <Trending />
            <Slider />
            <TopCategory />
            <Cards />
            <TabsCarousel />
            < NewsLetter/>
            <Footer />
            </>
          }/>
          <Route path='/shop-all' element={
            <>
             <Header />
              <Products />
              <Banner />
              <Footer />
            
            </>
          }/>
        
          </Routes>
          
        </BrowserRouter>

  );
}

export default App;
