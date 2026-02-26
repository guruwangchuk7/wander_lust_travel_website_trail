import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DestinationDetail from "./pages/DestinationDetail"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/:id" element={<DestinationDetail />} />
    </Routes>
  </Router>
)

export default App