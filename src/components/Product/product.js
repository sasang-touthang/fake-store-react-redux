import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  max-width: 200px;
  min-width: 165px;
  height: 300px;
  background-color: #ecf0f1;
`;

const ImageContainer = styled.img`
  width: 95%;
  height: 75%;
  margin-top: 5px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: block;
  padding: 5px;
  max-width: 200px;
  min-width: 165px;
  height: 100px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Product = ({
  addToFavorites,
  removeFromFavorites,
  id,
  title,
  price,
  description,
  image,
  onClickHandler,
  onClickHandlerRemove,
}) => {
  return (
    <ProductContainer>
      <ImageContainer src={image} />
      <TextContainer className="textContainer">
        <h3>Title: {title}</h3>
        <h3>Price: Rs.{price}</h3>
        <button onClick={onClickHandler}>
          {addToFavorites}
          {removeFromFavorites}
        </button>
      </TextContainer>
    </ProductContainer>
  );
};

export default Product;
