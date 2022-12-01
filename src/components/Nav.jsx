import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'

const Nav = () => {
      const [toggleMenu, setToggleMenu] = useState(false)
      const handleLogOut = () =>{
            console.log("Meow Meow")
      }
      return (
            <nav>
                  <div className='app_nav_logo-container'>
                        SOME LOGO
                  </div>
                  <div className='app_nav_links-container'>
                        <Link to="/" >GAMES</Link>
                        <Link to="/" >CHATS</Link>
                        <Link to="/" >PROFILE</Link>
                        <AiOutlineLogout 
                              size={28} 
                              color={''} 
                              onClick={handleLogOut} 
                              className="app_logout-btn"
                        />
                  </div>
                  <div className='app_nav_links-hamburger' >
                        <RxHamburgerMenu fontSize={27} onClick={()=>{setToggleMenu(true)}} />
                        {toggleMenu && (
                  <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdClose fontSize={27} className="overlay__closed" onClick={() => setToggleMenu(false)}/>
                        <ul className='app__navbar-smallscreen_links'>
                        <Link to="/" >GAMES</Link>    
                        <Link to="/" >CHATS</Link>   
                        <Link to="/" >PROFILE</Link>               
                        <Link onClick={handleLogOut} >LOGOUT</Link>
                        </ul>
                  </div>
                  )}
                  </div>
            </nav>
      )
}

export default Nav