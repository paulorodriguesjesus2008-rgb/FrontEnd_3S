import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home/home'
import Perfil from './components/perfil/perfil'
import Header from './components/header/header'
import Produto from './components/produto/produto'
import CadastrarProduto from './components/cadastrarProduto/cadastrarProduto'
import ListarProduto from './components/listarProduto/listarProduto'
import { useState } from 'react'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/produto' element={<Produto />} />
      <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
      <Route path='/listar-produto' element={<ListarProduto />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;