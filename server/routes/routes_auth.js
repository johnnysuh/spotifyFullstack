import express from 'express';
const routes_auth = express.Router(); 
import controlador from '../controllers/controlador_autenticacao.js';


routes_auth.post('/register', controlador.criarUsuario)

routes_auth.post('/login', controlador.login)

export default routes_auth //Exporta a rota