

const pegar_usuario_funcao = (req, res) => {
    const id_requisicao = req.params.id
    const user = await User.findByPk(id_requisicao)
    if (!user){
        res.status(404).send('user not found')
        return
    }
    res.send(user)
}

export {pegar_usuario_funcao}