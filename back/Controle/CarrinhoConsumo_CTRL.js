import CarrinhoConsumo from "../Modelo/CarrinhoConsumo.js";

export default class CarrinhoConsumo_CTRL {
  gravar(req, resp) {
    resp.type("application/json");

    if (req.is("application/json") && req.method === "POST") {
      const dados = req.body;
      const id = dados.id;
      const nomeProduto = dados.nomeProduto;
      const dataPedida = dados.dataPedida;
      const qtde = dados.qtde;
      const valorUnitario = dados.valorUnitario;
      const idHospede = dados.idHospede;
      const idReserva = dados.idReserva;

      if (nomeProduto && dataPedida && qtde && valorUnitario && idHospede && idReserva) {
        const carrinhoConsumo = new CarrinhoConsumo(id, nomeProduto, dataPedida, qtde, valorUnitario, idHospede, idReserva);

        carrinhoConsumo
          .gravar()
          .then(() => {
            resp.status(200).json({
              status: true,
              id: "gerado pelo banco de dados",
              mensagem: "Carrinho de consumo gravado com sucesso",
            });
          })
          .catch((erro) => {
            resp.status(500).json({
              status: false,
              mensagem: erro.message,
            });
          });
      } else {
        resp.status(400).json({
          status: 400,
          mensagem: "Alguma informação está faltando",
        });
      }
    } else {
      resp.status(400).json({
        status: 400,
        mensagem: "Não é POST ou formato errado",
      });
    }
  }

  consultarTodos(req, resp) {
    resp.type("application/json");

    if (req.method === "GET") {
      const carrinhoConsumo = new CarrinhoConsumo();

      carrinhoConsumo
        .consultarTodos()
        .then((carrinhosConsumo) => {
          resp.status(200).json(carrinhosConsumo);
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
        mensagem: "Método não permitido ou requisição no formato JSON",
      });
    }
  }

  consultarID(req, resp) {
    resp.type("application/json");

    const dados = req.body;
    const { id } = dados;

    if (req.method === "GET") {
      const carrinhoConsumo = new CarrinhoConsumo();

      carrinhoConsumo
        .consultarID(id)
        .then((carrinhosConsumo) => {
          resp.status(200).json(carrinhosConsumo);
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
        mensagem: "Método não permitido ou requisição no formato JSON",
      });
    }
  }

  alterar(req, resp) {
    resp.type("application/json");

    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const id = dados.id;
      const nomeProduto = dados.nomeProduto;
      const dataPedida = dados.dataPedida;
      const qtde = dados.qtde;
      const valorUnitario = dados.valorUnitario;
      const idHospede = dados.idHospede;
      const idReserva = dados.idReserva;

      if (nomeProduto && dataPedida && qtde && valorUnitario && idHospede && idReserva) {
        const carrinhoConsumo = new CarrinhoConsumo(id, nomeProduto, dataPedida, qtde, valorUnitario, idHospede, idReserva);

        carrinhoConsumo
          .alterar()
          .then(() => {
            resp.status(200).json({
              status: true,
              mensagem: "Carrinho de consumo atualizado com sucesso!",
            });
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
          mensagem: "Informe adequadamente todos os dados",
        });
      }
    } else {
      resp.status(400).json({
        status: false,
        mensagem: "Método não permitido ou carrinho de consumo no formato JSON não fornecido",
      });
    }
  }

  deletar(req, resp) {
    resp.type("application/json");

    if (req.method === "DELETE" && req.is("application/json")) {
      const dados = req.body;
      const id = dados.id;

      if (id) {
        const carrinhoConsumo = new CarrinhoConsumo(id);

        carrinhoConsumo
          .deletar()
          .then(() => {
            resp.status(200).json({
              status: true,
              mensagem: "Carrinho de consumo excluído com sucesso!",
            });
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
          mensagem: "Informe o ID correto",
        });
      }
    } else {
      resp.status(400).json({
        status: false,
        mensagem: "Método não permitido ou carrinho de consumo no formato JSON não fornecido",
      });
    }
  }
}
