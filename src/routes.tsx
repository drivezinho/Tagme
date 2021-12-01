import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pedidos } from "./components/Pedidos/index";
import { Login } from "./components/Login";
import { Receitas } from "./components/Receitas/index";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
