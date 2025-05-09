import React, {useEffect, useState} from 'react'
import './Navbar.css'


const Navbar = () => {

  const [navcolor, setCondi] = useState(false)
  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setCondi(true) : setCondi(false)
      })
  },[])

  return (
    <nav className={ `navbar ${navcolor ? 'newColor' : ''}`}>
       <a className="logo" href="/#home"><span>&lt;Utitbest </span><span>Akpan/&gt;</span></a>
        <ul className="nav-links">
            <label htmlFor="switch" className='black-white'></label>

            <li><a href="#home">Home</a></li>
            {/* <li><a href="#education">Education</a></li> */}
            <li><a href="#skills">Skills</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#project">Projects</a></li>
            <li className='contactstyle'><a href="#contact">Contact</a></li>
        </ul>

    </nav>
  )
}

export default Navbar