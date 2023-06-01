import Router from "express"

import Reserva_CTRL from "../Controle/Reserva_CTRL.js";


const rotaReserva = new Router(),
      reserva_CTRL = new Reserva_CTRL()



export default rotaReserva
.post("/",reserva_CTRL.gravar)
.get("/",reserva_CTRL.consultarTodos)
.get("/id",reserva_CTRL.consultarID)
.put('/',reserva_CTRL.alterar)
.delete('/',reserva_CTRL.deletar)