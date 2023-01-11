import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Testseries } from './pages/Testseries'
import { Books } from './pages/Books'
import { Cources } from './pages/Cources'
import { Page } from './pages/Page'
import Footer from './components/Footer'
export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/testseries' element={<Testseries />} />
          <Route exact path='/cources' element={<Cources />} />
          <Route exact path='/books' element={<Books />} />
          <Route exact path='/details/:id' element={<Page />} />
          <Route exact path='/f' element={<Footer />} />
        </Routes>
      </Router>
    </div>
  )
}
