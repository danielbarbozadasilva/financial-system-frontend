import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './views/home'

const Routers = () => {
  return (
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
 
  )
}

export default Routers
