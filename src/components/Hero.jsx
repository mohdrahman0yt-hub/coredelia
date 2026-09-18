import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, ChevronDown, Search } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const videoRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [filters, setFilters] = useState({
    destination: '',
    port: '',
    month: '',
    nights: ''
  })

  const destinations = ['Mumbai', 'Goa', 'Kochi', 'Lakshadweep', 'Maldives', 'Chennai']
  const ports = ['Mumbai', 'Goa', 'Kochi', 'Chennai']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const nights = ['2 Nights', '3 Nights', '4 Nights', '5 Nights', '7 Nights']

  useEffect(() => {
    // Fallback to ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openOfferModal = () => {
    if (window.openOfferModal) {
      window.openOfferModal()
    }
  }

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  const selectFilter = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
    setOpenDropdown(null)
  }

  const handleSearch = () => {
    console.log('Search filters:', filters)
    // Navigate to search results or filter the cruise options
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.search-filter-field')) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  return (
    <section className="hero">
      <div className="hero-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="/vedio1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        </motion.div>
      </div>

      <div id="vacation-search" className="hero-search-card-wrapper">
        <div className="container">
          <div className="hero-search-card">
            <div className="search-filters-grid">
              <div className="search-filter-field">
                <label className="filter-label">Select Destination</label>
                <button
                  className="filter-button"
                  onClick={() => toggleDropdown('destination')}
                >
                  <span>{filters.destination || 'Where to?'}</span>
                  <ChevronDown size={18} className={`chevron ${openDropdown === 'destination' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'destination' && (
                  <div className="dropdown-menu">
                    {destinations.map(dest => (
                      <div
                        key={dest}
                        className="dropdown-item"
                        onClick={() => selectFilter('destination', dest)}
                      >
                        {dest}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="field-divider"></div>

              <div className="search-filter-field">
                <label className="filter-label">Select Ports</label>
                <button
                  className="filter-button"
                  onClick={() => toggleDropdown('port')}
                >
                  <span>{filters.port || 'Departure Port?'}</span>
                  <ChevronDown size={18} className={`chevron ${openDropdown === 'port' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'port' && (
                  <div className="dropdown-menu">
                    {ports.map(port => (
                      <div
                        key={port}
                        className="dropdown-item"
                        onClick={() => selectFilter('port', port)}
                      >
                        {port}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="field-divider"></div>

              <div className="search-filter-field">
                <label className="filter-label">Select Months</label>
                <button
                  className="filter-button"
                  onClick={() => toggleDropdown('month')}
                >
                  <span>{filters.month || 'Travel month?'}</span>
                  <ChevronDown size={18} className={`chevron ${openDropdown === 'month' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'month' && (
                  <div className="dropdown-menu">
                    {months.map(month => (
                      <div
                        key={month}
                        className="dropdown-item"
                        onClick={() => selectFilter('month', month)}
                      >
                        {month}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="field-divider"></div>

              <div className="search-filter-field">
                <label className="filter-label">Select Nights</label>
                <button
                  className="filter-button"
                  onClick={() => toggleDropdown('nights')}
                >
                  <span>{filters.nights || 'Nights?'}</span>
                  <ChevronDown size={18} className={`chevron ${openDropdown === 'nights' ? 'open' : ''}`} />
                </button>
                {openDropdown === 'nights' && (
                  <div className="dropdown-menu">
                    {nights.map(night => (
                      <div
                        key={night}
                        className="dropdown-item"
                        onClick={() => selectFilter('nights', night)}
                      >
                        {night}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="search-icon-button" onClick={handleSearch} aria-label="Search">
                <Search size={20} />
                <span className="search-button-text">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
