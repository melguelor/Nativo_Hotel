import CarrinhoConsumo_BD from "../Persistencia/CarrinhoConsumo_BD.js";

export default class CarrinhoConsumo {
  #id;
  #nomeProduto;
  #dataPedida;
  #qtde;
  #valorUnitario;
  #idHospede;
  #idReserva;

  constructor(id, nomeProduto, dataPedida, qtde, valorUnitario, idHospede, idReserva) {
    this.#id = id;
    this.#nomeProduto = nomeProduto;
    this.#dataPedida = dataPedida;
    this.#qtde = qtde;
    this.#valorUnitario = valorUnitario;
    this.#idHospede = idHospede;
    this.#idReserva = idReserva;
  }

  // Getters
  get id() {
    return this.#id;
  }

  get nomeProduto() {
    return this.#nomeProduto;
  }

  get dataPedida() {
    return this.#dataPedida;
  }

  get qtde() {
    return this.#qtde;
  }

  get valorUnitario() {
    return this.#valorUnitario;
  }

  get idHospede() {
    return this.#idHospede;
  }

  get idReserva() {
    return this.#idReserva;
  }

  // Setters
  set id(id) {
    this.#id = id;
  }

  set nomeProduto(nomeProduto) {
    this.#nomeProduto = nomeProduto;
  }

  set dataPedida(dataPedida) {
    this.#dataPedida = dataPedida;
  }

  set qtde(qtde) {
    this.#qtde = qtde;
  }

  set valorUnitario(valorUnitario) {
    this.#valorUnitario = valorUnitario;
  }

  set idHospede(idHospede) {
    this.#idHospede = idHospede;
  }

  set idReserva(idReserva) {
    this.#idReserva = idReserva;
  }

  toJSON() {
    return {
      id: this.#id,
      nomeProduto: this.#nomeProduto,
      dataPedida: this.#dataPedida,
      qtde: this.#qtde,
      valorUnitario: this.#valorUnitario,
      idHospede: this.#idHospede,
      idReserva: this.#idReserva,
    };
  }

  async gravar() {
    const carrinhoConsumo = new CarrinhoConsumo_BD();
    await carrinhoConsumo.gravar(this);
  }

  async alterar() {
    const carrinhoConsumo = new CarrinhoConsumo_BD();
    await carrinhoConsumo.alterar(this);
  }

  async deletar() {
    const carrinhoConsumo = new CarrinhoConsumo_BD();
    await carrinhoConsumo.deletar(this);
  }

  async consultarTodos() {
    const carrinhoConsumo = new CarrinhoConsumo_BD();
    const lista = await carrinhoConsumo.consultarTodos(this);
    return lista;
  }

  async consultarID(id) {
    console.log("Entrou no modelo  >>" + id);
    const carrinhoConsumo = new CarrinhoConsumo_BD();
    const lista = await carrinhoConsumo.consultarID(id);
    return lista;
  }
}
