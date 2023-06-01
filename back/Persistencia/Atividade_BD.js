import Atividade from "../Modelo/Atividade.js";
import conectar from "./Conexao.js";



export default class Atividade_BD
{




    async gravar(atividade)
    {
        if(atividade instanceof(Atividade))
        {
            const conexao = await conectar()
            const sql = "insert into atividade(id,descricao, prioridade, tempoMedio)\
                               values(?,?,?,?)"
            const valores = [atividade.id,atividade.descricao,atividade.prioridade,atividade.tempoMedio]
            await conexao.query(sql,valores)
        
        }

    
    }

    async alterar(atividade)
    {
        if(atividade instanceof(Atividade))
        {
            const conexao = await conectar(),
            sql = "update atividade set descricao=?, prioridade=?, tempoMedio=?\
                    where id=?",
            valores = [atividade.descricao,atividade.prioridade,atividade.tempoMedio,atividade.id]
            await conexao.query(sql,valores)
        
        }

    }

    async deletar(atividade)
    { 
        if(atividade instanceof(Atividade))
        {
            const conexao = await conectar(),
          sql = "delete from atividade where id = ?"
           //valor = [atividade.id]

           await conexao.query(sql,atividade.id)
        }
    
    }


    async consultarTodos(atividade)
    {
        if(atividade instanceof Atividade)
        { console.log(atividade)
            const conexao = await conectar(),
          sql = "select * from Atividade",
          valores = [atividade.id,atividade.descricao,atividade.prioridade,atividade.tempoMedio],
          [linhas] = await conexao.query(sql,valores),
          atividadees = []

          for(const linha of linhas)
          {
            const um = new Atividade(linha['id'],linha['descricao'],linha['prioridade'],linha['tempoMedio'])

            atividadees.push(um)
         
          }

            
        return atividadees
        }
    
        
    }

    async consultarID(id)
    {

       
        
            const conexao = await conectar(),
          sql = "select * from Atividade where id=?",
          valores = [id],
          [linhas] = await conexao.query(sql,valores),
          atividadees = []
 
          for(const linha of linhas)
          {
            const um = new Atividade(linha['id'],linha['descricao'],linha['prioridade'],linha['tempoMedio'])

            atividadees.push(um)
         
          

            
        return atividadees
        }

    
    }



}