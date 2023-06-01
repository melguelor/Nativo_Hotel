import Atividade_BD from "../Persistencia/atividade_BD.js"


export default class Atividade
{

    #id
    #descricao
    #prioridade
    #tempoMedio
    
  
    constructor(id,descricao,prioridade,tempoMedio)
    {
        this.#id = id 
        this.#descricao= descricao
        this.#prioridade =prioridade
        this.#tempoMedio =tempoMedio
        
        
        
    }

    get id(){return this.#id}
    get descricao(){return this.#descricao}
    get prioridade(){return this.#prioridade}
    get tempoMedio(){return this.#tempoMedio}
    

   

    set id(id){ this.#id = id}
    set descricao(descricao){ this.#descricao = descricao}
    set prioridade(prioridade){ this.#prioridade = prioridade}
    set tempoMedio(tempoMedio){ this.#tempoMedio = tempoMedio}
    
    

    toJSON()
    {
        return{
        "id" : this.#id,
        "prioridade": this.#prioridade,
        "descricao": this.#descricao,
        "tempoMedio": this.#tempoMedio
        }
    
    }


    async gravar()
    {
        const atividade = new Atividade_BD()
        await atividade.gravar(this)
    
    }

    async alterar()
    {
        const atividade = new Atividade_BD()
        await atividade.alterar(this)

    }

    async deletar()
    {
        const atividade = new Atividade_BD()
        await atividade.deletar(this)
    
    }

    async consultarTodos()
    {
        const atividade = new Atividade_BD(),
        lista = await atividade.consultarTodos(this)
        return lista
    
    }

    async consultarID(id)
    { console.log("Entrou no modelo  >>" + id)
        const atividade = new Atividade_BD(),
        lista = await atividade.consultarID(id)
        return lista
    
    }



}