import Express from 'express'

const app = Express()

app.get('/pegar', function (req, res) {
    res.send('hit solo da gaga')
})

app.get('/pegaroutracoisa', function (req, res) {
    res.send('charli xcx')
})

app.listen(7000)