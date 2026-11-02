import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>${item.price.toFixed(2)} each</p>
      </div>
      <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
        <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      <button type="button" className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </article>
  )
}

export default CartItem