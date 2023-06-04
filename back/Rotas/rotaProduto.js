
import { Router } from "express";
import Produto_CTRL from '../Controle/Produto_CTRL.js';

const rotaProduto = Router();
const produtoCTRL = new Produto_CTRL();

rotaProduto
  .post('/', produtoCTRL.gravar)
  .get('/', produtoCTRL.consultarTodos)
  .put('/', produtoCTRL.alterar)
  .delete('/:id', produtoCTRL.deletar);

export default rotaProduto;
