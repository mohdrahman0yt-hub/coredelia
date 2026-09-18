import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const videoRef = useRef(null)

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
          <motion.p 
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LUXURY CRUISING FROM INDIA
          </motion.p>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your Dream Holiday, Set Sail.
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Experience unforgettable journeys, breathtaking destinations and world-class experiences aboard Cordelia Cruises.
          </motion.p>

          <motion.div 
            className="hero-trust-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Luxury Accommodation</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">World-Class Dining</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Live Entertainment</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span className="trust-text">Multiple Destinations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
