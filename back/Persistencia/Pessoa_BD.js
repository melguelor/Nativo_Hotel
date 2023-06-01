import Pessoa from "../Modelo/Pessoa.js";
import conectar from "./Conexao.js";




export default class Pessoa_BD
{




    async gravar(pessoa)
    {
        if(pessoa instanceof(Pessoa))
        { 
            const conexao = await conectar()
            const sql = "insert into pessoa(id,cpf,nome,telefone,rua,cep,numero,tipo)\
                               values(?,?,?,?,?,?,?,?)"
            const valores = [pessoa.id,pessoa.cpf,pessoa.nome,pessoa.telefone,pessoa.rua,pessoa.cep,pessoa.numero,pessoa.tipo]
            await conexao.query(sql,valores)
        
        }

    
    }

    async alterar(pessoa)
    {
        if(pessoa instanceof(Pessoa))
        {
            const conexao = conectar()
            sql = "select * from "
        
        }

    }

    async deletar(pessoa)
    {
        if(pessoa instanceof(Pessoa))
        {
            const conexao = conectar()
            sql = "delete from pessoa where id=?" 
        
        }
    
    }

    async consultarTodos(pessoa)
    {
        if(pessoa instanceof Pessoa)
        {
            const conexao = await conectar(),
          sql = "select * from Pessoa",
          valores = [pessoa.id,pessoa.nome,pessoa.cpf,pessoa.telefone,pessoa.rua,pessoa.cep,pessoa.numero,pessoa.tipo],
          [linhas] = await conexao.query(sql,valores),
          pessoas = []

          for(const linha of linhas)
          {
            const um = new Pessoa(linha['id'],linha['cpf'],linha['nome'],linha['telefone'],linha['rua'],linha['cep'],linha['numero'],linha['tipo'])

            pessoas.push(um)
         
          }

            
        return pessoas
        }
    
        
    }

}