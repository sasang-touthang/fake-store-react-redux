import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/product";
import styled from "styled-components";
import {
  selectFilteredAllProducts
} from "./allProductsSlice";
import { addFavoriteProduct } from "../favoriteProducts/favoriteProductsSlice";
import { removeProduct } from "./allProductsSlice";

const AllProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AllProducts = () => {
  const allProducts = useSelector(selectFilteredAllProducts);
  const dispatch = useDispatch();

  const onAddFavoriteProductHandler = (product) => {
    dispatch(addFavoriteProduct(product));
    dispatch(removeProduct(product));
  };

  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>All Products</h1>
      <AllProductsContainer>
        {allProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            onClickHandler={() => onAddFavoriteProductHandler(product)}
            addToFavorites="Add to Favorites"
          />
        ))}
      </AllProductsContainer>
    </>
  );
};

export default AllProducts;
