import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1999,
      description: "Portable wireless speaker with clear sound."
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      name: "Running Shoes",
      category: "Footwear",
      price: 2499,
      description: "Comfortable shoes for running and everyday use."
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      name: "Smart Watch",
      category: "Accessories",
      price: 2999,
      description: "Smart watch with useful fitness features."
    },
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      name: "Travel Backpack",
      category: "Bags",
      price: 1499,
      description: "Durable backpack suitable for travel and daily use."
    }
  ];

  return (
    <div className="app">
      <h1>E-Commerce Products</h1>

      <div className="product-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;