import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Products from "./components/Products";
import FilterProducts from "./components/FilterProducts";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const [productInput, setProductInput] = useState("");

  function showResults(productInput) {
    console.log(productInput);
  }

  function handleClick(productId) {
    console.log("oi");
  }

  return (
    <div className="App">
      <div className="App-header">
        <FilterProducts
          productInput={productInput}
          setProductInput={setProductInput}
          showResults={showResults}
        />
        <div className="menu">
          <MenuContainer products={products} />
          <Products handleClick={handleClick} />
        </div>
        <h3 className="total">Subtotal - {cartTotal} R$</h3>
      </div>
    </div>
  );
}

export default App;
