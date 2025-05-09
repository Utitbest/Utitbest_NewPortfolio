import React, {useRef, useState, useEffect} from 'react'
import './Project.css'
import {RealchatMain, Realchatlogin, Realchatrest, RealchatSign, UtitbestNewspaper} from '../../assets'

const Project = () => {
  return (
    <div className='project'>
        <div className="Stitle" style={{marginBottom:'1em'}}>
            <span>Projects</span>
            <h3>My Beautiful Works</h3>
        </div>

        <div className='Projectview'>

          <div className='projectItems'>
            <div className='projectcontent'>
              <h3>RealChat — Real-Time Messaging App</h3>
              <p>
                RealChat is a full-stack real-time messaging application
                designed for fast, secure, and interactive communication.
                Built with a modern tech stack, it features user authentication,
                real-time chat updates, profile management, and audio messaging,
                all within a responsive and user-friendly interface.
              </p>
              <h4>Tech Stack</h4>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Firebase</li>
                <li>Web Socket</li>
              </ul>
              <div className='preview'>
                <a href="https://realchatutitbest.netlify.app/indexsignup" target="_blank">Preview</a>
              </div>
            </div>

            <div className='projectImage'>
              <div>
                <img src={RealchatSign} alt="" />
              </div>
            </div>
          </div>

          <div className='projectItems'>
            <div className='projectcontent'>
              <h3>UtitBest Newspaper — Digital News Platform</h3>
              <p>
               UtitBest Newspaper is a web-based news platform delivering
              current events and weather updates. The site features a clean
              design with intuitive navigation, ensuring users can easily access
              the latest information.
              </p>
              <h4>Tech Stack</h4>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Netlify</li>
              </ul>
              <div className='preview'>
                <a href="https://utitbestnewspaper.netlify.app/" target="_blank">Preview</a>
              </div>
            </div>

            <div className='projectImage'>
              <div>
                <img src={UtitbestNewspaper} alt="" />
              </div>
            </div>
          </div>

                   <div className='projectItems'>
            <div className='projectcontent'>
              <h3>UtitBest Newspaper — Digital News Platform</h3>
              <p>
               UtitBest Newspaper is a web-based news platform delivering
              current events and weather updates. The site features a clean
              design with intuitive navigation, ensuring users can easily access
              the latest information.
              </p>
              <h4>Tech Stack</h4>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Netlify</li>
              </ul>
              <div className='preview'>
                <a href="https://utitbestnewspaper.netlify.app/" target="_blank">Preview</a>
              </div>
            </div>

            <div className='projectImage'>
              <div>
                <img src={UtitbestNewspaper} alt="" />
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Project