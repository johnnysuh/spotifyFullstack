import Express from 'express'
import bcryptjs from 'bcryptjs'
import { User, criarTabelas } from './db.js'

const app = Express()
app.use(Express.json())

criarTabelas()
app.post('/registro', async function(req, res) {
    // verificar se todos os campos foram enviados
    try{
        const {nome, sobrenome, email, senha, dataNascimento} = req.body
        if(!nome || !sobrenome || !email || !senha || !dataNascimento){
            res.status(406).send('Todos os campos devem ser enviados')
            return
        }

        if(await User.findOne({where:{email:email}})){
            res.status(400).send('usuario ja existente no sistema')
            return
        }

        const senhaSegura = bcryptjs.hashSync(senha, 10)

        const novoUsuario = User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senhaSegura,
            dataNascimento: dataNascimento
        })
        res.status(406).send('ok usuario criado')
    } catch (erro) {
        console.log(erro)
    }
    // encriptar senha do usuario
    // criar usuario na DB
    // devolver resposta para meu cliente
})

app.listen(7000)