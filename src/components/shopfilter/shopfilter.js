import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import "./shopfilter.css"
const shopfilter = () => {
    return (
        
            <div className='shopproduct-filter'>
                <div className='shopproduct-filter-heading'>
                    <h2>Filters</h2>
                    <a href='#' className='size-btns'>Size guide</a>
                </div>
                <div className='accordian'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Size clothes</Accordion.Header>
                            <Accordion.Body>
                                <div className='filters-btns size-btns'>
                                    <button>xs</button>
                                    <button>s</button>
                                    <button className='active'>m</button>
                                    <button>l</button>
                                    <button>xl</button>
                                    <button>xxl</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Colour</Accordion.Header>
                            <Accordion.Body>





                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Style</Accordion.Header>
                            <Accordion.Body>





                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Lenght</Accordion.Header>
                            <Accordion.Body>
                                <div className='filters-btns lenght-btn'>
                                    <button className='active'>Classic</button>
                                    <button>Oversize</button>
                                    <button>Long</button>
                                    <button>Short</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Colour</Accordion.Header>
                            <Accordion.Body>





                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Fabrics/Materials</Accordion.Header>
                            <Accordion.Body>
                                <div className='filters-btns materials-btns'>
                                    <button>Muslin</button>
                                    <button>Satin</button>
                                    <button>Polyester</button>
                                    <button>Cotton</button>
                                    <button>Glossy</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='filter-btn'>
                    <button className='' type='submit'>
                    Follow this search
                    </button>
                </div>
            </div>
        
    )
}

export default shopfilter;