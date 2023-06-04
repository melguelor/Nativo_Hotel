import { Router } from "express";
import CarrinhoConsumo_CTRL from "../Controle/CarrinhoConsumo_CTRL.js";

const rotaCarrinhoConsumo = Router();
const carrinhoConsumo_CTRL = new CarrinhoConsumo_CTRL();

rotaCarrinhoConsumo.post("/", carrinhoConsumo_CTRL.gravar);
rotaCarrinhoConsumo.get("/", carrinhoConsumo_CTRL.consultarTodos);
rotaCarrinhoConsumo.get("/:id", carrinhoConsumo_CTRL.consultarID);
rotaCarrinhoConsumo.put("/", carrinhoConsumo_CTRL.alterar);
rotaCarrinhoConsumo.delete("/:id", carrinhoConsumo_CTRL.deletar);

export default rotaCarrinhoConsumo;
