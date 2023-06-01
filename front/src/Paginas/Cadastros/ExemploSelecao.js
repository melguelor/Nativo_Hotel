import Pagina from "../../Modelo/Pagina"
import CaixaSelecao from "../../Modelo/CaixaSelecao"
import { useEffect, useState } from "react"

 const valor = 
[
    {
        "id":"1",
        "nome": "Victor"
    },
    
    {
        "id":"2",
        "nome": "Leandro"
    },

]

export default function ExemploSelecao()
{

    const [listaHospede,setListaHospede] = useState([
        {
          id: "", 
          cpf:  "",
        nome:  "",
        telefone: "",
        rua:  "",
        cep:  "",
        numero: "",
        tipo: "",
        
          
        }])


    function consultarTodos()
{
  fetch('http://localhost:4000/pessoa', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => setListaHospede(json))
      .catch(err => console.log(err));
 console.log(listaHospede)

 return listaHospede
  
}
   
useEffect(() => {
    consultarTodos()
        console.log(listaHospede)

}, [])


    return(      
       
        <Pagina>
            <CaixaSelecao fonte={listaHospede}
                          campoExibir={'nome'}
                          chave="id"/>
        </Pagina>
        
    )



}