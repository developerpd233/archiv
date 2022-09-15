import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/images/banner.png'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Marquee from 'react-fast-marquee';
import { CartDash, LightbulbFill } from 'react-bootstrap-icons';
import './Tab.css'

const TabsCarousel = () => {
  return (
    <div>
      <Container fluid  className='tab-sec' style={{margin:'150px auto 250px',paddingLeft:"10%"}}>
        
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      style={{border:'0',fontSize:25,color:'black'}}
      // variant={CartDash}  
        >
      <Tab eventKey="home" title={<p>Vintage Pants &nbsp;<sup className='fs-6'>18</sup></p>} tabClassName='tabb' sm>
     <Marquee play={true} direction="left" delay={1} speed={100} pauseOnHover={true} gradient={false}>
      <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designer</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designers</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    
     </Marquee>
      </Tab>
      <Tab eventKey="profile" title={<p>New Arrivals &nbsp;<sup className='fs-6'>8</sup></p>} tabClassName='tabb'>
      <Marquee play={true} direction="left" delay={1} speed={100} pauseOnHover={true} gradient={false}>
      <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designer</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designers</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    
     </Marquee>
      </Tab>
      <Tab eventKey="longer-tab" title={<p>Designers Boots &nbsp;<sup className='fs-6'>8</sup></p>} tabClassName='tabb'>
      <Marquee play={true} direction="left" delay={1} speed={100} pauseOnHover={true} gradient={false}>
      <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designer</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designers</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    
     </Marquee>
      </Tab>
      <Tab eventKey="contact"title={<p>Bestsellers &nbsp;<sup className='fs-6'>18</sup></p>} tabClassName='tabb'>
      <Marquee play={true} direction="left" delay={1} speed={100} pauseOnHover={true} gradient={false}>
      <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designer</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p1} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>Garden Of Saturn Thermals</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Tops</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Designers</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p2} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>One Last Kiss My Beloved</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Jackets</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Brand</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '23rem',display:'inline-block',margin:'auto 30px',border:'none'}}>
      <Card.Img variant="top" src={p3} style={{padding:'0px 40px',backgroundColor:'#F7F7FA'}} />
      <Card.Body>
        <Card.Title>God Save Her</Card.Title>
        <Card.Text style={{color:'gray'}}>
          $120.00
        </Card.Text>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px',margin:'0px 9px 0px 0px'}}>Denims</Button>
        <Button style={{backgroundColor:'white',color:'black',border:'1px solid', borderRadius: 25,padding:'4px 25px'}}>Collection</Button>
      </Card.Body>
    </Card>
    
     </Marquee>
      </Tab>
    </Tabs>
      </Container>
       
    </div>
  )
}
export default TabsCarousel