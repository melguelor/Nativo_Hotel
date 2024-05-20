import Login_BD from "../Persistencia/Login_BD.js"

export default class Login
{
    #login
    #senha
    #lembrete

    constructor(login, senha, lembrete)
    {
        this.#login = login
        this.#senha = senha
        this.#lembrete = lembrete
    }

    get login() { return this.#login }
    get senha() { return this.#senha }
    get lembrete() { return this.#lembrete }

    set login(login) { this.#login = login }
    set senha(senha) { this.#senha = senha }
    set lembrete(lembrete) { this.#lembrete = lembrete }

    toJSON()
    {
        return {
            "login": this.#login,
            "senha": this.#senha,
            "lembrete": this.#lembrete
        }
    }

    async gravar()
    {
        const loginBD = new Login_BD()
        await loginBD.gravar(this)
    }

    async alterar()
    {
        const loginBD = new Login_BD()
        await loginBD.alterar(this)
    }

    async deletar()
    {
        const loginBD = new Login_BD()
        await loginBD.deletar(this)
    }

    async consultarTodos()
    {
        const loginBD = new Login_BD(),
        lista = await loginBD.consultarTodos(this)
        return lista
    }

    async consultarLogin(login,senha)
    {   
        const loginBD = new Login_BD(),
        lista = await loginBD.consultarLogin(login,senha)
        return lista
    }
}
