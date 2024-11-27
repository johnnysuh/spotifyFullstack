import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../db.js";

const criarUsuario = async (req, res) => {
    try {
        const { nome, sobrenome, email, senha, nascimento } = req.body;

        if (!nome || !sobrenome || !email || !senha || !nascimento) {
            return res.status(406).send("Todos os campos devem ser enviados");
        }

        if (await User.findOne({ where: { email } })) {
            return res.status(400).send("Usuário já existe no sistema");
        }

        const senhaCriptografada = bcryptjs.hashSync(senha, 10);
        await User.create({
            nome,
            sobrenome,
            email,
            senha: senhaCriptografada,
            dataNascimento: nascimento,
        });

        return res.status(201).send("Usuário criado com sucesso");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro ao criar usuário");
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).send("Todos os campos devem ser preenchidos");
        }

        const usuario = await User.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).send("Este email não está cadastrado");
        }

        const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(401).send("A senha está incorreta");
        }

        const token = jwt.sign(
            {
                nome: usuario.nome,
                email: usuario.email,
                status: usuario.status,
            },
            "chavesupersegura",
            { expiresIn: "30d" }
        );

        return res.status(200).send({
            msg: "Login realizado com sucesso",
            token,
            user_id: usuario.id,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Erro ao realizar login");
    }
};

export default { criarUsuario, login };