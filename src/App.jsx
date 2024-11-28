import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
// import Workspace from './pages/Workspace'


function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/workspace" element={<Workspace />} /> */}
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
