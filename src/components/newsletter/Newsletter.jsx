import React from 'react'
import "./newsletter.css"
import {HiArrowSmRight} from "react-icons/hi"

const Newsletter = () => {
  return (
    <div className='section-container'>
        <div className='newsletter'>
            <h1 className='title-lg'>Newsletter</h1>
            <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='newsletter-form'>
                <input type="text" placeholder='email' />
                <button><HiArrowSmRight size={30} /></button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter