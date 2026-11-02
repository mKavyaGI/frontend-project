import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import CartItem from './components/CartItem'
import ProductList from './components/ProductList'
import './App.css'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <h2>Where Green Meets Serenity</h2>
          <p>
            Welcome to Paradise Nursery, your destination for beautiful indoor
            and outdoor plants. Explore our collection and bring nature closer
            to your home.
          </p>
          <button type="button" className="get-started-btn" onClick={() => navigate('/plants')}>
            Get Started
          </button>
        </div>
      </div>
      <AboutUs />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
