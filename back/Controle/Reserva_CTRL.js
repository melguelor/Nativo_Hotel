import Reserva from "../Modelo/Reserva.js";

export default class Reserva_CTRL 
{
  /*
  optei por fazer o idHospede como atributo da tabela.
  no meu banco eu gerei o id como autoincremento.
  configurei no banco uma constraint para não cadastrar se o IdHospede não tiver o codigo correspondente na tabela do hospede

  */
  gravar(req, resp) {
    resp.type("application/json");

    if (req.is("application/json") && req.method === "POST") {
      const dados = req.body;
      const id = dados.id;
      const dataEntrada = dados.data;
      const quarto = dados.quarto;
      const qtdePessoa = dados.qtdePessoa;
      const idHospede = dados.idHospede;
     console.log(dataEntrada)
      if (dataEntrada && quarto && qtdePessoa && idHospede) {
        const reserva = new Reserva(id, dataEntrada, quarto, qtdePessoa, idHospede);
        
        reserva.gravar()
          .then(() => {
            resp.status(200).json({
              status: true,
              id: "gerado pelo banco de dados",
              mensagem: "Reserva gravada com sucesso",
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

  alterar(req, resp) {
    resp.type("application/json");

    if (req.method === "PUT" && req.is('application/json')) {
        const dados = req.body;
        const { id, dataEntrada, quarto, qtdePessoa, idHospede } = dados;

        if (id && dataEntrada && quarto && qtdePessoa && idHospede) {
            const reserva = new Reserva(id, dataEntrada, quarto, qtdePessoa, idHospede);
            reserva.alterar()
                .then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Reserva atualizada com sucesso!"
                    });
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
                mensagem: "Informe adequadamente todos os dados"
            });
        }
    } else {
        resp.status(400).json({
            status: false,
            mensagem: "Método não permitido ou reserva no formato JSON não fornecida"
        });
    }
}


 deletar(req, resp) {
  resp.type("application/json");

  if (req.method === "DELETE" && req.is('application/json')) {
      const dados = req.body;
      const { id } = dados;

      if (id) {
          const reserva = new Reserva(id);

          reserva.deletar()
              .then(() => {
                  resp.status(200).json({
                      status: true,
                      mensagem: "Reserva excluída com sucesso!"
                  });
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
              mensagem: "Informe o ID corretamente"
          });
      }

  } else {
      resp.status(400).json({
          status: false,
          mensagem: "Método não permitido ou requisição no formato JSON não fornecida"
      });
  }
}



consultarTodos(req, resp) {
  resp.type("application/json");

  if (req.method === "GET") {
      const reserva = new Reserva();

      reserva.consultarTodos()
          .then((reservas) => {
              resp.status(200).json(reservas);
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