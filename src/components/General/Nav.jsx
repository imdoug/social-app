import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../css/Nav.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose, MdNotificationsNone } from 'react-icons/md'
import { BiJoystick, BiChat } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

const Nav = () => {
      const [toggleMenu, setToggleMenu] = useState(false)
      const handleLogOut = () =>{
            console.log("Meow Meow")
      }
      function openNav() {
            setToggleMenu(!toggleMenu)
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginRight = "250px";
          }
          
      function closeNav() {
            setToggleMenu(!toggleMenu)
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginRight= "0";
      }
      return (
            <nav >
                  <div className='app_nav_logo-container'>
                        SOME LOGO
                  </div>
                  <div className='app_nav_links-container'>
                        <Link to="/" >GAMES </Link>
                        <Link to="/chat" >CHATS</Link>
                        <Link to="/profile" >PROFILE</Link>
                        <Link to="/" ><MdNotificationsNone size={28}/></Link>
                        <AiOutlineLogout 
                              size={28} 
                              onClick={handleLogOut} 
                              className="app_logout-btn"
                        />
                  </div>
                  <div id="main">
                        { toggleMenu 
                        ? <></>
                        : <RxHamburgerMenu 
                              fontSize={27} 
                              class="openbtn" onclick={openNav} 
                        />
                        }
                  </div>
                  <div id="mySidebar" class="sidebar">
                        <MdClose  class="closebtn" onclick={closeNav} />
                        <Link to="/" >
                              <BiJoystick/> GAMES
                        </Link>    
                        <Link to="/chat" >
                              <BiChat/>  CHATS
                        </Link>   
                        <Link to="/" >
                              <CgProfile/> PROFILE
                        </Link>               
                        <Link onClick={handleLogOut} >
                              <AiOutlineLogout/> LOGOUT
                              </Link>
                  </div>
            </nav>
      )
}

export default Nav