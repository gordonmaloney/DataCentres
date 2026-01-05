import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Landing from './pages/landing/Landing'
import ObjectPage from './pages/object/Object'
import EmailMSPs from './pages/email/EmailMSPs'
import About from './pages/about/About'
import './App.scss'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="grid-bg"></div>
        
      <Header />

      <div className="main-scroll-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/object" element={<ObjectPage />} />
          <Route path="/email-msps" element={<EmailMSPs />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
      </div>
    </Router>
  )
}

export default App
