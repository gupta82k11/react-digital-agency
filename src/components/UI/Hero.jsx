import React from 'react'
import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'


const Hero = ({theme}) => {
  return (
  <section className="hero__section" id="home">
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                    <h2>We are creating perfect</h2>
                    <h2>Digital products to</h2>
                    <h2 className='highlight'>Promote Your Brand</h2>
                </div>
                <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, porro? Ratione consectetur veniam officia rerum quia, suscipit quidem earum ipsum odit. Ut ipsum hic aspernatur exercitationem consectetur doloribus, alias esse?</p>


                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>
                </div>
            </div>

            <div className="hero__img">
                <img src={theme === "light-theme" ? lightImg :  heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>
  </section>
  )
}

export default Hero
