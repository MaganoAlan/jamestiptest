import React from "react";
import { Category, Code, Container, Name, Row, Value } from "./styles";

interface ItemProps {
  product: any;
  onClick: (value: any) => void;
  setShowEdit: (value: any) => void;
}

function Item({ product, onClick, setShowEdit }: ItemProps) {
  function handleClick() {
    onClick(product);
    setShowEdit(false);
  }

  return (
    <Container onClick={handleClick}>
      <Row>
        <Name>{product.Nome}</Name>
        <Code>#{product.Codigo}</Code>
      </Row>
      <Category>
        {product.Fornecedor} - {product.Categoria}
      </Category>
      <br />
      <Value>R$ {product.Valor}</Value>
    </Container>
  );
}

export default Item;
