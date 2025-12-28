import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header-container">
      <div className="header-left">
        <a href="https://aprs.scot/" target="_blank" rel="noopener noreferrer">
          <svg className="logo-svg aprs-logo-svg" data-name="aprs-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            <g> 
              <path className="cls-1" d="m272.19,0H28.56C12.82,0,0,12.39,0,27.61v245.54c0,15.22,12.82,27.61,28.56,27.61h243.63c15.76,0,28.57-12.39,28.57-27.61V27.61c0-15.23-12.82-27.61-28.57-27.61ZM28.56,12.55h243.63c8.84,0,16.03,6.76,16.03,15.07v117.61c-14.82-.17-35.55,5.62-51.48,12.13-15.87-15.88-35.09-35.1-44.08-44.08-16.75-16.76-29.49-3.94-29.49-3.94l-32.9,32.82.28.15c7.69,4.03,11.19,4.44,21.13,5.36,10.31.95,18.24,5.12,26.64,9.53,5.7,2.99,11.6,6.09,18.58,8.3,6.82,2.16,12.77,2.35,18.52,2.53.31.01.63.02.94.03-.73.57-1.37,1.13-1.86,1.65-2,2.13-4.12,4.11-6.28,5.96-4.19-.32-8.75-.99-13.74-2.57-7.66-2.43-13.87-5.69-19.88-8.84-8.02-4.2-14.94-7.84-23.67-8.65-16.71-1.54-18.06-2.34-40.57-15.77l-2.38-1.42c-8.17-4.87-13-7.91-16.16-9.9q-5.53-3.49-10.71-5.03l-1.05-.31c-10.15-3.04-33.42-14.28-43.52-23-5.5-4.75-16.16-13.86-24-20.56V27.61c0-8.31,7.19-15.07,16.02-15.07ZM28.56,12.55ZM272.19,288.21H127.53c-13.88-5.76-14.9-13.39,35.58-21.04,122.51-18.56,156.33-33.08,67.37-41.9-110.65-10.98-105.34-14.15-30.22-22.61,0,0-234.92,12.68-142.51,17.09,92.42,4.41,215.06,15.45,172.73,21.5-39.35,5.65-187.02,17.01-189.41,46.96h-12.5c-8.83,0-16.02-6.76-16.02-15.06v-90.4h186.33c-12.96,8.74-25.02,12.93-25.02,12.93h114.37v77.47c0,8.3-7.19,15.06-16.03,15.06Z"></path>
              <g>
                <path className="cls-1" d="m95.44,76.01l-2.53-7.58h-15.24l-2.59,7.58h-8.73l15.6-42.87h6.56l15.66,42.87h-8.73Zm-10-30.23l-5.42,15.6h10.66l-5.24-15.6Z"></path>
                <path className="cls-1" d="m130.61,59.88h-8.25v16.14h-8.37v-42.87h16.62c8.85,0,14.15,6.08,14.15,13.36s-5.3,13.37-14.15,13.37Zm-.42-19.27h-7.83v11.74h7.83c3.8,0,6.2-2.35,6.2-5.84s-2.41-5.9-6.2-5.9Z"></path>
                <path className="cls-1" d="m179.09,76.01l-8.37-17.1h-6.02v17.1h-8.37v-42.87h16.8c8.73,0,13.91,5.96,13.91,13.13,0,6.02-3.67,9.75-7.83,11.26l9.57,18.49h-9.7Zm-6.5-35.41h-7.89v11.32h7.89c3.67,0,6.08-2.35,6.08-5.66s-2.41-5.66-6.08-5.66Z"></path>
                <path className="cls-1" d="m212.04,76.38c-6.51,0-11.44-1.38-15.66-5.66l5.42-5.42c2.71,2.71,6.38,3.61,10.36,3.61,4.94,0,7.59-1.86,7.59-5.3,0-1.51-.42-2.77-1.33-3.62-.84-.78-1.8-1.2-3.79-1.5l-5.18-.72c-3.67-.54-6.38-1.68-8.31-3.56-2.04-2.04-3.07-4.82-3.07-8.43,0-7.65,5.66-13,14.94-13,5.9,0,10.18,1.44,13.85,5l-5.3,5.23c-2.71-2.59-5.96-2.95-8.79-2.95-4.46,0-6.63,2.47-6.63,5.42,0,1.08.36,2.22,1.27,3.07.84.78,2.23,1.44,3.97,1.68l5.06.72c3.91.54,6.38,1.63,8.19,3.31,2.29,2.17,3.31,5.3,3.31,9.09,0,8.31-6.92,13-15.89,13Z"></path> 
              </g> 
            </g> 
          </svg>
        </a>
        <Link to="/" className="header-logo" style={{marginLeft: "10px"}} onClick={closeMenu}>
          Stop Data Centres
          <span>Protecting Scotland's Future</span>
        </Link>
      </div>

      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`header-right ${isMenuOpen ? 'menu-open' : ''}`}>
        <Link to="/object" className="header-link" onClick={closeMenu}>Object to new data centres</Link>
        <Link to="/email-msps" className="header-link" onClick={closeMenu}>Email your MSPs</Link>
        <Link to="/about" className="header-link" onClick={closeMenu}>About the Campaign</Link>
      </div>
    </header>
  )
}
