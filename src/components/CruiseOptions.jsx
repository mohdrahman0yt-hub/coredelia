import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './CruiseOptions.css'

const CruiseOptions = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const options = [
    {
      id: '2-night-weekend',
      duration: '2-Night Weekend Cruise',
      route: 'Mumbai → Goa',
      description: 'Perfect for a quick refreshing break from routine.',
      badge: 'WEEKEND GETAWAY',
      image: '/image copy 7.png',
      cta: 'Explore Cruise'
    },
    {
      id: '2-night-goa',
      duration: '2-Night Goa Cruise',
      route: 'Goa Coastal Experience',
      description: 'Experience the vibrant coastal beauty of Goa.',
      badge: 'GOA',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      cta: 'Explore Cruise'
    },
    {
      id: '3-night-lakshadweep',
      duration: '3-Night Lakshadweep Cruise',
      route: 'Island Adventure',
      description: 'Discover pristine islands and turquoise waters.',
      badge: 'ISLAND ESCAPE',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      cta: 'Explore Cruise'
    }
  ]

  return (
    <section id="offers" className="cruise-options section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">CURATED CRUISE EXPERIENCES</span>
          <h2 className="section-title">Choose Your Perfect Escape</h2>
          <p className="section-subtitle">
            From quick weekend getaways to unforgettable island adventures, discover a cruise experience made for you.
          </p>
        </motion.div>

        <div className="grid grid-3">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              className="cruise-option-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="cruise-card-image-wrapper">
                <img 
                  src={option.image} 
                  alt={option.duration}
                  className="cruise-card-image"
                  loading="lazy"
                />
                <div className="cruise-card-overlay"></div>
                <span className="cruise-card-badge">{option.badge}</span>
              </div>
              
              <div className="cruise-card-content">
                <h3 className="cruise-card-title">{option.duration}</h3>
                <p className="cruise-card-route">{option.route}</p>
                <p className="cruise-card-description">{option.description}</p>
                
                <div className="cruise-card-divider"></div>
                
                <button
                  className="cruise-card-cta"
                  onClick={() => scrollToSection('vacation-search')}
                >
                  {option.cta}
                  <motion.span
                    className="cta-arrow"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CruiseOptions
