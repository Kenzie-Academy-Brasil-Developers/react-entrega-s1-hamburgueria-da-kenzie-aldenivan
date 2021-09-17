import "./styles.css";

function Products({ products, handleClick }) {
  return (
    <>
      {products && (
        <div className="cardMenu">
          <h1 className="titleMenu">{products.name}</h1>
          <p className="typeMenu">Categoria - {products.category}</p>
          <p className="priceMenu">Preço - {products.price}</p>
          <button onClick={() => handleClick(products.id)} className="buyMenu">
            Adicionar
          </button>
        </div>
      )}
    </>
  );
}

export default Products;
