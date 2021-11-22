import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import CustomInput from "../CustomInput";
import DefaultButton from "../DefaultButton";
import { CustomModal, ItemText, ModalHeader, ModalTitle } from "./styles";

let Produtos = JSON.parse(localStorage.getItem("produtos")!);

interface ModalProps {
  showEdit: boolean;
  setShowEdit: (value: boolean) => void;
  product?: any;
}

function Modal({ showEdit, setShowEdit, product }: ModalProps) {
  const [nameEsc, setNameEsc] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editName, setEditName] = useState("");
  const [editProvider, setEditProvider] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setNameEsc(product.Codigo);
    setEditCategory(product.Categoria);
    setEditName(product.Nome);
    setEditProvider(product.Fornecedor);
    setEditValue(product.Valor);
  }, [product]);

  //function Editar produto
  function handleEdit() {
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
    function checkIndex(index: any) {
      return index.Codigo === `${nameEsc}`;
    }
    //chamada da função parar encontrar o index do produto a ser editado
    const ind = Produtos.findIndex(checkIndex);

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

  // Function deletar
  function handleDelete() {
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

  return (
    <CustomModal hidden={showEdit}>
      <ModalHeader>
        <ModalTitle>Editar Produto</ModalTitle>
        <MdClose
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => setShowEdit(true)}
        />
      </ModalHeader>
      <ModalHeader>
        <ItemText>Categoria</ItemText>
        <CustomInput
          value={editCategory || ""}
          onChange={(text) => setEditCategory(text.target.value.toUpperCase())}
        />
      </ModalHeader>
      <ModalHeader>
        <ItemText>Nome</ItemText>
        <CustomInput
          value={editName || ""}
          onChange={(text) => setEditName(text.target.value.toUpperCase())}
        />
      </ModalHeader>
      <ModalHeader>
        <ItemText>Fornecedor</ItemText>
        <CustomInput
          value={editProvider || ""}
          onChange={(text) => setEditProvider(text.target.value.toUpperCase())}
        />
      </ModalHeader>
      <ModalHeader>
        <ItemText>Valor</ItemText>
        <CustomInput
          type="number"
          value={editValue || 0}
          onChange={(text) => setEditValue(text.target.value.toUpperCase())}
        />
      </ModalHeader>
      <ModalHeader>
        <DefaultButton
          buttonColor={"red"}
          title={"Excluir"}
          secondary
          onClick={handleDelete}
        />
        <DefaultButton title={"Salvar"} secondary onClick={handleEdit} />
      </ModalHeader>
    </CustomModal>
  );
}

export default Modal;
