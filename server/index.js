import Express from 'express'
import bcryptjs from 'bcryptjs'
import { User, criarTabelas } from './db.js'
import jwt from 'jsonwebtoken'

const app = Express()
app.use(Express.json())

// criarTabelas()
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

app.post('/login', async function(req, res) {
    try{
    const { email, senha } = req.body
    if (!email || !senha){
        res.status(400).send("todos os campos devem ser preenchidos")
        return
    }
    const usuario = User.findOne({where:{email:email}})
    if (!usuario) {
        res.send('este email nao esta cadastrado')
        return
    }
    const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)
    if(!senhaCorreta) {
        res.send('a senha esta incorreta')
        return
    }
    const token = jwt.sign(
        {
            nome:usuario.nome,
            email:usuario.email,
            status:usuario.rodrigo
        },
        'chavecriptografiasupersegura',
        {expiresIn: "30d"}
    )
    res.send({msg:'voce foi logado', token: token})
} catch (erro){
    console.log(erro)
    res.status(500).send("houve um problema")
}
    // validar informações
    // verificar a existencia do usuario
    // comparo a senha enviada com a senha do banco de dados
    // criar um token de autentificaçao
    // devolver a resposta com o token
})

app.listen(7000)