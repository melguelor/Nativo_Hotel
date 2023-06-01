import Pessoa from "../Modelo/Pessoa.js"



export default class Pessoa_CTRL
{

  
    gravar(req,resp)
    {
        resp.type("application/json")
        if( req.is("application/json") && req.method === 'POST')
        {
            const info     = req.body,
                  id       = info.id,
                  cpf      = info.cpf,
                  nome     = info.nome,
                  telefone = info.telefone,
                  rua      = info.rua,
                  cep      = info.cep,
                  numero   = info.numero,
                  tipo     = info.tipo
        
        if(cpf && nome && telefone && rua && cep && numero && tipo)
        {
            const pessoa = new Pessoa(id,cpf,nome,telefone,rua,cep,numero,tipo)
            
            pessoa.gravar().then(
                () =>{resp.status(200).json({
                status:true,
                mensagem: "Gravado com sucesso no banco de dados"
                
                })
                }).catch((erro) =>{
                    resp.status(500).json(
                        {
                            status: false,
                            mensagem: erro.message
                        })
            })
        

        }

        }else
        {
            resp.status(400).json(
                {
                    status:false,
                    mensagem:"JSON em formato errado ou falta um dos campos de preenchimento"
                })
        
        
        }
    
    }

    alterar(req,resp)
    {

    }

    deletar(req,resp)
    {
    
    }

    consultarTodos(req,resp)
    {
        resp.type("application/json")
        

        
        if(req.method === "GET" )
        {
         
                const pessoa = new Pessoa()

               pessoa.consultarTodos('').then((pessoa)=>
                {
                    resp.status(200).json(pessoa)})
                    .catch((erro)=>{
                        resp.status(500).json({
                            status: false,
                            mensagem: erro.message
                        })
                    })
        }
        else
        {
            resp.status(400).json(
                {
                    status:false,
                    mensagem:"Método não permitido"
                })
        }
    
    }



}