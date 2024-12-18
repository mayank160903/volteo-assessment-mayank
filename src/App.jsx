import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Marpol from './pages/Marpol'
import Ohs from './pages/Ohs'
import History from './pages/History'
import Insights from './pages/Insights'
import Settings from './pages/Settings'
import Apps from './pages/Apps'
import Workspaces from './pages/Workspaces'
import NotFound from './pages/NotFound'

// Main app.jsx file, containing all routes, handled by react-router-dom

function App() {
  return (
    <Router>
      {/*Routes wrapped by Layout component, to implement Sidebar and Navbar in all the routes */}
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/workspace" element={<Workspaces />} />
        <Route exact path="/marpol" element={<Marpol />} />
        <Route exact path="/ohs" element={<Ohs />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/insights" element={<Insights />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/apps" element={<Apps />} />
        {/* route to handle all the undefined endpoints */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
