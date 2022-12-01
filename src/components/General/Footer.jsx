import React from 'react'
import '../../css/Footer.css'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{width: '100%'}}>
      <footer>
        <div className='white-line'></div>
        <div className='app_footer_content'>
          <div className='app_footer_copyright-text'>
            <p>© 2022 all Rights Reserved, Unicorn Labs.</p>
          </div>
          <div className='app_footer_social-icons'>
            <a href="http://" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer