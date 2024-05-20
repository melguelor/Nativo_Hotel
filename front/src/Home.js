import Menu from "./Modelo/Menu"
import Pagina from "./Modelo/Pagina"
import Login from "./Paginas/Login"
import { Button, Form, Modal } from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Home(props)
{
 
        return(<>
            <Pagina>
                
           <Login />

            
            </Pagina>



            </>)
}