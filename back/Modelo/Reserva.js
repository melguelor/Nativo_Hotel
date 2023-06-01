

import Reserva_BD from "../Persistencia/Reserva_BD.js"

export default class Reserva {

  #id
  #dataEntrada
  #quarto
  #qtdePessoa
  #idHospede

  constructor(id, dataEntrada, quarto, qtdePessoa, idHospede) {
    this.#id = id
    this.#dataEntrada = dataEntrada
    this.#quarto = quarto
    this.#qtdePessoa = qtdePessoa
    this.#idHospede = idHospede
  }

  get id() {
    return this.#id
  }
  get dataEntrada() {
    return this.#dataEntrada
  }
  get quarto() {
    return this.#quarto
  }
  get qtdePessoa() {
    return this.#qtdePessoa
  }
  get idHospede() {
    return this.#idHospede
  }

  set id(id) {
    this.#id = id
  }
  set dataEntrada(dataEntrada) {
    this.#dataEntrada = dataEntrada
  }
  set quarto(quarto) {
    this.#quarto = quarto
  }
  set qtdePessoa(qtdePessoa) {
    this.#qtdePessoa = qtdePessoa
  }
  set idHospede(idHospede) {
    this.#idHospede = idHospede
  }

  toJSON() {
    return {
      "id": this.#id,
      "dataEntrada": this.#dataEntrada,
      "quarto": this.#quarto,
      "qtdePessoa": this.#qtdePessoa,
      "idHospede": this.#idHospede
    }
  }

  async gravar() {
    const reserva = new Reserva_BD()
    await reserva.gravar(this)
  }

  async alterar() {
    const reserva = new Reserva_BD()
    await reserva.alterar(this)
  }

  async deletar() {
    const reserva = new Reserva_BD()
    await reserva.deletar(this)
  }

  async consultarTodos() {
    const reserva = new Reserva_BD(),
      lista = await reserva.consultarTodos(this)
    return lista
  }

  async consultarID(id)
    { 
        const atividade = new Reserva_BD(),
        lista = await atividade.consultarID(id)
        return lista
    
    }
}
