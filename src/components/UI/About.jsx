import React from 'react'
import '../../styles/about.css'

import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
          icon:'ri-wifi-line',
          title:'First Working process',
          desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Similique inventore dolor accusamus'
    },
    {
        icon:'ri-team-line',
        title:'Dedicated Team',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique inventore dolor accusamus'
  },
  {
    icon:'ri-customer-service-line',
    title:'24/7 Hours Support',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. . Similique inventore dolor accusamus'
},
]

const About = () => {
  return (
   <section id="about">
      <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
                  <h6 className='subtitle'>Why choose Us</h6>
                  <h2>Specialist in aviding clients on </h2>
                  <h2 className="highlight">financial Challenges</h2>
                  <p className="description about__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores iste, unde, odit facere repellendus soluta accusantium harum porro placeat, exercitationem earum! Fugiat porro incidunt sunt inventore illum veniam explicabo?</p>

                
                <div className='choose_-item-wrapper'>
                    {
                        chooseData.map((item,index) =>(
                            <div className="choose__us-item" key={index}>
                            <span className="choose__us-icon"><i class={item.icon}></i></span>
                            <div>
                                  <h4 className="choose__us-title">{item.title}</h4>
                                  <p className="description">{item.desc}</p>
                            </div>
                         </div>
                        ))
                    }
                </div>
            </div>

            <div className="about__img">
                <img src={aboutImg} alt="" />
            </div>
        </div>
      </div>
   </section>
  )
};

export default About
