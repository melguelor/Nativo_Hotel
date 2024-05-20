import Login from "../Modelo/login.js";
import conectar from "./Conexao.js";

export default class Login_BD
{
    
    async gravar(login)
    {
        if (login instanceof Login)
        {   console.log("entrou no gravar do banco" + login.lembrete)
            const conexao = await conectar(),
                  sql = "INSERT INTO login (login, senha, lembrete) VALUES (?, ?, ?)",
                  valores = [login.login, login.senha, login.lembrete];

            await conexao.query(sql, valores);
        }
    }

    async alterar(login)
    {
        if (login instanceof Login)
        {
            const conexao = await conectar(),
                  sql = "UPDATE login SET senha = ?, lembrete = ? WHERE login = ?",
                  valores = [login.senha, login.lembrete, login.login];

            await conexao.query(sql, valores);
        }
    }

    async deletar(login)
    {
        if (login instanceof Login)
        {
            const conexao = await conectar(),
                  sql = "DELETE FROM login WHERE login = ?";

            await conexao.query(sql, [login.login]);
        }
    }

    async consultarTodos()
    {
        const conexao = await conectar(),
              sql = "SELECT * FROM login",
              [linhas] = await conexao.query(sql),
              logins = [];

        for (const linha of linhas)
        {
            const um = new Login(linha['login'], linha['senha'], linha['lembrete']);

            logins.push(um);
        }

        return logins;
    }

    async consultarLogin(login,senha) 
    { 
        const conexao = await conectar(); 
        const sql = "SELECT * FROM login WHERE login = ? and senha = ?";
        const valores = [login,senha];
        const resultado = await conexao.query(sql, valores);
    
        if (resultado.length === 0) {
            throw new Error('Login não encontrado'); 
        }
    
        const linha = resultado[0]; 
    
       
       // const loginEncontrado = new Login(linha['login'], linha['senha'], linha['lembrete']);
       const loginEncontrado = new Login(linha[0].login, linha[0].senha, linha[0].lembrete);
           console.log(linha[0].login)
        return loginEncontrado;
    }
    
}
