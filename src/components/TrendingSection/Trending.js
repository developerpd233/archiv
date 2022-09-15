import React from 'react'
import trending from '../../assets/images/trending.png'
import { Button } from 'react-bootstrap';
import './Trending.css'
import mobilebg from "../../assets/images/Image.png";

const Trending = () => {
  return (
    <div className='tranding-bg' style={{backgroundImage: `url(${trending}`,backgroundPosition:"center", backgroundRepeat: 'no-repeat', backgroundSize:'cover',marginTop:'150px'}}>
    {/* <img  src={banner}  fluid/> */}
    <div className='mask tranding-sec' style={{padding:'120px 0px'}}>
        <div className='d-flex justify-content-center align-items-center'>
        <p  className='text-white text-uppercase head' >Trending</p>
        </div>
        <div className='d-flex justify-content-center align-items-center '>
        <p  className='text-white' style={{fontSize: '20px',marginBottom:'35px'}}>Check out everyone's favorite pieces</p>
        </div>
    <div className='d-flex justify-content-center align-items-center '>
     
      <p className='text-white mb-2'><Button style={{backgroundColor:'white',color:'black',border:'none',padding:'8px 50px',borderRadius:'50px'}}>Explore</Button></p>
    </div>
    </div>
</div>
  )
}
export default Trending;