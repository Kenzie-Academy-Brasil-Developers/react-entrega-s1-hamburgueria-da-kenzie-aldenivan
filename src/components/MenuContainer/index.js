import Products from "../Products";

function MenuContainer({ products }) {
  return (
    <>
      {products.map((item) => {
        return <Products products={item} />;
      })}
    </>
  );
}

export default MenuContainer;
