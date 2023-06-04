import {Form,Container} from 'react-bootstrap'
import { useState } from 'react';





export default function CaixaSelecao(
    {fonte, campoExibir, funcaoSelecao,chave,nomeLabel}
)
{
  
    function handleChange(e)
    {
        const escolhido = e.target.value
        funcaoSelecao (fonte[escolhido-1])
        
               
    }

    return (
        <Container>
          
            <Form.Group  >
                    <Form.Label>{nomeLabel}</Form.Label>
                    <Form.Select className="text-center"  onChange={handleChange} >
                      { 
                          fonte.map((item)=>{
                               
                                //return  < option onClick={()=>{console.log('item')}} value={item[chave]}>{item[campoExibir]}</option>
                               return  <option key={item[campoExibir]} value={item[chave]} >{item[campoExibir]}</option>
                             
                                
                            })

                            
                        }
                    
                    
                </Form.Select>
              
            </Form.Group>
            
        </Container>




    );





}