import express from 'express';
const routes_user = express.Router(); 
import controller_user from '../controllers/controller_user.js';


routes_user.get('/get_user/:id', controller_user.get_user)
routes_user.post('/save_user_image/:id', controller_user.save_user_image)
routes_user.post('/change_user_password/:id', controller_user.change_user_password)


export default routes_user //Exporta a rota