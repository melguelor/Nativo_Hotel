import {Form,Container} from 'react-bootstrap'
import { useState } from 'react';





export default function CaixaSelecao(
    {fonte, campoExibir, funcaoSelecao,chave}
)
{


    const [lista,setLista] = useState(fonte)
           

    console.log(fonte)


    return (
        <Container>
          
            <Form.Group  >
                    <Form.Label>Seleciona o Hospede</Form.Label>
                    <Form.Select className="text-center" 
                    >
                        {
                            lista.map((item)=>{
                                return  < option value={item[chave]}>{item[campoExibir]}</option>
                            })
                        }
                    
                    
                </Form.Select>
               
            </Form.Group>
            
        </Container>




    );





}