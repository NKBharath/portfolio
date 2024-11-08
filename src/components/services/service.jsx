import React from 'react'
import './service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import service_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Service() {
  return (
    <div id='services' className='service'>
        <div className="service-title">
            <h1>Services</h1>
            <img src={theme_pattern} alt='theme img' />
        </div>
        <div className='services-container'>
            {service_data.map((service,index)=>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Service