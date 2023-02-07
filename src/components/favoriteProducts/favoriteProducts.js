import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteProducts,
  selectFilteredFavoriteProducts,
} from "./favoriteProductsSlice";
import { removeFavoriteProduct } from "./favoriteProductsSlice";
import { addToAllProducts } from "../allProducts/allProductsSlice";
import Product from "../Product/product";
import styled from "styled-components";

const AllProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FavoriteProducts = () => {
  const favoriteProducts = useSelector(selectFilteredFavoriteProducts);
  const favoriteProducts2 = useSelector(selectFavoriteProducts);
  const dispatch = useDispatch();

  const onRemoveFavoriteProductHandler = (product) => {
    dispatch(removeFavoriteProduct(product));
    dispatch(addToAllProducts(product));
  };

  var title;

  if (favoriteProducts2.length > 0) {
    title = "Favorites";
  } else {
    title = "";
  }
  return (
    <>
      <h2>{title}</h2>
      <AllProductsContainer>
        {favoriteProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            onClickHandler={() => onRemoveFavoriteProductHandler(product)}
            removeFromFavorites="Remove from Favorites"
          />
        ))}
      </AllProductsContainer>
    </>
  );
};

export default FavoriteProducts;
