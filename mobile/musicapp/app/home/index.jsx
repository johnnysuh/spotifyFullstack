import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"; // Crie este arquivo para estilizar a página, caso necessário

const Home = () => {
  const [artistas, setArtistas] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados do backend
  const fetchData = async () => {
    try {
      setLoading(true);

      const artistasResponse = await axios.get("http://localhost:3000/artistas");
      const albunsResponse = await axios.get("http://localhost:3000/albuns");
      const musicasResponse = await axios.get("http://localhost:3000/musicas");

      setArtistas(artistasResponse.data);
      setAlbuns(albunsResponse.data);
      setMusicas(musicasResponse.data);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar os dados.");
      setLoading(false);
    }
  };

  // Busca os dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-container">
      <h1>Bem-vindo à Home</h1>

      <section>
        <h2>Artistas</h2>
        {artistas.length > 0 ? (
          <ul>
            {artistas.map((artista) => (
              <li key={artista.id}>{artista.nome}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum artista encontrado.</p>
        )}
      </section>

      <section>
        <h2>Álbuns</h2>
        {albuns.length > 0 ? (
          <ul>
            {albuns.map((album) => (
              <li key={album.id}>
                {album.nome} - Artista: {album.artista?.nome || "Desconhecido"}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum álbum encontrado.</p>
        )}
      </section>

      <section>
        <h2>Músicas</h2>
        {musicas.length > 0 ? (
          <ul>
            {musicas.map((musica) => (
              <li key={musica.id}>
                {musica.nome} - Álbum: {musica.album?.nome || "Desconhecido"}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma música encontrada.</p>
        )}
      </section>
    </div>
  );
};

export default Home;