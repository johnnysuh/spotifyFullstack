import { User } from "../db.js";

const pegar_usuario_funcao = async (req, res) => {
    const id_requisicao = req.params.id
    const user = await User.findByPk(id_requisicao)
    if (!user) {
        res.status(404).send('Usuário não encontrado')
        return
    }
    res.status(200).send(`Usuário encontrado! \n Nome: ${user.nome} \n Sobrenome: ${user.sobrenome}\n Email: ${user.email} \n Data de nascimento: ${user.dataNascimento}`)
    return
}

export default {pegar_usuario_funcao}