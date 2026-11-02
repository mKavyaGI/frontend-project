import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AboutUs from './components/AboutUs'
import CartItem from './components/CartItem'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { clearCart } from './redux/CartSlice'
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

function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your cart is empty</h1>
        <p>Choose a plant to start building your indoor garden.</p>
        <button type="button" className="primary-button" onClick={() => navigate('/plants')}>
          Continue Shopping
        </button>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p className="eyebrow">Your selections</p>
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-items">{items.map((item) => <CartItem item={item} key={item.id} />)}</div>
      <aside className="cart-summary">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
        <div className="cart-actions">
          <button type="button" className="secondary-button" onClick={() => navigate('/plants')}>
            Continue Shopping
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              dispatch(clearCart())
              window.alert('Thank you for shopping with Paradise Nursery!')
            }}
          >
            Checkout
          </button>
        </div>
      </aside>
    </main>
  )
}

function AppLayout({ children }) {
  return <><Navbar />{children}</>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<AppLayout><ProductList /></AppLayout>} />
        <Route path="/cart" element={<AppLayout><Cart /></AppLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
