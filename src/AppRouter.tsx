import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import Home from './Pages/Home'
import Details from './Pages/Details'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cards/:id" element={<Details />} />
        <Route path="/cards" element={<Home />} />
        <Route path="*" element={<Navigate to="/cards" />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
