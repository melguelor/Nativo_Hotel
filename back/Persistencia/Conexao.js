import mysql from 'mysql2/promise'


export default function conectar()
{
    if(global.conexao && global.conexao.status != 'disconnected')
        return global.conexao
    else
    {
        const conexao = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'nativo_hotel'
        })

        global.conexao = conexao
        return conexao
    
    }
}
