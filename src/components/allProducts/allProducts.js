import { useSelector } from "react-redux";
import { selectAllProducts } from "./allProductsSlice";
import Product from "../Product/product";
import styled from "styled-components";

const AllProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AllProducts = () => {
  const allProducts = useSelector(selectAllProducts);

  return (
    <>
      <h1 style={{ "margin-left": "20px" }}>All Products</h1>
      <AllProductsContainer>
        {allProducts.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </AllProductsContainer>
    </>
  );
};

export default AllProducts;
