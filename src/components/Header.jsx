import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container header-container">
        <div className="header-logo">
          <h1 className="logo-text">Cordelia Cruises</h1>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('offers')}
              >
                Cruises
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('destinations')}
              >
                Destinations
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('cruise-experience')}
              >
                Experience
              </button>
            </li>
            <li className="nav-item">
              <a 
                id="login-register"
                href="https://www.cordeliacruises.com/"
                className="nav-link nav-link-external"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login / Register
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            id="header-cta"
            className="btn btn-primary"
            onClick={() => {
              if (window.openOfferModal) {
                window.openOfferModal()
              }
            }}
          >
            Get Cruise Offers
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('offers')}
              >
                Cruises
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('destinations')}
              >
                Destinations
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link"
                onClick={() => scrollToSection('cruise-experience')}
              >
                Experience
              </button>
            </li>
            <li className="mobile-nav-item">
              <a 
                id="login-register"
                href="https://www.cordeliacruises.com/"
                className="mobile-nav-link mobile-nav-link-external"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login / Register
              </a>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="btn btn-primary mobile-cta"
                onClick={() => {
                  if (window.openOfferModal) {
                    window.openOfferModal()
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                Get Cruise Offers
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
