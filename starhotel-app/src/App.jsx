import React from 'react'
import  Hero  from './components/Hero'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Offering from './components/Offering'
import Gallery from './components/Gallery'
import GuestReviews from './components/GuestReviews'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA />
      <Offering />
      <Gallery />
      <GuestReviews />

    </div>
  )
}

export default App
