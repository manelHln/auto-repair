import React from 'react'
import "./showcase.css"
import CustomButton from '../CustomButton'
import {HiCalendar} from "react-icons/hi"

const Showcase = () => {
  return (
    <div className='section-container gray-bg'>
        <div className='showcase'>
            <h1 className='title-lg showcase-title'>Lorem ipsum dolor sit<br /> <span>amet consect</span></h1>
            <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, in doloribus dolor ratione fugiat dicta consequatur quae, blanditiis.</p>
            <CustomButton text="Reservation" icon={<HiCalendar />} />
        </div>
    </div>
  )
}

export default Showcase