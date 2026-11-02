import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import './App.css'

function Home() {
  return (
    <>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <h2>Where Green Meets Serenity</h2>
          <p>
            Discover the beauty of nature with our exclusive collection of
            indoor and outdoor plants. Bring freshness, peace, and happiness
            into your home with Paradise Nursery.
          </p>
          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
      <AboutUs />
    </>
  )
}

function PlantsPlaceholder() {
  return (
    <div className="plants-placeholder">
      <h1>Our Plants</h1>
      <p>Our plant collection is coming in the next step.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantsPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
