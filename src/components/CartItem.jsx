import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem, updateQuantity } from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.items)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const changeQuantity = (item, quantity) => {
    dispatch(updateQuantity({ id: item.id, quantity }))
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <p className="eyebrow">Your Selections</p>
        <h1>Shopping Cart</h1>
      </div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Discover beautiful plants and start building your garden.</p>
          <button type="button" className="primary-button" onClick={() => navigate('/plants')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.src = '/images/landing-bg.jpg'
                  }}
                />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                  <button type="button" onClick={() => changeQuantity(item, item.quantity - 1)} aria-label="Decrease quantity">-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => changeQuantity(item, item.quantity + 1)} aria-label="Increase quantity">+</button>
                </div>
                <strong className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</strong>
                <button type="button" className="remove-button" onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </button>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-total">
              <span>Total Cart Amount:</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <div className="cart-actions">
              <button type="button" className="secondary-button" onClick={() => navigate('/plants')}>
                Continue Shopping
              </button>
              <button type="button" className="primary-button" onClick={() => window.alert('Checkout Coming Soon!')}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default CartItem
