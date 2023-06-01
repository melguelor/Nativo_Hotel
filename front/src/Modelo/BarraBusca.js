import {Form, Container} from 'react-bootstrap'
import { useState,useRef } from 'react';
import './barraBusca.css'





export default function BarraBusca(
    {
        placeholder, dados, campoChave,campoBusca, funcaoSelecao, valor
    }
)
{
    const [termoBusca, setTermoBusca] = useState(valor? valor:""),
              [dadosLista, setDadosLista] = useState(dados),
              [itemSelecionado, setItemSelecionado] = useState(false),
              inputBusca = useRef()


              function filtrarResultado(){
     
                setDadosLista(dados.filter((item) =>{
                 return termoBusca.length > 1 ? item[campoBusca].toLowerCase().includes(termoBusca.toLowerCase()):false
                }))
                
                let componenteResultado = document.querySelector('[data-resultado]') 
               
                if(dadosLista.length > 0)
                {
                 
                  componenteResultado.style.display = 'block'
                }
                else
                componenteResultado.style.display="none"
                 
              }


    return (
        <Container>
             
            <div className='barra p-2 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-search" 
                viewBox="0 0 20 20">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>

                <Form.Control 
                    type="text"
                    placeholder={placeholder}
                    value= {termoBusca}
                    ref={inputBusca}
                    required

                    onChange={e=>{
                        setTermoBusca(e.target.value.toLowerCase())
                        filtrarResultado()
                        if(!itemSelecionado)
                        {
                          e.target.setAttribute('aria-invalid',true)
                          e.target.setCustomValidity('erro')
                        }
                        else
                        {
                          e.target.removeAttribute('aria-invalid')
                          e.target.setCustomValidity('')
                        }
                      }}
                
                
                />

            <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    fill="currentColor" 
                    className="bi bi-bookmark-x-fill" 
                    viewBox="0 0 20 20"
                    onClick={()=>{
                    setTermoBusca('');
                    filtrarResultado();
                    setItemSelecionado(false);
                    funcaoSelecao({});
                    inputBusca.current.setAttribute('aria-invalid',true)
                    inputBusca.current.setCustomValidity('erro')
                    }}>
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"/>
        
            </svg>

            </div>
            <div className="resultado">
            <ul data-resultado>
                {
                 
                    dadosLista.map(item => {
                        return <li key={item[campoChave]}
                        onClick={() =>{
                          setTermoBusca(item[campoBusca]);
                          setItemSelecionado(true);
                          funcaoSelecao(item);
                          inputBusca.current.setCustomValidity("")
                          let componenteResultado = document.querySelector('[data-resultado]')
                          componenteResultado.style.display = 'none'
                        }}>
                          {
                            item[campoChave] + '-' + item[campoBusca]
                          }
                            
                        </li>
                    })

                }
            </ul>
          </div>
            
        </Container>
    )
}