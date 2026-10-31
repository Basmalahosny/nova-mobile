function Products({products , onAddToCart}) {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="products">
{products.map((product)=> (
    <div className="product-card" key={products.id}>
        <img src={products.image} alt={products.name}/>
        <h3>{products.name}</h3>
        <p>{products.price}</p>
            <button onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
            </div>
))}
      </div>
    </div>
  )
}
export default Products