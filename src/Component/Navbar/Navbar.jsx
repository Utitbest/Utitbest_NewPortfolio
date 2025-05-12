import React, {useEffect, useState, useRef} from 'react'
import './Navbar.css'
import { menuicon } from '../../assets'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [boolenMan, setBoolen] = useState(false);
  const menuRef = useRef(null);
  const [navcolor, setCondi] = useState(false)
  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setCondi(true) : setCondi(false)
      })


  },[])

  const toggleHideSeek = () => {
    setBoolen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setBoolen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={ `navbar ${navcolor ? 'newColor' : ''}`}>
      <div className='navonc'>
            <a className="logo" href="#"><span>&lt;Utitbest </span><span>Akpan/&gt;</span></a>
            <span onClick={toggleHideSeek}>
              <img src={menuicon} alt="" />
            </span>
      </div>

      <nav ref={menuRef} className={`navbarOri ${boolenMan ? 'showself' : ''}`}>
        <a className="logo dsi" href="#"><span>&lt;Utitbest </span><span>Akpan/&gt;</span></a>
        <ul className="nav-links">
            {/* <label htmlFor="switch" className='black-white'></label> */}
            <li><Link to="home" smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link to="Skill" smooth={true} offset={-190} duration={500}>Skills</Link></li>
            <li><Link to="Bio" smooth={true} offset={-190} duration={500}>Bio</Link></li>
            <li><Link to="project" smooth={true} offset={-190} duration={500}>Project</Link></li>
            <li className='contactstyle'><Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar