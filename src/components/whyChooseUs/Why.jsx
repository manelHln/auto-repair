import React from 'react'
import "./why.css"
import {Towing} from "../../assets"
import {HiCheckCircle} from "react-icons/hi"

const Why = () => {
  return (
    <div className='section-container' id='about us'>
        <div className='why'>
            <div className='why-info'>
                <h3 className='title-alt'>Why choose us ?</h3>
                <div className='line'></div>
                <p className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae perferendis voluptas ad expedita magnam aperiam eveniet enim, eligendi non quam labore, repellendus obcaecati sint blanditiis voluptate rerum ab! Voluptatem, sit!</p>
                <div className='why-list'>
                <ul>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                </ul>
                <ul>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                    <li className='paragraph'><HiCheckCircle />Lorem</li>
                </ul>
                </div>
            </div>
            <div className='img-container'>
                <img src={Towing} alt="about" className='section-img' />
            </div>
        </div>
    </div>
  )
}

export default Why