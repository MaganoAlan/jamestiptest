import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Itens from "../pages/Itens";
// vvv Sintaxe da v6 do react-router-dom substitui <Switch> por <Routes> vvv
function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Itens />} path="/" />
        <Route element={<Home />} path="/new" />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
