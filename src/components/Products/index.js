import "./styles.css";

function Products({ products, handleClick }) {
  console.log(products);
  return (
    <>
      {products ? (
        <div className="cardMenu">
          <h1 className="title">{products.name}</h1>
          <p className="type">Categoria - {products.category}</p>
          <p className="price">Preço - {products.price}</p>
          <button onClick={() => handleClick(products.id)} className="buy">
            Adicionar
          </button>
        </div>
      ) : undefined}
    </>
  );
}

export default Products;
