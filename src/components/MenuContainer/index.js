import Products from "../Products";

function MenuContainer({ products, handleClick }) {
  return (
    <>
      {products.map((item) => {
        return (
          <Products products={item} handleClick={handleClick} key={item.id} />
        );
      })}
    </>
  );
}

export default MenuContainer;
