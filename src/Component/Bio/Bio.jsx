import React, {useEffect, useRef} from 'react'
import './Bio.css'
import lottie from "lottie-web";
import { utitbest } from '../../assets';

const Bio = () => {

    const container = useRef(null);
  
    useEffect(() => {
        lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./Aboutme.json", 
      });
      return () => lottie.destroy();
    }, []);

  return (
    <div className='bio' name="Bio">   
    <div className="Stitle" style={{marginBottom:'1em'}}>
        <span>Bio</span>
        <h3> About Me in a Nutshell</h3>
    </div>
    
    <div className='aboutme'>
        <div className='decription'>
            <div>
                <span>Hi<div className='welcomeshak'>👋</div>, my name is Utitbest Akpan, and I'm a professional, enthusiastic web developer</span>

                <p className='intromaster'> 
                    with a strong passion for building modern, responsive,
                    and user-friendly websites. I'm a quick learner with a self-driven mindset
                    and a deep interest in exploring new technologies. I enjoy solving real-world
                    problems through code and believe in creating web experiences that are accessible,
                    scalable, and impactful.
                </p>

            </div>
            
            <p>
                I specialize in JavaScript and work extensively with technologies like React, Firebase,
                HTML5, CSS3, Tailwind CSS, Bootstrap, PHP, and SQL. I love working across the full web
                stack and I'm always open to opportunities that align with my skills and passion for continuous
                learning and development.
            </p>

        </div>

        <div className='lottiboy' style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div ref={container} style={{width: '300px', height:'300px'}}></div>
        </div>
    </div>

   
    
    </div>
  )
}

export default Bio