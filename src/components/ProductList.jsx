import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

// The complete catalogue is kept here so the product listing is self-contained.
const plantsArray = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Indoor Plants', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500', description: 'Beautiful tropical plant with split green leaves.' },
  { id: 2, name: 'Snake Plant', category: 'Indoor Plants', price: 18.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b0a?w=500', description: 'Low-maintenance plant perfect for indoor spaces.' },
  { id: 3, name: 'Peace Lily', category: 'Indoor Plants', price: 21.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500', description: 'Elegant plant with beautiful white flowers.' },
  { id: 4, name: 'Areca Palm', category: 'Indoor Plants', price: 29.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500', description: 'A graceful tropical palm for your home.' },
  { id: 5, name: 'Rubber Plant', category: 'Indoor Plants', price: 26.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360af8e4?w=500', description: 'Glossy foliage that adds style to any room.' },
  { id: 6, name: 'ZZ Plant', category: 'Indoor Plants', price: 19.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500', description: 'Hardy indoor plant with attractive green leaves.' },
  { id: 7, name: 'Aloe Vera', category: 'Succulents', price: 14.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360af8e4?w=500', description: 'Popular succulent with thick fleshy leaves.' },
  { id: 8, name: 'Echeveria', category: 'Succulents', price: 12.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500', description: 'Beautiful rosette-shaped succulent.' },
  { id: 9, name: 'Jade Plant', category: 'Succulents', price: 16.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500', description: 'A charming succulent with rounded green leaves.' },
  { id: 10, name: 'Haworthia', category: 'Succulents', price: 11.99, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500', description: 'Compact succulent with distinctive striped leaves.' },
  { id: 11, name: 'String of Pearls', category: 'Succulents', price: 17.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500', description: 'Trailing succulent with pearl-like leaves.' },
  { id: 12, name: 'Cactus', category: 'Succulents', price: 10.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500', description: 'A decorative desert plant requiring little water.' },
  { id: 13, name: 'Lavender', category: 'Outdoor Plants', price: 16.99, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500', description: 'Fragrant purple flowers for your garden.' },
  { id: 14, name: 'Rosemary', category: 'Outdoor Plants', price: 13.99, image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=500', description: 'Aromatic herb perfect for sunny gardens.' },
  { id: 15, name: 'Hibiscus', category: 'Outdoor Plants', price: 22.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500', description: 'Colorful flowering plant for outdoor spaces.' },
  { id: 16, name: 'Bougainvillea', category: 'Outdoor Plants', price: 25.99, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500', description: 'Vibrant flowering plant for garden decoration.' },
  { id: 17, name: 'Boston Fern', category: 'Outdoor Plants', price: 19.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360af8e4?w=500', description: 'Lush fern with beautiful arching green fronds.' },
  { id: 18, name: 'Marigold', category: 'Outdoor Plants', price: 9.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500', description: 'Bright flowering plant that adds color to gardens.' },
]

export function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="navbar">
      <Link to="/" className="brand">Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  )
}

function ProductList() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const categories = [...new Set(plantsArray.map((plant) => plant.category))]

  return (
    <>
      <Navbar />
      <main className="catalog">
        <div className="catalog-heading">
          <p className="eyebrow">Bring Nature Home</p>
          <h1>Our Plant Collection</h1>
          <p>Discover beautiful plants and bring freshness and happiness into your home.</p>
        </div>
        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {plantsArray.filter((plant) => plant.category === category).map((plant) => {
                const isAdded = items.some((item) => item.id === plant.id)
                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      className="product-image"
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
                        <button type="button" disabled={isAdded} onClick={() => dispatch(addToCart(plant))}>
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
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
    </>
  )
}

export default ProductList
