import Produto_BD from "../Persistencia/Produto_BD.js";

export default class Produto {
  #id;
  #nome;
  #valor;

  constructor(id, nome, valor) {
    this.#id = id;
    this.#nome = nome;
    this.#valor = valor;
  }

  get id() { return this.#id; }
  get nome() { return this.#nome; }
  get valor() { return this.#valor; }

  set id(id) { this.#id = id; }
  set nome(nome) { this.#nome = nome; }
  set valor(valor) { this.#valor = valor; }

  toJSON() {
    return {
      "id": this.#id,
      "nome": this.#nome,
      "valor": this.#valor
    };
  }

  async gravar() {
    const produto = new Produto_BD();
    await produto.gravar(this);
  }

  async alterar() {
    const produto = new Produto_BD();
    await produto.alterar(this);
  }

  async deletar() {
    const produto = new Produto_BD();
    await produto.deletar(this);
  }

  async consultarTodos() {
    const produto = new Produto_BD();
    const lista = await produto.consultarTodos(this);
    return lista;
  }
}
