import Router from "express"

import Atividade_CTRL from "../Controle/Atividade_CTRL.js";


const rotaAtividade = new Router(),
      atividade_CTRL = new Atividade_CTRL()



export default rotaAtividade
.post("/",atividade_CTRL.gravar)
.get("/",atividade_CTRL.consultarTodos)
.get("/:id",atividade_CTRL.consultarID)
.put('/',atividade_CTRL.alterar)
.delete('/:id',atividade_CTRL.deletar)