import React, {useRef, useState, useEffect} from 'react'
import './Project.css'
import {RealchatMain, Realchatlogin, Realchatrest, RealchatSign, UtitbestNewspaper,Todolist} from '../../assets'

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
              <h3>Utitbest Todo List — Task Management Application</h3>
              <p>
               Utitbest Todo List is a web-based application designed
              to help users manage their daily tasks efficiently. It features a user-friendly
               interface with a progress bar to track task completion.
              </p>
              <h4>Tech Stack</h4>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Netlify</li>
              </ul>
              <div className='preview'>
                <a href="https://utitbesttasksystem.netlify.app/" target="_blank">Preview</a>
              </div>
            </div>

            <div className='projectImage'>
              <div>
                <img src={Todolist} alt="" />
              </div>
            </div>
          </div>

        </div>
          <div className='formore'>
            <a  href="https://github.com/Utitbest" target="_blank"  rel="noopener noreferrer">
                <p>Explore my Git for more</p>
                <svg height="30" width="30" viewBox="0 0 16 16" fill="#181717" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 
                                7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49
                                -2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                                -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 
                                1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
                                -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2
                                -.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32
                                -.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 
                                2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 
                                2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
                                1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
                                8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
          </div>
    </div>
  )
}

export default Project
