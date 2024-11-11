import express from 'express'
import { login_funcao, registro_funcao } from '../controlador/controlador_autenticacao'

const rotas_autenticacao = express.Router()

rotas_autenticacao.post('/registro', registro_funcao)
rotas_autenticacao.post('/login', login_funcao)

export { rotas_autenticacao }