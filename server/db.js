import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    'spotfake',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
    }
);

// Modelo de Usuário
const User = sequelize.define('user', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo',
    },
});

// Modelo de Artista
const Artista = sequelize.define('artista', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
});

// Modelo de Álbum
const Album = sequelize.define('album', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
});

// Modelo de Música
const Musica = sequelize.define('musica', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    duracao: {
        type: Sequelize.DataTypes.INTEGER, // duração em segundos
        allowNull: false,
    },
});

// **Definição de Relacionamentos**
// Cada Álbum pertence a um Artista
Album.belongsTo(Artista, { foreignKey: 'artistaId', onDelete: 'CASCADE' });
Artista.hasMany(Album, { foreignKey: 'artistaId' });

// Cada Música pertence a um Álbum
Musica.belongsTo(Album, { foreignKey: 'albumId', onDelete: 'CASCADE' });
Album.hasMany(Musica, { foreignKey: 'albumId' });

// Função para criar tabelas e autenticar a conexão
const criarTabelas = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Conexão bem-sucedida com o banco de dados');
        })
        .catch((err) => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });

    sequelize
        .sync({ force: true }) // Remova `{ force: true }` em produção para evitar a exclusão de tabelas
        .then(() => {
            console.log('Tabelas sincronizadas');
        })
        .catch((err) => {
            console.error('Erro ao sincronizar tabelas:', err);
        });
};

// Exportando os modelos e a função de inicialização
export { User, Artista, Album, Musica, sequelize, criarTabelas };