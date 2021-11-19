import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Cod, Div, Actions, Modal } from "./styles";

import { Container, Header, Content, Footer, Button, H1 } from "../Home/styles";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

let Produtos = JSON.parse(localStorage.getItem("produtos")!);
console.log(Produtos);

const Itens: React.FC = () => {
  //state para utilizar no delete
  const [nameEsc, setNameEsc] = useState("");
  //testando state para o delete
  console.log(nameEsc);
  //state para exibir o modal
  const [show, setShow] = useState(true);
  //states para editar produtos
  //const [editCode, setEditCode] = useState('');
  const [editCategory, setEditCategory] = useState("");
  const [editName, setEditName] = useState("");
  const [editProvider, setEditProvider] = useState("");
  const [editValue, setEditValue] = useState("");

  // Function deletar
  function HandleDelete() {
    // função para encontrar o index do produto a ser excluido
    function CheckIndex(index: any) {
      return index.Codigo === `${nameEsc}`;
    }
    //chamada da função parar encontrar o index vvv
    const ind = Produtos.findIndex(CheckIndex);

    console.log(`esse é o ind ${ind}`);
    //condicional ternário para evitar a exclusão acidental de algum item
    ind === -1
      ? window.alert("Código inexistente")
      : Produtos.splice(`${ind}`, 1);
    //salvando novo array no local storage
    localStorage.setItem("produtos", JSON.stringify(Produtos));

    console.log(Produtos);

    window.location.reload();
  }
  //function Editar produto
  function HandleEdit() {
    let Editproduct = {
      Codigo: nameEsc,
      Categoria: editCategory,
      Nome: editName,
      Fornecedor: editProvider,
      Valor: editValue,
    };

    function CheckIndex(index: any) {
      return index.Codigo === `${nameEsc}`;
    }
    //chamada da função parar encontrar o index vvv
    const ind = Produtos.findIndex(CheckIndex);

    console.log(`esse é o ind antes ${ind}`);
    //condicional ternário para evitar a exclusão acidental de algum item
    ind === -1
      ? window.alert("Código inexistente")
      : Produtos.splice(`${ind}`, 1, Editproduct);
    //salvando novo array no local storage
    localStorage.setItem("produtos", JSON.stringify(Produtos));
    console.log(`Produtos após edição${Produtos}`);

    window.alert(`Produto codigo ${nameEsc} alterado com sucesso!`);

    window.location.reload();
  }

  return (
    <Container>
      <Header>
        <H1>Itens Cadastrados</H1>
        <Button>
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            to="/"
          >
            VOLTAR
          </Link>
        </Button>

        <p>
          <strong>Ações</strong>
        </p>
        <Actions>
          <input
            type="text"
            placeholder="Digite o codigo do produto"
            value={nameEsc}
            onChange={(text) => setNameEsc(text.target.value.toUpperCase())}
          />
          <MdDelete
            size={25}
            style={{ margin: "1%", cursor: "pointer" }}
            onClick={HandleDelete}
          />
          <FaEdit
            style={{ margin: "1%", cursor: "pointer" }}
            size={20}
            onClick={() => {
              setShow(!show);
            }}
          />
          <Modal className="edit" hidden={show}>
            <strong>Editar Produto</strong> &nbsp;
            <br />
            <br />
            Digite o código do produto a ser editado
            <br />
            <br />
            Codigo &nbsp;
            <input
              placeholder="Produto a ser editado"
              value={nameEsc}
              onChange={(text) => setNameEsc(text.target.value.toUpperCase())}
            />
            <br />
            Categoria &nbsp;
            <input
              value={editCategory}
              onChange={(text) =>
                setEditCategory(text.target.value.toUpperCase())
              }
            />
            <br />
            Nome &nbsp;
            <input
              value={editName}
              onChange={(text) => setEditName(text.target.value.toUpperCase())}
            />
            <br />
            Fornecedor &nbsp;
            <input
              value={editProvider}
              onChange={(text) =>
                setEditProvider(text.target.value.toUpperCase())
              }
            />
            <br />
            Valor &nbsp;
            <input
              value={editValue}
              onChange={(text) => setEditValue(text.target.value.toUpperCase())}
            />
            <br />
            <div
              onClick={() => {
                setShow(!show);
              }}
            >
              <button onClick={HandleEdit}>Salvar</button>
            </div>
          </Modal>
        </Actions>
      </Header>
      <Content>
        <Div>
          <Cod>
            <p>Código</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Codigo}</Card>)}
          </Cod>
          <Cod>
            <p>Categoria</p>
            {Produtos &&
              Produtos.map((p: any) => (
                <Card key={p.Codigo}>{p.Categoria}</Card>
              ))}
          </Cod>
          <Cod>
            <p>Nome</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Nome}</Card>)}
          </Cod>
          <Cod>
            <p>Fornecedor</p>
            {Produtos &&
              Produtos.map((p: any) => (
                <Card key={p.Codigo}>{p.Fornecedor}</Card>
              ))}
          </Cod>
          <Cod>
            <p>Valor</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Valor}</Card>)}
          </Cod>
        </Div>
      </Content>
      <Footer>Desenvolvido por Alan Magano</Footer>
    </Container>
  );
};

export default Itens;
