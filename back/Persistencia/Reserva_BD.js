import Reserva from "../Modelo/Reserva.js";
import conectar from "./Conexao.js";

export default class Reserva_BD {
  async gravar(reserva) {
    if (reserva instanceof Reserva) {
      const conexao = await conectar();
      const sql = "insert into reserva(dataEntrada, quarto, qtdePessoa, idHospede) values(?,?,?,?)";
      const valores = [reserva.dataEntrada, reserva.quarto, reserva.qtdePessoa, reserva.idHospede];
      await conexao.query(sql, valores);
    }
  }

  async alterar(reserva) {//a alteração do IDHospede só poderá ser alterada se o IDHospede estiver na tabela Pessoa
    if (reserva instanceof Reserva) {
      const conexao = await conectar();
      const sql = "update reserva set dataEntrada=?, quarto=?, qtdePessoa=?, idHospede=? where id=?";
      const valores = [reserva.dataEntrada, reserva.quarto, reserva.qtdePessoa, reserva.idHospede, reserva.id];
      await conexao.query(sql, valores);
    }
  }

  async deletar(reserva) {
    if (reserva instanceof Reserva) {
      const conexao = await conectar();
      const sql = "delete from reserva where id = ?";
      await conexao.query(sql, reserva.id);
    }
  }

  async consultarTodos() {
    const conexao = await conectar();
    const sql = "select reserva.id,reserva.dataEntrada,reserva.quarto,reserva.qtdePessoa, nome \
                 from reserva join pessoa\
                 where reserva.idHospede = pessoa.id";
    const [linhas] = await conexao.query(sql);
    const reservas = [];
    for (const linha of linhas) {
      const reserva = new Reserva(linha["id"], linha["dataEntrada"], linha["quarto"], linha["qtdePessoa"], linha["nome"]);
      reservas.push(reserva);
    }
    return reservas;
  }

  async consultarID(id) {
    const conexao = await conectar();
    const sql = "select reserva.id,reserva.dataEntrada,reserva.quarto,reserva.qtdePessoa, pessoa.nome \
                 from reserva join pessoa on reserva.idHospede = pessoa.id\
                 where reserva.id = ?";
    const valores = [id];
    const [linhas] = await conexao.query(sql, valores);
    const reservas = [];
    for (const linha of linhas) {
      const reserva = new Reserva(linha["id"], linha["dataEntrada"], linha["quarto"], linha["qtdePessoa"], linha["nome"]);
      reservas.push(reserva);
    }
    return reservas;
  }
}
