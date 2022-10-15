import React from 'react'
import Header from '../../components/Header/Header';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import './productpage.css';
import img from '../../assets/images/p1.png'
import img2 from '../../assets/images/p2.png'
import { Container } from 'react-bootstrap';
import img3 from '../../assets/images/p3.png'
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import CircleSize from '../../components/CircleSize/CircleSize';
import Footer from '../../components/Footer/Footer';


function ProductPage() {
    const multipleProducts = [
        {
            imageSrc: img,
            productName: 'Garden Of Saturn Thermals',
            productPrice: '$120.00',
            btnValue: 'Tops',
            btnValue2: 'Designer',
        },
        {
            imageSrc: img3,
            productName: 'One Last Kiss My Beloved',
            productPrice: '$120.00',
            btnValue: 'Jackets',
            btnValue2: 'Brand',
        },
        {
            imageSrc: img2,
            productName: 'God Save Her',
            productPrice: '$120.00',
            btnValue: 'Denims',
            btnValue2: 'Collection',
        },
    ]
    const slidersProduct = [
        {
            imageSrc: img,
           
        },
        {
            imageSrc: img,
           
        },
        {
            imageSrc: img,
            
        },
    ]
    const sizes = ['XS', 'S' , 'M' , 'X', 'XL', 'XXL']


    return (
        <>

            <div>
                <Header />
            </div>
            <Container>
            <div>
               
                </div>
                <div >
                <ProductSlider data={slidersProduct}  sizes={sizes} />
                </div>
                <div className='title-main-div'>
                    <p className='title-product-page'>Handpicked Just For You</p>
                </div>
                <div className='multipleProducts'>
                    {multipleProducts.map((items) => {
                        return (
                            <SingleProduct imageSrc={items.imageSrc} productName={items.productName} productPrice={items.productPrice} btnValue={items.btnValue} btnValue2={items.btnValue2} />

                        )
                    }


                    )}
                </div>
              
            </Container>
            <div className='footer-style'>
                    <Footer />
                </div>
        </>
    )
}

export default ProductPage