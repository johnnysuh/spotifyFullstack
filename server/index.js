import Express from 'express'
import { criarTabelas } from './db.js'
import { rotas_autenticacao } from './rotas/rotas_autenticacao.js'
import { rotas_usuarios } from './rotas/rotas_usuarios.js'

const app = Express()
app.use(Express.json())
// criarTabelas()

app.use('/autenticacao', rotas_autenticacao)
app.use('/usuario', rotas_usuarios)

app.listen(7000)