import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png'
const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${banner}`,backgroundPosition:"center", backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
        {/* <img  src={banner}  fluid/> */}
        <div className='mask banner-sec'>
        <div className='d-flex justify-content-center align-items-center '>
        <Link to='/shop-all'><p className='text-white mb-0 ' style={{padding:'350px 0px'}}><Button style={{backgroundColor:'white',color:'black',border:'none',padding:'15px 45px',borderRadius:'50px'}}>Shop All</Button></p></Link>
        </div>
        </div>
    </div>
  )
}
export default Banner;