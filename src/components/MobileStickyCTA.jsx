import React from 'react'
import { motion } from 'framer-motion'
import './MobileStickyCTA.css'

const MobileStickyCTA = () => {
  const openOfferModal = () => {
    if (window.openOfferModal) {
      window.openOfferModal()
    }
  }

  return (
    <motion.div
      className="mobile-sticky-cta"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        id="mobile-sticky-cta"
        className="mobile-sticky-cta-button"
        onClick={openOfferModal}
      >
        Get Cruise Offers
      </button>
    </motion.div>
  )
}

export default MobileStickyCTA
