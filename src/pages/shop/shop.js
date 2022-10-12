import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopsort from '../../components/shopsort/shopsort'
import Shopfilter from '../../components/shopfilter/shopfilter';
function App() {
    return (
        <>
            <Header />
            <Shopsort />
            <Shopfilter />
            <Footer />
        </>

    );
}

export default App;
