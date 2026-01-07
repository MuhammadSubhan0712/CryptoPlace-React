import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <p> 
         CryptoPlace &copy; {new Date().getFullYear()} - All Right Reserved.   
        </p>
    </div>
  )
}

export default Footer;