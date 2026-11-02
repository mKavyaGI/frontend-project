const plants = [
  ['Monstera Deliciosa', 'Indoor Plants', 24.99, 'A statement tropical plant with distinctive split leaves.'],
  ['Snake Plant', 'Indoor Plants', 18.99, 'A resilient, low-maintenance plant for any room.'],
  ['Peace Lily', 'Indoor Plants', 21.99, 'Elegant white blooms and lush foliage brighten your home.'],
  ['Aloe Vera', 'Succulents', 14.99, 'A sun-loving succulent known for its practical benefits.'],
  ['Echeveria', 'Succulents', 12.99, 'A compact rosette succulent with beautiful pastel tones.'],
  ['Lavender', 'Outdoor Plants', 16.99, 'Fragrant purple blooms that add calm to outdoor spaces.'],
  ['Rosemary', 'Outdoor Plants', 13.99, 'An aromatic herb that thrives in a sunny garden.'],
  ['Boston Fern', 'Outdoor Plants', 19.99, 'A full, graceful fern that loves bright indirect light.'],
].map(([name, category, price, description], index) => ({
  id: index + 1,
  name,
  category,
  price,
  description,
  image: '/images/landing-bg.jpg',
}))

export default plants