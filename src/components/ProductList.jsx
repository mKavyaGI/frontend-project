import { useDispatch, useSelector } from 'react-redux'
import plants from '../data/plants'
import { addToCart } from '../redux/CartSlice'

function ProductList() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const categories = [...new Set(plants.map((plant) => plant.category))]

  return (
    <main className="catalog">
      <div className="catalog-heading">
        <p className="eyebrow">Bring nature home</p>
        <h1>Our Plants</h1>
        <p>Find the perfect green companion for every corner of your home.</p>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const inCart = items.some((item) => item.id === plant.id)
              return (
                <article className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    onError={(event) => {
                      event.currentTarget.src = '/images/landing-bg.jpg'
                    }}
                  />
                  <div className="product-card-content">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="product-card-footer">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button type="button" disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList