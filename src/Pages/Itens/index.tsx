import React, { useState } from "react";
import { Link } from "react-router-dom";
//styles da Home para padronização
//Optei por não utilizar o global styles devido ao tamanho da aplicação
import { Card, Cod, Div, Actions, Modal, ModalButton } from "./styles";
import { Container, Header, Content, Footer, Button, H1 } from "../Home/styles";
//import dos ícones do react-icons
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
  const [showEdit, setShowEdit] = useState(true);
  const [showDelete, setShowDelete] = useState(true);
  //states para editar produtos
  //é preciso digitar o código do produto a ser editado
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
    //chamada da função parar encontrar o index
    const ind = Produtos.findIndex(CheckIndex);

    console.log(`esse é o ind ${ind}`);
    //condicional ternário para evitar a exclusão acidental de algum item
    ind === -1
      ? window.alert("Código inexistente")
      : Produtos.splice(`${ind}`, 1);
    //salvando novo array no local storage
    localStorage.setItem("produtos", JSON.stringify(Produtos));

    console.log(Produtos);
    //retorno visual ao usuário
    window.alert(`Produto codigo ${nameEsc} excluído com sucesso!`);

    window.location.reload();
  }
  //function Editar produto
  //é preciso digitar o código do produto a ser editado
  function HandleEdit() {
    //objeto com valores a serem substituidos do objeto selecionado
    //** o item: código não será alterado */
    let Editproduct = {
      Codigo: nameEsc,
      Categoria: editCategory,
      Nome: editName,
      Fornecedor: editProvider,
      Valor: editValue,
    };

    //buscando o código do produto a ser editado
    function CheckIndex(index: any) {
      return index.Codigo === `${nameEsc}`;
    }
    //chamada da função parar encontrar o index do produto a ser editado
    const ind = Produtos.findIndex(CheckIndex);

    console.log(`esse é o ind antes ${ind}`);
    //condicional ternário para evitar a exclusão acidental de algum item (último item
    // no caso do retorno da função checkIndex for nula retornando -1)

    ind === -1
      ? window.alert("Código inexistente")
      : Produtos.splice(`${ind}`, 1, Editproduct);
    //salvando novo array no local storage
    localStorage.setItem("produtos", JSON.stringify(Produtos));
    //log o objeto editado
    console.log(`Produtos após edição${Produtos}`);
    // retorno visual ao usuário
    window.alert(`Produto codigo ${nameEsc} alterado com sucesso!`);
    //atualização da página
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
          <Modal className="delete" hidden={showDelete}>
            <strong>Excluir Produto</strong>
            <br />
            <p>Digite o código do produto a ser excluído</p>
            Código &nbsp;
            <input
              type="number"
              placeholder="Codigo a ser excluído"
              value={nameEsc}
              onChange={(text) => setNameEsc(text.target.value.toUpperCase())}
            />
            <ModalButton onClick={HandleDelete}>Excluir</ModalButton>
          </Modal>
          <MdDelete
            size={25}
            style={{ margin: "1%", cursor: "pointer" }}
            onClick={() => {
              setShowDelete(!showDelete);
            }}
          />
          <FaEdit
            style={{ margin: "1%", cursor: "pointer" }}
            size={20}
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          />
          <Modal className="edit" hidden={showEdit}>
            <strong>Editar Produto</strong> &nbsp;
            <br />
            <br />
            Digite o código do produto a ser editado
            <br />
            <br />
            Código &nbsp;
            <input
              type="number"
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
              type="number"
              value={editValue}
              onChange={(text) => setEditValue(text.target.value.toUpperCase())}
            />
            <br />
            <div>
              <ModalButton onClick={HandleEdit}>Salvar</ModalButton>
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
