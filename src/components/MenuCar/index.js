import CurrentCart from "../CurrentCart";

function MenuCar({ currentSale }) {
  return (
    <>
      {currentSale.map((item) => {
        return <CurrentCart currentSale={item} key={item.id} />;
      })}
    </>
  );
}

export default MenuCar;
