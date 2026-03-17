import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import AccomodationPage from './Pages/AccomodationPage'
import BookingRoom from './Booking/BookingRoom'
import PaymentPage from './Pages/PaymentPage'
import RoomDetails from './Booking/RoomDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/rooms' element={<AccomodationPage />} />
        <Route path='/booking/:id' element={<BookingRoom />} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/room/:id' element={<RoomDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
