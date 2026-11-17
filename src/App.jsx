import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";

const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleAddToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h1>Grocery App</h1>
        <DarkModeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode((prev) => !prev)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </header>

      <ProductList category={category} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;