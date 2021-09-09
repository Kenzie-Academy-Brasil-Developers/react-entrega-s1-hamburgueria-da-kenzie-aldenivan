import "./styles.css";

function FilterProducts({ productInput, setProductInput, showResults }) {
  return (
    <>
      <form>
        <input
          type="text"
          onChange={(event) => setProductInput(event.target.value)}
        />
        <button onClick={() => showResults(productInput)}>Pesquisar</button>
      </form>
    </>
  );
}

export default FilterProducts;
