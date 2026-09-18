import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DirectBookingBenefits from './components/DirectBookingBenefits'
import CruiseExperience from './components/CruiseExperience'
import Destinations from './components/Destinations'
import CruiseOptions from './components/CruiseOptions'
import CruiseItineraries from './components/CruiseItineraries'
import FinalCTA from './components/FinalCTA'
import AwardsRecognition from './components/AwardsRecognition'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import OfferModal from './components/OfferModal'

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Expose modal open function globally for all CTAs
  useEffect(() => {
    window.openOfferModal = () => setIsOfferModalOpen(true)
    return () => {
      delete window.openOfferModal
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <DirectBookingBenefits />
      <Destinations />
      <CruiseOptions />
      <CruiseItineraries />
      <FinalCTA />
      <AwardsRecognition />
      <Footer />
      {showStickyCTA && <MobileStickyCTA />}
      <OfferModal 
        isOpen={isOfferModalOpen} 
        onClose={() => setIsOfferModalOpen(false)} 
      />
    </div>
  )
}

export default App
