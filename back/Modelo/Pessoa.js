import Pessoa_BD from "../Persistencia/Pessoa_BD.js"


export default class Pessoa
{

  
    #id 
    #cpf
    #nome
    #telefone
    #rua
    #cep
    #numero
    #tipo


    constructor(id,cpf,nome,telefone,rua,cep,numero,tipo)
    {
        this.#id = id
        this.#cpf = cpf
        this.#nome = nome
        this.#telefone = telefone
        this.#rua = rua
        this.#cep = cep
        this.#numero = numero
        this.#tipo = tipo
    }

    get id(){return this.#id}
    get cpf(){return this.#cpf}
    get nome(){return this.#nome}
    get telefone(){return this.#telefone}
    get rua(){return this.#rua}
    get cep(){return this.#cep}
    get numero(){return this.#numero}
    get tipo(){return this.#tipo}

    set id(id){ this.#id = id}
    set cpf(cpf){ this.#cpf = cpf}
    set nome(nome){ this.#nome = nome}
    set telefone(telefone){ this.#telefone = telefone}
    set rua(rua){ this.#rua = rua}
    set cep(cep){ this.#cep = cep}
    set numero(numero){ this.#numero = numero}
    set tipo(tipo){ this.#tipo = tipo}


    toJSON()
    {
        return{
        "id" : this.#id,
        "cpf": this.#cpf,
        "nome": this.#nome,
        "telefone": this.#telefone,
        "rua": this.#rua,
        "cep": this.#cep,
        "numero": this.#numero,
        "tipo": this.#tipo
        }
    
    
    }


    async gravar()
    {
        const pessoa = new Pessoa_BD()
        await pessoa.gravar(this)
    
    }

    async alterar()
    {
        const pessoa = new Pessoa_BD()
        await pessoa.alterar(this)

    }

    async deletar()
    {
        const pessoa = new Pessoa_BD()
        await pessoa.deletar(this)
    
    }

    async consultarTodos()
    {
        const pessoa = new Pessoa_BD(),
        lista = await pessoa.consultarTodos(this)
        return lista
    
    }



}