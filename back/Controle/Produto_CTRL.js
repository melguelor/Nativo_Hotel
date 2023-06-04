import Produto from "../Modelo/Produto.js";

export default class Produto_CTRL {
  gravar(req, resp) {
    resp.type("application/json");
    if (req.is("application/json") && req.method === "POST") {
      const info = req.body;
      const id = info.id;
      const nome = info.nome;
      const valor = info.valor;

      if (nome && valor) {
        const produto = new Produto(id, nome, valor);

        produto
          .gravar()
          .then(() => {
            resp.status(200).json({
              status: true,
              mensagem: "Gravado com sucesso no banco de dados",
            });
          })
          .catch((erro) => {
            resp.status(500).json({
              status: false,
              mensagem: erro.message,
            });
          });
      }
    } else {
      resp.status(400).json({
        status: false,
        mensagem:
          "JSON em formato errado ou falta um dos campos de preenchimento",
      });
    }
  }

  alterar(req, resp) {
    // Implementar o código para alterar um produto no banco de dados
  }

  deletar(req, resp) {
    // Implementar o código para deletar um produto do banco de dados
  }

  consultarTodos(req, resp) {
    resp.type("application/json");

    if (req.method === "GET") {
      const produto = new Produto();

      produto
        .consultarTodos()
        .then((produtos) => {
          resp.status(200).json(produtos);
        })
        .catch((erro) => {
          resp.status(500).json({
            status: false,
            mensagem: erro.message,
          });
        });
    } else {
      resp.status(400).json({
        status: false,
        mensagem: "Método não permitido",
      });
    }
  }
}
