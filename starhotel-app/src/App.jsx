import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import AccomodationPage from './Pages/AccomodationPage'
import BookingRoom from './Booking/BookingRoom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/rooms' element={<AccomodationPage />} />
        <Route path='/booking/:id' element={<BookingRoom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
