import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import './Header.scss'

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        {/* Placeholder Icon if simpler */ }
        <Link to="/" className="header-logo">
          Stop Data Centres
          <span>Protecting Scotland's Future</span>
        </Link>
      </div>
      
      <div className="header-center">
        <Link to="/object" className="header-link">Our Work</Link>
        <Link to="/email-msps" className="header-link">Campaigns</Link>
        <Link to="/" className="header-link">About</Link>
        <Link to="/" className="header-link">News/Events</Link>
      </div>

      <div className="header-right">
        <div className="header-utility-links">
          <Link to="/">Resources</Link>
          <Link to="/">Contact</Link>
          <div className="header-search-icon"></div>
        </div>
        <Button 
          variant="contained" 
          className="header-button" 
          component={Link} 
          to="/object"
          startIcon={<span>♥</span>}
        >
          Support the Campaign
        </Button>
      </div>
    </header>
  )
}
