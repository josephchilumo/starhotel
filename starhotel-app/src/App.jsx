import React from 'react'
import  Hero  from './components/Hero'
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Offering from './components/Offering'
import Gallery from './components/Gallery'
import GuestReviews from './components/GuestReviews'
import RoomReview from './components/RoomReview'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA />
      <Offering />
      <Gallery />
      <GuestReviews />
      <RoomReview />
      <NewsLetter/>
      <Footer />

    </div>
  )
}

export default App
