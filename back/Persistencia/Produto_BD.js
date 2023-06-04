import Produto from "../Modelo/Produto.js";
import conectar from "./Conexao.js";

export default class Produto_BD {
  async gravar(produto) {
    if (produto instanceof Produto) {
      const conexao = await conectar();
      const sql = "INSERT INTO produto (id, nome, valor) VALUES (?, ?, ?)";
      const valores = [produto.id, produto.nome, produto.valor];
      await conexao.query(sql, valores);
    }
  }

  async alterar(produto) {
    if (produto instanceof Produto) {
      const conexao = await conectar();
      const sql = "UPDATE produto SET nome = ?, valor = ? WHERE id = ?";
      const valores = [produto.nome, produto.valor, produto.id];
      await conexao.query(sql, valores);
    }
  }

  async deletar(produto) {
    if (produto instanceof Produto) {
      const conexao = await conectar();
      const sql = "DELETE FROM produto WHERE id = ?";
      const valores = [produto.id];
      await conexao.query(sql, valores);
    }
  }

  async consultarTodos() {
    const conexao = await conectar();
    const sql = "SELECT * FROM produto";
    const [linhas] = await conexao.query(sql);
    const produtos = [];

    for (const linha of linhas) {
      const produto = new Produto(linha['id'], linha['nome'], linha['valor']);
      produtos.push(produto);
    }

    return produtos;
  }
}
