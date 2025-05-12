import React, {useRef, useEffect} from 'react'
import { Css, javascript, tailwind, php, boostrapicon, firebase, html, react1 } from '../../assets'
import './Skills.css'
import lottie from "lottie-web";

const Skills = () => {

  const container = useRef(null);
  
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./Animation.json", 
      });
      return () => lottie.destroy();
    }, []);


  return (
    <div className='skills' name="Skill">
      <div className="Stitle">
          <span>Skills</span>
          <h3>My Toolbox</h3>
      </div>

      <div className='skill_container'>
      <div className='skill_icons'>
        
        <p>
            <span className="makeit">Full Stack Developer Who Can’t Sit Still — I Want to Learn Everything</span><br/>
            One day it’s React, the next it’s Rust. I’m the kind of dev
            who builds a full app just to test a new framework.
            I love hopping across the stack, connecting all the
            dots, and turning ideas into working magic. Coffee helps. A lot.
        </p>

        <div className='svgicons'>

          
          <div className='firstbas'>
              <span>
                <div>
                   <img src={html} alt="" />
                   <div className='tool'>Html 5</div>
                </div>

               <div>
                <img src={Css} alt="" />
                <div className='tool'>Css 3</div>
               </div>
              </span>

              <span>
                <div>
                   <img src={tailwind} alt="" />
                   <div className='tool'>Tailwind css</div>
                </div>
                
                <div>
                   <img src={boostrapicon} alt="" />
                   <div className='tool'>Boostrap 5</div>
                </div>
              </span>
          </div>

           <div className='firstbas'>
            <span>
               <div>
                   <img src={react1} alt="" />
                   <div className='tool'>React Js</div>
                </div>

                <div>
                   <img src={javascript} alt="" />
                   <div className='tool'>Javascript</div>
                </div>
            </span>
             
             <span>
                <div>
                   <img src={php} alt="" />
                   <div className='tool'>PHP</div>
                </div>
              
              <div>
                   <img src={firebase} alt="" />
                   <div className='tool'>Firebase</div>
                </div>
             </span>
          </div>

        </div>

        <div>
          <p className='ityo'>
            Design and develop interactive user interfaces for web applications,
             build fast and reliable Progressive 
            Web Apps (PWAs) using React, 
            and integrate third-party services such as Firebase, AWS, and DigitalOcean.
            </p>
        </div>
      </div>
       
       <div className='Forilloti'>
          <div ref={container} style={{width:'300px', height: '300px'}}></div>
       </div>
      </div>

      <div className='proficency'>
        <h3>Proficiency</h3>

        <div className='progress'>
          <div className='frontend'>
            <h4>Front-End <span>94%</span></h4>
            <div className='parentpro'>
              <div></div>
            </div>
          </div>

          <div className='frontend'>
            <h4>Back-End <span>80%</span></h4>
            <div className='parentpro1'>
              <div></div>
            </div>
          </div>

          <div className='frontend'>
            <h4>Programming / Solving<span>87%</span></h4>
            <div className='parentpro2'>
              <div></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills