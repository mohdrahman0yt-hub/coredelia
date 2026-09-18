import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Destinations.css'

const Destinations = () => {
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

  const destinations = [
    {
      id: 'destination-goa',
      name: 'GOA',
      description: 'Sun, beaches & vibrant coastal escapes',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'destination-lakshadweep',
      name: 'LAKSHADWEEP',
      description: 'Turquoise waters & island adventures',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'destination-mumbai',
      name: 'MUMBAI',
      description: 'Your journey begins here',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'destination-kochi',
      name: 'KOCHI',
      description: 'A gateway to unforgettable voyages',
      image: 'https://images.unsplash.com/photo-1609766856921-7e5e4ae6b3f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'destination-southeast-asia',
      name: 'SOUTHEAST ASIA',
      description: 'Exotic adventures across stunning destinations',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section id="destinations" className="destinations section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Where Will You Sail Next?</h2>
        </motion.div>

        <div className="grid grid-5">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              id={destination.id}
              className="destination-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="destination-card-image">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  loading="lazy"
                />
                <div className="destination-card-overlay"></div>
              </div>
              <div className="destination-card-content">
                <h3 className="destination-card-name">{destination.name}</h3>
                <p className="destination-card-description">{destination.description}</p>
                <button 
                  className="destination-card-cta"
                  onClick={openOfferModal}
                >
                  Explore Cruises
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
