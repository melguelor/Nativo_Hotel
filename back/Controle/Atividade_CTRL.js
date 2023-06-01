import Atividade from "../Modelo/Atividade.js"

/*
 id, prioridade, tempoMedio
*/

export default class Atividade_CTRL
{
    gravar(req,resp)
    {
        resp.type("application/json")


        if(req.is("application/json") && req.method === "POST" )
        {
            const dados = req.body,
                  id = dados.id,
                  descricao = dados.descricao,
                  prioridade = dados.prioridade,
                  tempoMedio = dados.tempoMedio
                  
                 
                 
                  
            
            if( descricao && prioridade && tempoMedio  )
            {
                const atividade = new Atividade(id, descricao, prioridade, tempoMedio)
                console.log(tempoMedio)
                atividade.gravar().then(
                    () =>{resp.status(200).json({
                    status:true,
                    id:"gerado pelo banco de dados",
                    mensagem: "Atividade gravada com sucesso"
                    
                    })
                    }).catch((erro) =>{
                        resp.status(500).json(
                            {
                                status: false,
                                mensagem: erro.message + 'asasassa'
                            })
                })
            }
            else
            {
                resp.status(400).json(
                    {
                        status: 400,
                        mensagem:" Alguma informação está faltando"
                    
                    
                    })
            
            }
                  

        
        }
        else
        {
            resp.status(400).json({
            status: 400,
            mensagem: "Não é POST ou formato errado"
            })
        
        }
    }

    consultarTodos(req,resp)
    {

        resp.type("application/json")
        

        
        if(req.method === "GET" )
        {
         
                const atividade = new Atividade()

               atividade.consultarTodos('').then((atividade)=>
                {
                    resp.status(200).json(atividade)})
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
                    mensagem:"Método não permitido ou checkin no formato JSON "
                })
        }
    }

    consultarID(req,resp)
    {

        resp.type("application/json")
        const dados = req.body,
        id = dados.id

        
        if(req.method === "GET" )
        { console.log(id)
         
                const atividade = new Atividade()

               atividade.consultarID(id).then((atividade)=>
                {
                    resp.status(200).json(atividade)})
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
                    mensagem:"Método não permitido ou checkin no formato JSON "
                })
        }
    }

    
    alterar(req,resp)
    {
        resp.type("application/json")

        if(req.method === "PUT" && req.is('application/json'))
        {
            const dados = req.body,
                  id = dados.id,
                  descricao = dados.descricao,
                  prioridade = dados.prioridade,
                  tempoMedio = dados.tempoMedio
                  
                  
           
                  if(descricao, prioridade, tempoMedio)
            {
                const atividade = new Atividade(id, descricao, prioridade, tempoMedio)
                atividade.alterar().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Atividade ATUALIZADO com sucesso!"
                    })}).catch((erro)=>{
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
                        mensagem:"Informe adequadamente todos os dados"
                    })
            }

        }
        else
        {
            resp.status(400).json(
                {
                    status:false,
                    mensagem:"Método não permitido ou atividade no formato JSON não fornecido"
                })
        }
    }

    deletar(req,resp)
    {
        resp.type("application/json")

        if(req.method === "DELETE" && req.is('application/json'))
        {
            const dados = req.body,
                  id = dados.id
                 

            if(id)
            { 
                const atividade = new Atividade(id)

                atividade.deletar().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"atividade EXCLUIDO com sucesso!"
                    })}).catch((erro)=>{
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
                        mensagem:"Informe o id correto"
                    })
            }

        }
        else
        {
            resp.status(400).json(
                {
                    status:false,
                    mensagem:"Método não permitido ou checkin no formato JSSSSSON não fornecido"
                })
        }
    }

   consultarID(req, resp) {
        resp.type("application/json");
    
        const dados = req.body;
        const { id } = dados;
    
        if (req.method === "GET") {
            console.log(id);
    
            const reserva = new Reserva();
    
            reserva.consultarID(id)
                .then((reservaEncontrada) => {
                    resp.status(200).json(reservaEncontrada);
                })
                .catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
        } else {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou requisição no formato JSON"
            });
        }
    }
    

}