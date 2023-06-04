import CarrinhoConsumo from "../Modelo/CarrinhoConsumo.js";
import conectar from "./Conexao.js";

export default class CarrinhoConsumo_BD {
  async gravar(carrinhoConsumo) {
    if (carrinhoConsumo instanceof CarrinhoConsumo) {
      const conexao = await conectar();
      const sql = "insert into carrinhoConsumo(id, nomeProduto, dataPedida, qtde, valorUnitario, idHospede, idReserva) values(?, ?, ?, ?, ?, ?, ?)";
      const valores = [carrinhoConsumo.id, carrinhoConsumo.nomeProduto, carrinhoConsumo.dataPedida, carrinhoConsumo.qtde, carrinhoConsumo.valorUnitario, carrinhoConsumo.idHospede, carrinhoConsumo.idReserva];
      await conexao.query(sql, valores);
    }
  }

  async alterar(carrinhoConsumo) {
    if (carrinhoConsumo instanceof CarrinhoConsumo) {
      const conexao = await conectar();
      const sql = "update carrinhoConsumo set nomeProduto = ?, dataPedida = ?, qtde = ?, valorUnitario = ?, idHospede = ?, idReserva = ? where id = ?";
      const valores = [carrinhoConsumo.nomeProduto, carrinhoConsumo.dataPedida, carrinhoConsumo.qtde, carrinhoConsumo.valorUnitario, carrinhoConsumo.idHospede, carrinhoConsumo.idReserva, carrinhoConsumo.id];
      await conexao.query(sql, valores);
    }
  }

  async deletar(carrinhoConsumo) {
    if (carrinhoConsumo instanceof CarrinhoConsumo) {
      const conexao = await conectar();
      const sql = "delete from carrinhoConsumo where id = ?";
      await conexao.query(sql, [carrinhoConsumo.id]);
    }
  }

  async consultarTodos() {
    const conexao = await conectar();
    const sql = "select * from carrinhoConsumo";
    const [linhas] = await conexao.query(sql);
    const carrinhosConsumo = [];

    for (const linha of linhas) {
      const carrinho = new CarrinhoConsumo(linha.id, linha.nomeProduto, linha.dataPedida, linha.qtde, linha.valorUnitario, linha.idHospede, linha.idReserva);
      carrinhosConsumo.push(carrinho);
    }

    return carrinhosConsumo;
  }

  async consultarID(id) {
    const conexao = await conectar();
    const sql = "select * from carrinhoConsumo where id = ?";
    const [linhas] = await conexao.query(sql, [id]);
    const carrinhosConsumo = [];

    for (const linha of linhas) {
      const carrinho = new CarrinhoConsumo(linha.id, linha.nomeProduto, linha.dataPedida, linha.qtde, linha.valorUnitario, linha.idHospede, linha.idReserva);
      carrinhosConsumo.push(carrinho);
    }

    return carrinhosConsumo;
  }
}

