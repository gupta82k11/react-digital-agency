import React from 'react'
import '../../styles/blog.css'

import videoImg from '..//..//images/video.png';
import articleImg from '..//..//images/article.png';
import caseStudy from '..//..//images/case-study.png'


const blogData =[
    {
        imgURL: videoImg,
        title: 'video',
        desc:'To know about work. Wtch some video f.....',
        linkURL: '#'

    },
    {
        imgURL: articleImg,
        title: 'Article',
        desc:'To know about work. Wtch some video f.....',
        linkURL: '#'

    },
    {
        imgURL: caseStudy,
        title: 'Case Study',
        desc:'To know about work. Wtch some video f.....',
        linkURL: '#'

    },
]

const Blog = () => {
  return (
   <section id="blog" className='blog'>
          <div className="container">
            <div className="blog__top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>Lets's have a look from our <span className="highlight">Recent Blog</span></h2>
            </div>
             
             <div className="blog__wrapper">
               {
                blogData.map((item,index) => (
                    <div className="blog__item" key={index}>
                    <h3>{item.title}</h3>
                    <div className="blog__img">
                        <img src={item.imgURL} alt="" />
                    </div>
                    <p className="description blog__desc">
                      {item.desc}
                    </p>
                    <div>
                        <a href={item.linkURL} className="learn__more">
                           <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </div>
                ))
               }
             </div>
          </div>
    </section>
  )
}

export default Blog
