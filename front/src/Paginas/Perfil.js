

import Pagina from "../Modelo/Pagina";
import PerfilFuncionario from "./PerfilFuncionario";
import {Link, useLocation} from 'react-router-dom'
import { useState,useEffect } from "react"
import {Form,Row,Button,Modal,InputGroup,Col,Card,Table,FormControl} from 'react-bootstrap'
import CaixaSelecao from "../Modelo/CaixaSelecao";



export default function Perfil(props)
{

   const logado = 2

    return(
        <>
        <Pagina coluna="col">
                        {logado === 2 && <PerfilFuncionario />}          

      
        </Pagina>
    
        
        
        </>
        )
}