import React from 'react'
import '../../styles/teams.css'

import team01 from '../../images/team-01.png';
import team02 from '../../images/team-02.png';
import team03 from '../../images/team-03.png';

const teamMembers = [
    {
        imgURL: team01,
        name:'Abhijeet Tyagi',
        position:'SDE-2'
    },

    {
        imgURL: team02,
        name:'Shivani Gupta',
        position:'Frontend Developer'
    },
    {
        imgURL: team03,
        name:'ABC',
        position:'Web Developer'
    },
    {
        imgURL: team02,
        name:'DEF',
        position:'UI Developer'
    },
]


const Teams = () => {
  return (
   <section className='our__team'>
    <div className="container">
        <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>Meet With <span className="highlight">our team</span></h2>
        </div>

        <div className="team__wrapper">
            {
                teamMembers.map((item,index) =>(
                    <div className="team__item" key={index}>
                             <div className="team__img">
                                <img src={item.imgURL} alt="" />
                             </div>
                            <div className="team__details">
                                <h4>{item.name}</h4>
                                <p className="description">{item.position}</p>
                                <div className="team__member-social">
                                     <span><i class="ri-linkedin-line"></i></span>
                                     <span><i class="ri-twitter-line"></i></span>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default Teams
