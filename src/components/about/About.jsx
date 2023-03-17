import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {ImFolderOpen} from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>

            <article className="about__card">
            <ImFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>10+ completed</small>
            </article>
          </div>

          <p>
            Having one year of experience as a web developer can mean different things depending on the person and their work environment. 
            However, in general, it suggests that the developer has a good understanding of web development fundamentals and has likely worked on multiple projects, gaining experience in different areas such as front-end development, back-end development, and database management. 
          </p>

          <a href="#contact" className='btn btn-primary'>Reach Me Here</a>

        </div>
      </div>
    </section>
  )
}

export default About