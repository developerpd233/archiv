import React from 'react'
import './singleproduct.css'
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function SingleProduct(props) {
    const {productName, productPrice, imageSrc, paraGraph, btnValue, btnValue2} = props;
  return (
    <div className='product-box'>
            <div className='products-imgs'>
              <img src={imageSrc}  className='products-img' />
            </div>
            <div className='product-box-content'>
              <h2>{productName}</h2>
            </div>
            <div className='product-box-price'>
              <p>{productPrice}</p>
             
            </div>
            <div className='btnStyle'>
            <Button className='myBtn-1'>{btnValue}</Button>
            <Button className='myBtn-2'>{btnValue2}</Button>
              </div>
          </div>
  )
}

export default SingleProduct