import {Sequelize, DataTypes} from 'sequelize' //npm i sequelize pg pg-hstore

const sequelize = new Sequelize(
    'echo', 
    'postgres', 
    'postgres', 
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)
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
        unique: true
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo'
    },
    profile_image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    }
}, {freezeTableName: true})

const Playlist = sequelize.define('Playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    cover: {
      type: DataTypes.STRING, // URL da capa
    },
  });
  
  const Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, // URL da imagem do artista
    },
  });
  
 
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING, // Formato: "3:45"
    },
    albumCover: {
      type: DataTypes.STRING, // URL da capa do álbum
    },
  });
  
  // Relacionamentos
  Playlist.hasMany(Song); // Uma playlist tem várias músicas
  Song.belongsTo(Playlist);
  
  Artist.hasMany(Song); // Um artista pode ter várias músicas
  Song.belongsTo(Artist);

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ force: true }).then(() => { //sincroniza o banco de dados, mas para um banco real são necessárias formas de verificar as tabelas antes
        console.log('tabela criada')
    })
}

export { User, Playlist, Artist, Song, sequelize, criarTabelas };