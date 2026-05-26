
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import Header from './components/header/header'
import  { CadastroFrutasPage }  from './pages/cadastrofrutas/cadastrofrutaspage'  
import { ProdutosPage } from './pages/produtos/produtospage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
     <Route element={<HomePage />} path="/" />
    <Route element={<QuemSomosPage />} path="/quemsomos" />
    <Route element={<CadastroFrutasPage />} path="/cadfrutas" />
     <Route element={<ProdutosPage />} path="/produtos" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
