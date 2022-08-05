import {
  ProductTitle,
  ProductButtons,
  ProductCard,
  ProductImage,
} from "../components";

const product = {
  id: "1",
  title: "coffe mug - card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          {<ProductCard.Title title={"Cafe"} />}
          {<ProductCard.Buttons />}
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          {<ProductTitle />}
          {<ProductButtons />}
        </ProductCard>
      </div>
    </div>
  );
};