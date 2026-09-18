import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'
import './AwardsRecognition.css'

const AwardsRecognition = () => {
  const awards = [
    {
      name: 'Great Place To Work Certified',
      image: '/image.png',
      alt: 'Great Place To Work Certified'
    },
    {
      name: 'Iconic Family Cruise Experience 2025',
      image: '/image copy.png',
      alt: 'Iconic Family Cruise Experience 2025'
    },
    {
      name: 'Iconic Choice Wedding & Corporate Events 2025',
      image: '/image copy 2.png',
      alt: 'Iconic Choice Wedding & Corporate Events 2025'
    },
    {
      name: 'High Sea and Coastal Cruises of the Year 2025',
      image: '/image copy 3.png',
      alt: 'High Sea and Coastal Cruises of the Year 2025'
    },
    {
      name: 'Best Cruise and Expedition 2023',
      image: '/image copy 4.png',
      alt: 'Best Cruise and Expedition 2023'
    },
    {
      name: 'Maritime Excellence Achievers 2023',
      image: '/image copy 5.png',
      alt: 'Maritime Excellence Achievers 2023'
    },
    {
      name: 'BLM Excellence Awards 2023',
      image: '/blm-excellence-awards-2023.png',
      alt: 'BLM Excellence Awards 2023'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/company/cordeliacruises',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cordeliacruises/?hl=en',
      icon: Instagram
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/cordeliacruises',
      icon: Facebook
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCIGZzyqWsbCH1-VNFsXrY9g',
      icon: Youtube
    }
  ]

  return (
    <section className="awards-recognition">
      <div className="container">
        {/* Awards Section */}
        <motion.div 
          className="awards-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="awards-grid">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="award-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <img 
                  src={award.image} 
                  alt={award.alt}
                  className="award-logo"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="awards-divider"></div>

        {/* Social Media Section */}
        <motion.div 
          className="social-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardsRecognition
