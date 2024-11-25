import { User } from "../db.js";
import bcryptjs from "bcryptjs";

const get_user = async (req, res) => {
    const id_req = req.params.id
    const user = await User.findOne({ where: { id: id_req } })
    if (!user) {
        res.status(404).send("Usuário não encontrado")
        return
    }
    res.status(200).send({id: user.id, nome: user.nome, sobrenome: user.sobrenome, email: user.email, dataNascimento: user.dataNascimento, profile_image: user.profile_image})
    return

}

const save_user_image = async(req, res)=>{
    const id_req = req.params.id
    const user = await User.findOne({ where: { id: id_req } })

    if (!user) {
        res.status(404).send("Usuário não encontrado")
        return
    }

    user.profile_image = req.body.profile_image
    await user.save()
}

const change_user_password = async(req, res) => {
    const id_req = req.params.id
    const user = await User.findOne({ where: { id: id_req } })
    

    if (!user) {
        res.status(404).send("Usuário não encontrado")
        return
    }

    const novaSenha = req.body.novaSenha

    const novaSenhaCriptografada = bcryptjs.hashSync(novaSenha, 10)

    user.senha = novaSenhaCriptografada
    await user.save()
    res.status(200).send("Senha correta")
    return
}
export default { get_user, save_user_image, change_user_password}