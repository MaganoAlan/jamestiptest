import React, { useState } from "react";

import { Container, Input, Button } from "./styles";

const ProdCard: React.FC = () => {
  const [productCode, setProductCode] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productProvider, setProductProvider] = useState("");
  const [productValue, setPoductValue] = useState("");

  //log para testar os inputs
  console.log({
    productCode,
    productCategory,
    productName,
    productProvider,
    productValue,
  });
  // Exclamação após a chamada do localStorage para determinar a variavel como confiavel
  let Codigos: any = JSON.parse(localStorage.getItem("produtos")!) || [];

  function HandleClick() {
    const Produto = {
      Codigo: productCode,
      Categoria: productCategory,
      Nome: productName,
      Fornecedor: productProvider,
      Valor: productValue,
    };

    Codigos.push(Produto);
    localStorage.setItem("produtos", JSON.stringify(Codigos));
    window.location.reload();
  }

  return (
    <Container>
      <p>
        <strong>Dados do produto</strong>
      </p>
      Código do produto:
      <Input
        value={productCode}
        onChange={(n) => setProductCode(n.target.value)}
      />
      Categoria do produto:
      <Input
        value={productCategory}
        onChange={(text) => setProductCategory(text.target.value.toUpperCase())}
        type="text"
      />
      Nome do produto:
      <Input
        value={productName}
        onChange={(text) => setProductName(text.target.value.toUpperCase())}
        type="text"
      />
      Nome do Fornecedor:
      <Input
        value={productProvider}
        onChange={(text) => setProductProvider(text.target.value.toUpperCase())}
        type="text"
      />
      Valor do produto:
      <Input
        value={productValue}
        onChange={(n) => setPoductValue(n.target.value)}
      />
      <Button type="button" onClick={HandleClick}>
        CADASTRAR
      </Button>
    </Container>
  );
};

export default ProdCard;
