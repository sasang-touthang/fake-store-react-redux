import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 200px;
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
  padding: 5px;
  width: 200px;
  height: 25%;
  font-size: 12px;
  overflow: hidden;
`;

const Product = ({ id, title, price, description, image }) => {
  return (
    <ProductContainer>
      <ImageContainer src={image} />
      <TextContainer className="textContainer">
        <h3>Title: {title}</h3>
        <h3>Price: Rs.{price}</h3>
      </TextContainer>
    </ProductContainer>
  );
};

export default Product;
