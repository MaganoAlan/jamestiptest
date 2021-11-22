import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../DefaultButton";

import { Container, Input } from "./styles";

const ProdCard: React.FC = () => {
  const [productCode, setProductCode] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productProvider, setProductProvider] = useState("");
  const [productValue, setPoductValue] = useState("");

  const navigate = useNavigate();

  //log para testar os inputs
  console.log({
    productCode,
    productCategory,
    productName,
    productProvider,
    productValue,
  });
  // Exclamação após a chamada do localStorage para determinar a variavel como confiavel
  //variável Codigos iniciada com o local storage atual ou array vazio
  let Codigos: any = JSON.parse(localStorage.getItem("produtos")!) || [];

  function handleClick() {
    //objeto do porduto a ser salvo
    const Produto = {
      Codigo: productCode,
      Categoria: productCategory,
      Nome: productName,
      Fornecedor: productProvider,
      Valor: productValue,
    };
    //adicionando o novo objeto ao array dos produtos existentes
    Codigos.push(Produto);
    //salvando o array com o novo objeto adicionado à "prdutos"
    localStorage.setItem("produtos", JSON.stringify(Codigos));
    //Retorno visual ao usuário
    window.alert(`Produto cadastrado com sucesso!`);
    navigate("/");
    window.location.reload();
  }

  return (
    <Container>
      <p>
        <strong>Dados do produto</strong>
      </p>
      Código do produto:
      <Input
        type="number"
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
        type="number"
        value={productValue}
        onChange={(n) => setPoductValue(n.target.value)}
      />
      <DefaultButton title={"CADASTRAR"} secondary onClick={handleClick} />
    </Container>
  );
};

export default ProdCard;
