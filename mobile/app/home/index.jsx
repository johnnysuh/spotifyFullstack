import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

const playlists = [
  { id: 0.1, title: "2010's", imageUrl: "https://i.pinimg.com/736x/3e/fe/61/3efe61bc9ff52f91b19546b98924748d.jpg" },
  { id: 0.2, title: "loona complete", imageUrl: "https://i.pinimg.com/736x/66/b0/58/66b05804cefc708fca840f39ec19c39e.jpg" },
  { id: 0.3, title: "prod. yasutaka nakata", imageUrl: "https://i.pinimg.com/474x/aa/b8/17/aab8173f1716749ff0b991db07582945.jpg" },
  { id: 0.4, title: "socorre", imageUrl: "https://i.pinimg.com/736x/dc/5e/15/dc5e15c5d02ff976b4fd24cf7c5e5ad1.jpg" },
  { id: 0.5, title: "shibuya kei", imageUrl: "https://i.pinimg.com/736x/cf/94/07/cf940738c18c204b41abd52490a1484c.jpg" },
  { id: 0.6, title: "candy cutie", imageUrl: "https://i.pinimg.com/736x/65/9f/b5/659fb5f77fefdcb128ff7bf5c8661b6d.jpg" },
  { id: 0.7, title: "kpop nugu", imageUrl: "https://i.pinimg.com/736x/de/21/1a/de211a9e11d28bb365432a20482ce686.jpg" },
  { id: 0.8, title: "ai que tudo", imageUrl: "https://i.pinimg.com/736x/fc/33/ed/fc33ed44e6abccd91823255e0a8812a0.jpg" },
  { id: 0.9, title: "style savvy music", imageUrl: "https://i.pinimg.com/736x/7a/ce/04/7ace047732271f8adf6e648f30e8ae1c.jpg" },
  { id: 0.11, title: "midwest emo", imageUrl: "https://i.pinimg.com/736x/aa/39/36/aa3936c6672646ac88a04056a289d920.jpg" },
];

const Artistas = [
  { id: 1.1, title: "ARTMS", imageUrl: "https://i.pinimg.com/736x/b0/6b/50/b06b50a9ee63d84e7fd0a3b677d60224.jpg" },
  { id: 1.2, title: "SHINee", imageUrl: "https://i.pinimg.com/736x/f1/7a/de/f17ade48178ad9bb4b96b0b5dfc20d93.jpg" },
  { id: 1.3, title: "Charli xcx", imageUrl: "https://i.pinimg.com/736x/ee/9e/9f/ee9e9fa19ee2ed0dca7dca29e4b718a3.jpg" },
  { id: 1.4, title: "Bjork", imageUrl: "https://i.pinimg.com/736x/3b/fd/39/3bfd39b013629fa870499c47ff082994.jpg" },
  { id: 1.5, title: "Clairo", imageUrl: "https://media.newyorker.com/photos/668dabf86b5fa018becc0c7d/1:1/w_2182,h_2182,c_limit/r44564.jpg" },
  { id: 1.6, title: "Perfume", imageUrl: "https://lh3.googleusercontent.com/Xvs3WcngUqmkAJP8B1_TO8XD6bUeBL3DGuzGnqekO9dR6VuLXmUYeiSvrH7D4xvX0NCPABEp9GfkVUI=w544-h544-p-l90-rj" },
  { id: 1.7, title: "Utada Hikaru", imageUrl: "https://i.pinimg.com/736x/03/5f/b4/035fb4278fda86b713c5346b7dd29acd.jpg" },
  { id: 1.8, title: "Capsule", imageUrl: "https://i.pinimg.com/736x/c6/65/53/c66553144eb07190d5a4716c9f6beada.jpg" },
  { id: 1.9, title: "XG", imageUrl: "https://i.pinimg.com/736x/96/df/76/96df760efbd3b8ce5ef756a8a90623c5.jpg" },
  { id: 1.11, title: "PinkPantheress", imageUrl: "https://i.pinimg.com/736x/2c/dc/73/2cdc735a249677441ef56de9dce1929f.jpg" },
];

const Álbuns = [
  { id: 2.1, title: "Dall", imageUrl: "https://musicainstantanea.com.br/wp-content/uploads/2024/06/Artms-%E2%80%93-Dall.jpeg" },
  { id: 2.2, title: "1of1", imageUrl: "https://upload.wikimedia.org/wikipedia/pt/5/54/Shinee1of1.jpg" },
  { id: 2.3, title: "Pop 2", imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/40/Charli_XCX_-_Pop_2.png" },
  { id: 2.4, title: "Homogenic", imageUrl: "https://monkeybuzz.com.br/wp-content/uploads/2019/06/bjork-homogenic.jpg" },
  { id: 2.5, title: "Charm", imageUrl: "https://cdn-images.dzcdn.net/images/cover/6dfa4ea965a74b93870a85daa74b7ca3/0x1900-000000-80-0-0.jpg" },
  { id: 2.6, title: "GAME", imageUrl: "https://upload.wikimedia.org/wikipedia/pt/3/36/Perfumegame.jpg" },
  { id: 2.7, title: "First Love", imageUrl: "https://i.scdn.co/image/ab67616d0000b2734fa36b14a276fe560940baa0" },
  { id: 2.8, title: "phony phonic", imageUrl: "https://i.scdn.co/image/ab67616d0000b2735bf0284db2a02dace39b91ca" },
  { id: 2.9, title: "AWE", imageUrl: "https://i.scdn.co/image/ab67616d0000b273948eab0aad0232e829991528" },
  { id: 2.11, title: "Heaven Knows", imageUrl: "https://upload.wikimedia.org/wikipedia/pt/e/e2/Heaven_Knows.jpg" },
];

const Músicas = [
  { id: 3.1, title: "Virtual Angel", imageUrl: "https://musicainstantanea.com.br/wp-content/uploads/2024/06/Artms-%E2%80%93-Dall.jpeg" },
  { id: 3.2, title: "Replay", imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/d2/0b/6e/d20b6eb8-65db-73eb-a3ff-256cbaa0c3ab/asset.jpg/1200x1200bf-60.jpg" },
  { id: 3.3, title: "365", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png" },
  { id: 3.4, title: "Oceania", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi6eGWf1liXYxvD9qUMmlOQKWI4zjKzVWSw&s" },
  { id: 3.5, title: "terrapin", imageUrl: "https://cdn-images.dzcdn.net/images/cover/6dfa4ea965a74b93870a85daa74b7ca3/0x1900-000000-80-0-0.jpg" },
  { id: 3.6, title: "Dream Fighter", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/PerfumeTriCD.PNG/220px-PerfumeTriCD.PNG" },
  { id: 3.7, title: "Distance", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNS1-63pzdONZI4kfigSCIhJvkplPRsZriMA&s" },
  { id: 3.8, title: "TicTac", imageUrl: "https://e.snmc.io/i/600/s/f951384650e31e63020b98f13e35ce7f/10040069/capsule-l_d_k-lounge-designers-killer-cover-art.jpg" },
  { id: 3.9, title: "IYKYK", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWP1tnOQZ8p6lvV8u6dHU0aPkOB_yvLIWMQ&s" },
  { id: 3.11, title: "Turn it up", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaCtwb4oPHW_j7FVP9M9WzN2JUntII4l6yA&s" },
];

const TelaHome = () => {
  const renderPlaylist = (data, isArtist = false, type = "") => (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ alignItems: "flex-start" }}
      renderItem={({ item }) => (
        <Link to={`/detalhes/${type}/${item.id}`} style={styles.itemCard}>  {/* Adicionando o Link */}
          <Image
            style={[styles.itemImage, isArtist && styles.artistImage]}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </Link>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/Logo1.png')} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo ao Spotifake!</Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>Meu Perfil</Text>
          <Image source={require('../../assets/images/userIcon.png')} style={styles.profileImage} />
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Músicas</Text>
      {renderPlaylist(Músicas, false, "musica")}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {renderPlaylist(Artistas, true, "artista")}

      <Text style={styles.sectionTitle}>Álbuns</Text>
      {renderPlaylist(Álbuns, false, "album")}

      <Text style={styles.sectionTitle}>Playlists</Text>
      {renderPlaylist(playlists, false, "playlist")}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    marginTop: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ADD84B",
  },
  profileLink: {
    backgroundColor: "#4380CF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 150,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "regular",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6c757d",
    marginBottom: 10,
    gap: 200
  },
  itemCard: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 120,
    marginBottom: 80
  },
  itemImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1, // Garantir que seja quadrada
    borderRadius: 5,
  },
  artistImage: {
    borderRadius: 9999, // Um valor muito alto para garantir que fique circular
    overflow: "hidden", // Garante que o conteúdo respeite as bordas arredondadas
  },
  itemText: {
    color: "#6c757d",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profileImage: {
    width: 30,
    height: 30
  }
});

export default TelaHome;