import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import AccomodationPage from './Pages/AccomodationPage'
import BookingRoom from './Booking/BookingRoom'
import PaymentPage from './Pages/PaymentPage'
import RoomDetails from './Booking/RoomDetails'
import Events from './Booking/Events'
import Dinning from './Booking/Dinning'
import Facilities from './Booking/Facilities' 
import GalleryPage from './Booking/GalleryPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/rooms' element={<AccomodationPage />} />
        <Route path='/booking/:id' element={<BookingRoom />} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/room/:id' element={<RoomDetails />} />
        <Route path='/events' element={<Events />} />
        <Route path='/dining' element={<Dinning />} />
        <Route path='/facilities' element={<Facilities/>} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
