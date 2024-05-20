import Login from "../Modelo/login.js"

export default class Login_CTRL
{
    gravar(req, resp)
    {
        resp.type("application/json");
        console.log(req.params)
        if (req.is("application/json") && req.method === "POST")
        {
            const dados = req.body,
                  login = dados.login,
                  senha = dados.senha,
                  lembrete = dados.lembrete;
                
            if (login && senha && lembrete)
            {
                const novoLogin = new Login(login, senha, lembrete);

                novoLogin.gravar().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Login criado com sucesso"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
            }
            else
            {
                resp.status(400).json({
                    status: false,
                    mensagem: "Alguma informação está faltando"
                });
            }
        }
        else
        {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato de requisição errado"
            });
        }
    }

    consultarTodos(req, resp)
    {
        resp.type("application/json");

        if (req.method === "GET")
        {
            const login = new Login();

            login.consultarTodos().then((logins) => {
                resp.status(200).json(logins);
            }).catch((erro) => {
                resp.status(500).json({
                    status: false,
                    mensagem: erro.message
                });
            });
        }
        else
        {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato de requisição errado"
            });
        }
    }

    consultarLogin(req, resp)
    {    
        resp.type("application/json");
        const dados = req.params,
              login = dados.login,
              senha = dados.senha

              
        if (req.method === "GET")
        {
            const loginObj = new Login();

            loginObj.consultarLogin(login,senha).then((loginEncontrado) => {
                resp.status(200).json(loginEncontrado);
            }).catch((erro) => {
                resp.status(500).json({
                    status: false,
                    mensagem: erro.message
                });
            });
        }
        else
        {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato de requisição errado"
            });
        }
    }

    alterar(req, resp)
    {
        resp.type("application/json");

        if (req.method === "PUT" && req.is("application/json"))
        {
            const dados = req.body,
                  login = dados.login,
                  senha = dados.senha,
                  lembrete = dados.lembrete;

            if (login && senha && lembrete)
            {
                const loginObj = new Login(login, senha, lembrete);

                loginObj.alterar().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Login atualizado com sucesso"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
            }
            else
            {
                resp.status(400).json({
                    status: false,
                    mensagem: "Alguma informação está faltando"
                });
            }
        }
        else
        {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato de requisição errado"
            });
        }
    }

    deletar(req, resp)
    {
        resp.type("application/json");

        if (req.method === "DELETE" && req.is("application/json"))
        {
            const dados = req.body,
                  login = dados.login;

            if (login)
            {
                const loginObj = new Login(login);

                loginObj.deletar().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Login excluído com sucesso"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                });
            }
            else
            {
                resp.status(400).json({
                    status: false,
                    mensagem: "Informe um login válido"
                });
            }
        }
        else
        {
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato de requisição errado"
            });
        }
    }
}
