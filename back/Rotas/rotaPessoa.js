import Router from "express"
import Pessoa_CTRL from '../Controle/Pessoa_CTRL.js'

const rotaPessoa = new Router()
const pessoa = new Pessoa_CTRL()



export default rotaPessoa
.post('/',pessoa.gravar)
.get('/',pessoa.consultarTodos)
.put('/',pessoa.alterar)
.delete('/:id',pessoa.deletar)


 



