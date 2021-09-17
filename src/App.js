import "./App.css";
import { useEffect, useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Products from "./components/Products";
import FilterProducts from "./components/FilterProducts";
import MenuCar from "./components/MenuCar";
import CurrentCart from "./components/CurrentCart";

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
    setFilteredProducts(
      products.filter(
        (item) =>
          item.name === productInput ||
          item.category === productInput ||
          item.price === Number(productInput)
      )
    );
  }

  useEffect(() => {
    if (currentSale.length > 0) {
      setCartTotal(currentSale.reduce((acc, { price }) => acc + price, 0));
    }
  }, [currentSale]);

  function handleClick(productId) {
    if (currentSale.includes(currentSale.id === productId)) {
      console.log("tem");
    }
    let request = products.find((item) => item.id === productId);
    {
      !currentSale.includes(request) &&
        setCurrentSale([...currentSale, request]);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="filter">
          <FilterProducts
            productInput={productInput}
            setProductInput={setProductInput}
            showResults={showResults}
          />
        </div>
        <div className="menu">
          {filteredProducts.length < 1 ? (
            <MenuContainer
              products={products}
              currentSale={currentSale}
              handleClick={handleClick}
            />
          ) : (
            <MenuContainer
              products={filteredProducts}
              handleClick={handleClick}
            />
          )}
          <Products />
        </div>
        <h3 className="total">Subtotal - {cartTotal.toFixed(2)} R$</h3>
        <div className="car">
          <MenuCar currentSale={currentSale} />
          <CurrentCart />
        </div>
      </div>
    </div>
  );
}

export default App;
