import { User } from "../db.js";
import bcryptjs from "bcryptjs";

const get_user = async (req, res) => {
    try {
        const id_req = req.params.id;
        const user = await User.findOne({ where: { id: id_req } });

        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        return res.status(200).send({
            id: user.id,
            nome: user.nome,
            sobrenome: user.sobrenome,
            email: user.email,
            dataNascimento: user.dataNascimento,
            profile_image: user.profile_image,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro ao buscar usuário");
    }
};

const save_user_image = async (req, res) => {
    try {
        const id_req = req.params.id;
        const user = await User.findOne({ where: { id: id_req } });

        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        user.profile_image = req.body.profile_image;
        await user.save();
        return res.status(200).send("Imagem de perfil salva com sucesso");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro ao salvar imagem de perfil");
    }
};

const change_user_password = async (req, res) => {
    try {
        const id_req = req.params.id;
        const user = await User.findOne({ where: { id: id_req } });

        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        const novaSenha = req.body.novaSenha;
        const novaSenhaCriptografada = bcryptjs.hashSync(novaSenha, 10);

        user.senha = novaSenhaCriptografada;
        await user.save();
        return res.status(200).send("Senha atualizada com sucesso");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro ao atualizar senha");
    }
};

export default { get_user, save_user_image, change_user_password };