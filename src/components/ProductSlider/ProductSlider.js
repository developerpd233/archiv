import React from 'react'
import CircleSize from '../CircleSize/CircleSize';
import './productslider.css'
import Button from 'react-bootstrap/Button';
import ColorCircle from '../ColorCircle/ColorCircle';


function ProductSlider(props) {
    const {imgurl, data , sizes} = props;
  return (
    <div className='container-home'>
        <div className='container-home-left'> 
       <div className='left-left'>
       {data.map((el)=> {
                return(
            <div className='left-img'>
                <img className='img-div'  src={el.imageSrc}/>
            </div>
                )
            })}
   

       </div>
       <div className='right-right'><img className='img-right-box' src={data[0].imageSrc}/></div>
       </div>
        <div className='container-home-right'>
            <h3 className='product-name'>Garden Of Saturn Thermals</h3>
            <p className='product-price'>$120</p>
            <p className='product-desc'>This garment was handstrung by none other that Saturn Moonchild himself. Saturn put 444 grueling hours of blood, sweat, and tears into hand weaving this garment.</p>
            <div className='main-box'>
            <div className='size-elements'><p className='size-left'>Size</p> <p className='size-right'>Size guide</p></div>
            <div className='circle-box'>
            {sizes.map((item)=>{
                console.log('item', item)
                return(
                    <div className=''>
                    <CircleSize text={item} /></div>
                )
            })}

            </div>
        
        </div>
        <div className='color'>
        <p className='color-style'>Color</p>
        </div>
<div >
    <ColorCircle />
</div>
        <div className="my-btn">
        <Button className='myBtn1'>Buy it now</Button>
            <Button className='myBtn2'>Add to bag</Button>
        </div>
        </div>
    </div>
  )
}

export default ProductSlider