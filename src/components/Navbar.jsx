import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const count = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="navbar">
      <Link to="/plants" className="brand">Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart <span className="cart-count">{count}</span></Link>
      </nav>
    </header>
  )
}

export default Navbar