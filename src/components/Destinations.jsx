import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import './Destinations.css'

const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const destinations = [
    {
      id: 'destination-male-colombo',
      name: 'Malé & Colombo',
      image: '/image copy 6.png',
      href: '#'
    },
    {
      id: 'destination-kochi',
      name: 'Kochi',
      image: '/image copy 8.png',
      href: '#'
    },
    {
      id: 'destination-goa',
      name: 'Goa',
      image: '/image copy 7.png',
      href: '#'
    },
    {
      id: 'destination-lakshadweep',
      name: 'Lakshadweep',
      image: '/image copy 9.png',
      href: '#'
    },
    {
      id: 'destination-southeast-asia',
      name: 'Southeast Asia',
      image: '/image copy 6.png',
      href: '#'
    },
    {
      id: 'destination-sri-lanka',
      name: 'Sri Lanka',
      image: '/image copy 7.png',
      href: '#'
    },
    {
      id: 'destination-vizag',
      name: 'Vizag',
      image: '/image copy 8.png',
      href: '#'
    },
    {
      id: 'destination-puducherry',
      name: 'Puducherry',
      image: '/image copy 9.png',
      href: '#'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Touch/drag handling
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const diff = startX - e.clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const diff = startX - e.touches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-play (optional - can be disabled)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleCards = () => {
    const width = window.innerWidth
    if (width >= 1280) return 4
    if (width >= 1024) return 3
    if (width >= 768) return 2
    return 1
  }

  const [visibleCards, setVisibleCards] = useState(getVisibleCards())

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, destinations.length - visibleCards)
  const clampedIndex = Math.min(currentIndex, maxIndex)

  return (
    <section id="destinations" className="destinations section">
      <div className="container">
        <motion.div 
          className="destinations-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="destinations-eyebrow">Destinations</p>
          <h2 className="destinations-title">Where will You Sail Next?</h2>
          <p className="destinations-subtitle">
            Pristine islands, vibrant cities, and cultural gems — sail into destinations that blend adventure and relaxation.
          </p>
        </motion.div>

        <div className="destinations-carousel-wrapper">
          <button 
            className="carousel-nav carousel-nav-prev"
            onClick={prevSlide}
            aria-label="Previous destination"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            className="destinations-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="destinations-track"
              animate={{
                x: `-${clampedIndex * (100 / visibleCards)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  id={destination.id}
                  className="destination-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => scrollToSection('vacation-search')}
                >
                  <div className="destination-card-image">
                    <img 
                      src={destination.image} 
                      alt={`${destination.name} destination`}
                      loading={index < visibleCards ? 'eager' : 'lazy'}
                    />
                    <div className="destination-card-overlay"></div>
                    <div className="destination-card-arrow">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="destination-card-content">
                    <h3 className="destination-card-name">{destination.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button 
            className="carousel-nav carousel-nav-next"
            onClick={nextSlide}
            aria-label="Next destination"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-pagination">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to destination ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
