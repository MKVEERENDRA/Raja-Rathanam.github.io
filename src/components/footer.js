import React from "react"
import { CONFIG } from "./config.js"
import Icon from './icons/icon.js'; // Corrected import statement

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer">
            <a
              href="mailto:mkrveeresh@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://github.com/MKVEERENDRA"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/veerendra-vamshi-821890225/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          
            <a href="https://me-as-a-portfolio.vercel.app/" target="_blank" rel="noreferrer">
              <Icon name="PRG" />
            </a>
          
           
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2004-{new Date().getFullYear()} RAJA RATHANAM. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
