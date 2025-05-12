import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='Intro'>
            <h5>Hi &nbsp;
                <span className='wave-emoji'>👋</span>,&nbsp;
                I'm
            </h5>
            <h2>
                <span style={{fontSize: '1em'}}>Utitofon Edem</span><br/>
                <span className='issue'>Akpan</span>
            </h2>
            <div className='skillmaster'>
                I'm here to help bring your digital ideas to life —
                from sleek user interfaces to full project execution.
                I specialize in building clean, responsive, and scalable solutions.
                Whether it's front-end, back-end, or full-stack functionality,
                you can count on me to turn vision into reality.
                I'm passionate about problem-solving and clean code.
                Let’s collaborate and build something impactful —
                your next great project starts here.
            </div>
            <div className='IconMaster'>
                <a href="https://github.com/Utitbest" target="_blank" rel="noopener noreferrer">
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

                <a href="https://wa.me/2348063308044" target="_blank" rel="noopener noreferrer">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.001 2.001a13.999 13.999 0 00-12.11 20.66l-1.63 6.01 6.18-1.62A13.999 13.999 0 1016 2zm7.87 19.07c-.34.96-1.97 1.78-2.72 1.84-.7.06-1.58.09-2.55-.16-.59-.14-1.34-.44-2.3-.92-4.02-2.01-6.63-5.79-6.83-6.07-.2-.29-1.63-2.17-1.63-4.14 0-1.97 1.03-2.94 1.39-3.32.34-.38.75-.48 1.01-.48.24 0 .5.01.72.01.23 0 .54-.09.84.64.34.83 1.08 2.86 1.18 3.07.1.2.17.44.03.72s-.2.44-.39.67c-.2.23-.42.51-.6.68-.2.2-.41.42-.18.83.23.41 1.03 1.7 2.21 2.76 1.52 1.35 2.8 1.77 3.22 1.97.42.2.67.17.91-.1.24-.28 1.04-1.21 1.32-1.63.28-.42.55-.35.91-.2.37.14 2.33 1.1 2.73 1.3.4.2.67.3.77.47.1.17.1 1.01-.24 1.97z"/>
                    </svg>
                </a>

                <a href="https://twitter.com/@utitbest" target="_blank" rel="noopener noreferrer">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 
                                0 002.163-2.723c-.951.555-2.005.959-3.127 
                                1.184a4.92 4.92 0 00-8.384 4.482A13.978 13.978 
                                0 011.671 3.149a4.822 4.822 0 001.523 6.573 
                                4.903 4.903 0 01-2.229-.616c-.054 2.281 
                                1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 
                                4.937 4.937 0 004.604 3.417A9.867 9.867 0 010 
                                19.54a13.94 13.94 0 007.548 2.209c9.142 0 
                                14.307-7.721 13.995-14.646a9.935 9.935 0 
                                002.411-2.534z"/>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/utitbest/" target="_blank" rel="noopener noreferrer">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452H17.2v-5.569c0-1.328-.026-3.036-1.849-3.036-1.851 0-2.135 
                                1.445-2.135 2.939v5.666H9.075V9h3.112v1.561h.045c.434-.824 
                                1.494-1.691 3.073-1.691 3.287 0 3.89 2.164 3.89 
                                4.977v6.605zM5.337 7.433a1.81 1.81 0 110-3.621 
                                1.81 1.81 0 010 3.621zM6.813 20.452H3.861V9h2.952v11.452zM22.225 
                                0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 
                                24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 
                                .774 23.2 0 22.225 0z"/>
                    </svg>
                </a>

                <a href="https://facebook.com/utitbest.akpan" className="icon facebook" target="_blank" rel="noopener noreferrer">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.333C0 23.4.597 24 
                                1.325 24H12.82v-9.294H9.692V11.41h3.128V8.735c0-3.1 
                                1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 
                                0-1.796.716-1.796 1.765v2.313h3.59l-.467 3.296h-3.123V24h6.116C23.403 
                                24 24 23.4 24 22.667V1.333C24 .6 23.403 0 22.675 0z"/>
                    </svg>
                </a>

            </div>

             <div className='resume-contactme'>
                 <a href='mailto:utitbesta@gmail.com' className='contact'>Contact Me</a>

                <a href='./UTITOFON RESUME(CV).pdf' download={true} className='resumes'>Resume</a>
            </div>

        </div>
        <div className='imageContain'><div></div></div>

       
    </div>
  )
}

export default Home