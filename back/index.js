import express from 'express'
import cors from 'cors'

import rotaPessoa from './Rotas/rotaPessoa.js'



import rotaAtividade from './Rotas/rotaAtividade.js'
import rotaReserva from './Rotas/rotaReserva.js'
import rotaProduto from './Rotas/rotaProduto.js'

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(cors({origin:"*"}))
app.use(express.json())
app.use('/atividade',rotaAtividade)
app.use('/pessoa',rotaPessoa)
app.use('/reserva',rotaReserva)
app.use('/produto',rotaProduto)





app.listen(4000,()=>{ console.log('Backend ouvindo PERFEITAMENTE')})
