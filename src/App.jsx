import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/Dashboard'
import Workspace from './pages/workspace'
import Layout from './Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/workspace" element={<Workspace />} />
      </Routes>
      </Layout>

    </Router>
  )
}

export default App
