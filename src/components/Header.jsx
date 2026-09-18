import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
            <li className="nav-item nav-auth">
              <a 
                id="login"
                href="https://www.cordeliacruises.com/"
                className="nav-link nav-link-login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
              <a 
                id="register"
                href="https://www.cordeliacruises.com/"
                className="btn btn-primary nav-link-register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            id="header-cta"
            className="btn btn-primary"
            onClick={() => scrollToSection('vacation-search')}
          >
            Get Cruise Offers
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
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
                <li className="mobile-nav-divider"></li>
                <li className="mobile-nav-item mobile-auth-item">
                  <a 
                    id="mobile-login"
                    href="https://www.cordeliacruises.com/"
                    className="mobile-nav-link mobile-nav-link-login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </li>
                <li className="mobile-nav-item mobile-auth-item">
                  <a 
                    id="mobile-register"
                    href="https://www.cordeliacruises.com/"
                    className="btn btn-primary mobile-nav-link-register"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </li>
                <li className="mobile-nav-item">
                  <button
                    className="btn btn-primary mobile-cta"
                    onClick={() => {
                      scrollToSection('vacation-search')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Get Cruise Offers
                  </button>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
