import React from 'react'
import './MyWork.css'
import themepattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='MyWork'>
        <div className="mywork-title">
            <h1>My Works</h1>
            <img src={themepattern} alt="themepattern" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) =>{
                return < img key={index} src={work.w_img} />
            })}
        </div>
        <div className="show-more" onClick={"https://github.com/NKBharath"}>
            <a href="https://github.com/NKBharath" target="_blank" rel="noopener noreferrer">
                <p>Show More</p>
                <img src={arrow} alt="Arrow Icon" />
            </a>
        </div>

    </div>
  )
}

export default MyWork