import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { menuicon } from '../../assets'

const Navbar = () => {

  const [navcolor, setCondi] = useState(false)

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setCondi(true) : setCondi(false)
      })
  },[])


  const [boolenMan, setBoolen] = useState(false)

  const toggleHideSeek = ()=>{
    boolenMan ? setBoolen(false) : setBoolen(true)
  }

  return (
    <div className={ `navbar ${navcolor ? 'newColor' : ''}`}>
      <div className='navonc'>
            <a className="logo" href="/#home"><span>&lt;Utitbest </span><span>Akpan/&gt;</span></a>
            <span onClick={toggleHideSeek}>
              <img src={menuicon} alt="" />
            </span>
      </div>

      <nav className={`navbarOri ${boolenMan ? 'showself' : ''}`}>
        <a className="logo dsi" href="/#home"><span>&lt;Utitbest </span><span>Akpan/&gt;</span></a>
        <ul className="nav-links">
            <label htmlFor="switch" className='black-white'></label>

            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#project">Projects</a></li>
            <li className='contactstyle'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar