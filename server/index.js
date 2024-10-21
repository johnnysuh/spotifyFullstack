import Express from 'express'

const app = Express()
app.use(Express.json())

app.get('/pegar', function (req, res) {
    res.send('hit solo da gaga')
})

app.get('/pegaroutracoisa', function (req, res) {
    res.send('charli xcx')
})

app.post('/registro', function(req, res) {
    // verificar se todos os campos foram enviados
    try{
        console.log(req)
        const dados = req.body
        if(!nome || !sobrenome || !email || !senha || !dataNascimento){
            res.send('Todos os campos devem ser enviados')
            return
        }
        console.log('criar user')
        res.send('ok')
    } catch (erro) {

    }
    // encriptar senha do usuario
    // criar usuario na DB
    // devolver resposta para meu cliente
})

app.listen(7000)