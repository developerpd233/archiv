import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/images/tik.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Marquee from 'react-fast-marquee';
import './Slider.css'

const Slider = () => {
  return (
    <div className='maindiv'>
      <h3 style={{marginBottom:60}}>Popular Designers</h3>
      <Marquee direction="left" speed={100} delay={5} pauseOnHover={true} gradient={false} >
      <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
        <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card> 
  <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
    <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card>
   <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
    <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card> 
  <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
    <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card> 
  <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
    <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card> 
  <Card style={{display:'block',width:'20%',border:'none',margin:'auto 8px'}}>
    <a href='#'>
        <Card.Img  variant="top" src={banner} style={{width:'100%',height:'100%',maxWidth:'270px',objectFit:'contain',borderRadius:'200px',border:'1px #C6C6C6 solid'}}/>
        </a>
  </Card>
      </Marquee>
     
  </div>
  )
}
export default Slider