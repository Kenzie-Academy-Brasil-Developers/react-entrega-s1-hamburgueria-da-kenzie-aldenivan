import "./styles.css";

function FilterProducts({ productInput, setProductInput, showResults }) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setProductInput(event.target.value)}
      />
      <button onClick={() => showResults(productInput)} className="search">
        Pesquisar
      </button>
    </div>
  );
}

export default FilterProducts;
