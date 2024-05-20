import { Container,Row } from "react-bootstrap";
import './fonte/addFont.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import CarrinhoConsumo from './Paginas/CarrinhoConsumo'


import Cadastros from "./Paginas/Cadastros/Cadastros";



import Pessoa from "./Paginas/Cadastros/Pessoa";

import AtividadeCamareira from "./Paginas/Cadastros/atividadeCamareira";
import Reserva from './Paginas/Cadastros/Reserva'
import ExemploSelecao from './Paginas/Cadastros/ExemploSelecao'
import Reg_pessoa from "./Paginas/ExibicaoRegistros/reg_pessoa";
import Reg_atividade from './Paginas/ExibicaoRegistros/reg_atividade'
import Reg_reserva from "./Paginas/ExibicaoRegistros/reg_reserva";
import Login from "./Paginas/Login";
import Perfil from "./Paginas/Perfil"




function App() {
  return (
    <Container >


      
      <Row className="mx-auto col-12 fonteItim h4">
        <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home tituloPagina="Home"/>}/>
         
          <Route path="/cadastros" element={<Cadastros tituloPagina="Cadastros"/>} />
          
          <Route path="/pessoa" element={<Pessoa tituloPagina="Pessoa"/>}/>
          <Route path="/atividadecamareira" element={<AtividadeCamareira tituloPagina="Pessoa"/>}/>
          <Route path="/reserva" element={<Reserva tituloPagina="Reserva"/>}/>
          <Route path="/seleciona" element={<ExemploSelecao />} />
          <Route path="/carrinhoconsumo" element={<CarrinhoConsumo  />}  />
          <Route path="/login" element={<Login  />}  />
          <Route path="/perfil" element={<Perfil  />}  />

          </Routes>


      <Routes>
       <Route path="/reg_pessoa" element={<Reg_pessoa tituloPagina="Registros Pessoa"/>} />
       <Route path="/reg_atividade" element={<Reg_atividade tituloPagina="Registros Pessoa"/>} />
       <Route path="/reg_reserva" element={<Reg_reserva tituloPagina="Registros Reservas"/>} />
       
       
      </Routes>

      </BrowserRouter>
     </Row>
      </Container>
  );
}

export default App;
