import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Itens from "../Pages/Itens";
// vvv Sintaxe da v6 do react-router-dom substitui <Switch> por <Routes> vvv
function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Itens />} path="/Itens" />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
