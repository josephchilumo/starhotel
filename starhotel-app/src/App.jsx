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
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/Dashboard'
import Bookings from './admin/Bookings'
import Payments from './admin/Payments'
import Rooms from './admin/Rooms'
import ProtectedAdminRoute from './admin/ProtectedAdminRoute'
import Login from './auth/Login'
import Register from './auth/Register'

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
        <Route path='/admin' element={<ProtectedAdminRoute><AdminLayout /></ProtectedAdminRoute>}>
          <Route index element={<Dashboard />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='rooms' element={<Rooms />} />
          <Route path='payment' element={<Payments />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
