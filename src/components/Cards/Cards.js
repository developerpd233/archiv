import React from 'react'
import banner from '../../assets/images/banner.png'
import { Button, Container,Row,Col } from 'react-bootstrap';
import "./Card.css"
import img from '../../assets/images/new.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'

const Cards = () => {
  return (
    <div className='card-sec' style={{padding:'100px 0px 250px 0px'}}>
         <Container style={{marginTop:'200px'}}>
            <Row className='text-center'>
               <Col sm style={{padding: '0 22px'}}>
               <img src={img} className='img-fluid'/>
                <h3 className='mt-4'>Shop new arrivals</h3>
               <p style={{fontSize:'20px'}}>From what happened to god, demik, and more</p>
               
               </Col>
               <Col sm>
               <img src={img2} className='img-fluid'/>
                <h3 className='mt-4'>Accessories</h3>
               <p style={{fontSize:'20px'}}>Featured brand of the week</p>
               
               </Col>
               <Col sm>
               <img src={img3} className='img-fluid'/>
                <h3 className='mt-4'>Best selling</h3>
               <p style={{fontSize:'20px'}}>Featured brand of the week</p>
               
               </Col>
            </Row>
            {/* <div className='d-flex justify-content-center align-items-center'>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-around'>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={img} height='420px' width='400px'  />
                <h3 className='mt-4'>Shop New Arrivals</h3>
               <p style={{fontSize:'20px'}}>From what happened to god, demik, and more</p>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={img} height='420px' width='400px'   />
                <h3  className='mt-4'>Accessories</h3>
               <p style={{fontSize:'20px'}}>Featured brand of the week</p>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={img} height='420px' width='400px' />
                <h3  className='mt-4'>Best Selling</h3>
               <p style={{fontSize:'20px'}}>Featured brand of the week</p>
            </div>
            </div>
             */}
       </Container>
    </div>
  )
}
export default Cards