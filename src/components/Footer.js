import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { ExternalLink } from "react-external-link";

function Footer() {
  return (
    <div className='footer-container'>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/portfolio" className="social-logo">
              <i className='fas fa-home' />
            </Link>
          </div>
          <div className="footer-logo">
            <Link className="social-logo" to='./about'>About</Link>
          </div>
          <div className="footer-logo">
            <Link className="social-logo" to='./projects'>Projects</Link>
          </div>
          <div className="social-icons">
            <ExternalLink 
              className="social-icon-link github"
              href="https://github.com/bateso88"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </ExternalLink>
            <ExternalLink 
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/oliver-bates-89256812a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </ExternalLink>
            <ExternalLink 
              className="social-icon-link instagram"
              href="https://www.instagram.com/baitso88/?hl=en"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </ExternalLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
