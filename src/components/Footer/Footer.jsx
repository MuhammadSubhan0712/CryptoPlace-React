import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <p>
         CryptoPlace &copy; {newDate().getFullYear()} - All Right Reserved.   
        </p>
    </div>
  )
}

export default Footer;