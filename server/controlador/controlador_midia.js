import { Artista, Album, Musica } from "../db.js";

// Lista todos os artistas
const listarArtistas = async (req, res) => {
    try {
        const artistas = await Artista.findAll();
        res.status(200).send(artistas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar artistas");
    }
};

// Lista todos os álbuns
const listarAlbuns = async (req, res) => {
    try {
        const albuns = await Album.findAll();
        res.status(200).send(albuns);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar álbuns");
    }
};

// Exibe detalhes de um álbum e suas músicas
const exibirAlbum = async (req, res) => {
    try {
        const albumId = req.params.id;
        const album = await Album.findOne({
            where: { id: albumId },
            include: [Musica],
        });

        if (!album) {
            res.status(404).send("Álbum não encontrado");
            return;
        }

        res.status(200).send(album);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar álbum");
    }
};

// Exibe detalhes de uma música
const exibirMusica = async (req, res) => {
    try {
        const musicaId = req.params.id;
        const musica = await Musica.findOne({
            where: { id: musicaId },
        });

        if (!musica) {
            res.status(404).send("Música não encontrada");
            return;
        }

        res.status(200).send(musica);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar música");
    }
};

export default { listarArtistas, listarAlbuns, exibirAlbum, exibirMusica };