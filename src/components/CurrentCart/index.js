import "./styles.css";

function CurrentCart({ currentSale }) {
  return (
    <>
      {currentSale ? (
        <div className="cardMenu">
          <h1 className="titleSale">{currentSale.name}</h1>
          <p className="typeSale">Categoria - {currentSale.category}</p>
          <p className="priceSale">Preço - {currentSale.price}</p>
        </div>
      ) : null}
    </>
  );
}

export default CurrentCart;
