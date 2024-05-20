import Router from "express";
import Login_CTRL from "../Controle/Login_CTRL.js";

const rotaLogin = new Router(),
      login_CTRL = new Login_CTRL();

export default rotaLogin
.post("/", login_CTRL.gravar)
.get("/", login_CTRL.consultarTodos)
.get("/:login/:senha", login_CTRL.consultarLogin)
.put("/", login_CTRL.alterar)
.delete("/:login", login_CTRL.deletar);
