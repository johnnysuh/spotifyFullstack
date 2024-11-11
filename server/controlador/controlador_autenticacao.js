import { User } from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registro_funcao = async (req, res) => {
    try{
        const {nome, sobrenome, email, senha, dataNascimento} = req.body
        if(!nome || !sobrenome || !email || !senha || !dataNascimento){
            res.status(406).send('todos os campos devem ser enviados')
            return
        }
        if(await User.findOne({where:{email:email}}))
            res.status(400).send('usuario ja existente no sistema')
            return

    } catch (erro) {
        console.log(erro)
    }
}

const login_funcao = async (req, res) => {
        try{
            const { email, senha } = req.body
            if (!email || !senha) {
                res.status(400).send("todos os campos devem ser preenchidos")
                return
            }
            const usuario = await User.findOne({where:{email:email}})
            if(!usuario) {
                res.send("este email não está cadastrado")
                return
            }
            const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
            if(!senhaCorreta) {
                res.
            }
        }
}

export {registro_funcao, login_funcao}