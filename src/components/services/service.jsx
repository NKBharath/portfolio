import React, { useState } from 'react'
import './service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import service_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Service() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div id='services' className='service'>
      <div className="service-title">
        <h1>Services</h1>
        <img src={theme_pattern} alt='theme img' />
      </div>

      <div className='services-container'>
        {service_data.map((service, index) => (
          <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div
              className="services-readmore"
              onClick={() => setActiveService(service)}
              style={{ cursor: 'pointer' }}
            >
              <p>Read more</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeService && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setActiveService(null)}>
              &times;
            </button>
            <h1>{activeService.s_name}</h1>
            <hr />
            <h3>{activeService.f_desc_sub}</h3>
            <p>{activeService.f_desc_p}</p>
            <div className="service-popup-scroll1-wrapper">
                <div className="service-popup-scroll1">
                    Look into the projects I have worked at (My Work section) for reference.
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Service
