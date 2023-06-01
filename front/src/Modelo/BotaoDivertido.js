import { useState } from 'react';
import {Button} from 'react-bootstrap';



export default function(props)
{

    /*
    Quero fazer o botão correr do mouse
    pelo quee sei é junção de css que vai para o lado suavemente e 
    com bootstrap e aparece uma mensagem
    ser\ mando pelo props
    1 - validação de certo ou errado
    */

    let validado = props.validado

    if(validado)
    {// segue normal
    
    }
    else
    {//aqui terá toda a logica do botão fugindo seja css ou bootstrap
        //sera modelo de todo botão
    
    
    }


    let pega  = document.getElementById("pega")
   let [cl,setCl] = useState('col-3')

  function divertir(e)
  {
    setCl('col-1')
    
    
  }



    return(
        
        <Button className={cl} onMouseOver={(e)=> {divertir(e)}}  id="pega">{props.titulo}</Button>
        
        
        )


}