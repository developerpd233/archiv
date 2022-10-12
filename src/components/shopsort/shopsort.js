import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './shopsort.css';
const shopsort = () => {
    return (
        <Container>
            <div className='shopproduct-main'>
                <div className='shopproduct-sort'>
                    <div className='product-sort-listing'>
                        <p><span>9,241</span>listings</p>
                    </div>
                    <div className='shop-product-sort'>
                        <p>Sort by:</p>
                        <select className='sort'>
                            <option>Trending</option>
                            <option>Trending</option>
                            <option>Trending</option>
                            <option>Trending</option>
                        </select>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default shopsort;