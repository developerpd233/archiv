import React from 'react'
import sweater from '../../assets/images/sweater.png'
import { Button, Container } from 'react-bootstrap';
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";
import e from "../../assets/images/e.png";
import f from "../../assets/images/f.png";
import './TopCategory.css'

const TopCategory = () => {
  return (
    <div>
      <Container>
            <div className='d-flex justify-content-center align-items-center'>
            <h2>Shop By Category</h2>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-around'>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={d} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>Tops</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={a} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>DENIMS</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={b} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>ACCESSORIES</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={c} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>JACKETS</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={e} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>HATS</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
            <div className='d-flex justify-content-start align-items-center flex-column topcat'>
                <img src={f} className='img-fluid' style={{width:'100%',height:'400px',objectFit:'contain'}} />
                <p className=''>TEES</p>
                <Button style={{backgroundColor:'black',color:'white',border:'none',padding:'12px 35px',borderRadius:'50px'}}>Shop Now</Button>
            </div>
         
            </div>
            
       </Container>
    </div>
  )
}
export default TopCategory