import React from "react";
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from "react-native";
import { Link } from "@react-navigation/native"; // Certifique-se de usar react-navigation

const playlists = [
  { id: 1, title: "Top Hits", imageUrl: "https://i.pinimg.com/736x/9f/ab/1b/9fab1b3a77c165e340a360f9f858ca27.jpg" },
  { id: 2, title: "Chill Vibes", imageUrl: "https://i.pinimg.com/736x/1e/5f/77/1e5f77a5b721c93418305a84b3e98abe.jpg" },
  { id: 3, title: "Workout", imageUrl: "https://i.pinimg.com/736x/dc/d1/5a/dcd15a285e2bfa29f276b4528df8701f.jpg" },
  { id: 4, title: "Party Mix", imageUrl: "https://i.pinimg.com/736x/46/6a/99/466a997735c4bdaa5914af6b88891275.jpg" },
];

const Artistas = [
  { id: 5, title: "Kendrick Lamar", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022" },
  { id: 6, title: "Beyoncé", imageUrl: "https://i.scdn.co/image/ab67616d00001e02f5220893852002a2a3078bab" },
  { id: 7, title: "Linkin Park", imageUrl: "https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/09/20240905-ovicio-linkin-park.webp?resize=555%2C555&ssl=1" },
  { id: 8, title: "Charli xcx", imageUrl: "https://i.scdn.co/image/ab6761610000e5eb936885667ef44c306483c838" },
];

const Álbuns = [
  { id: 9, title: "gnx", imageUrl: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58" },
  { id: 10, title: "COWBOY CARTER", imageUrl: "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599" },
  { id: 11, title: "From Zero", imageUrl: "https://i.scdn.co/image/ab67616d0000b273b11a5489e8cb11dd22b930a0" },
  { id: 12, title: "brat", imageUrl: "https://i.scdn.co/image/ab67616d0000b27388e3822cccfb8f2832c70c2e" },
];

const Músicas = [
  { id: 13, title: "HOWLING", imageUrl: "https://i.scdn.co/image/ab67616d00001e02f3e7b35d19758748f642299f" },
  { id: 14, title: "fue mejor (feat. SZA)", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e08b58aa5d1e7ba01bc45c53" },
  { id: 15, title: "Ex-Factor", imageUrl: "https://i.scdn.co/image/ab67616d0000b273e08b1250db5f75643f1508c9" },
  { id: 16, title: "Hit Me Where It Hurts", imageUrl: "https://i.scdn.co/image/ab67616d0000b2737d983e7bf67c2806218c2759" },
];

const TelaHome = () => {
  const renderPlaylist = (data, isArtist = false) => (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{ alignItems: "flex-start" }}
      renderItem={({ item }) => (
        <Pressable style={styles.itemCard}>
          <Image
            style={[styles.itemImage, isArtist && styles.artistImage]}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao echo</Text>
        <Link to="/telaPerfil" style={styles.profileLink}>
          <Text style={styles.profileText}>Perfil</Text>
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Músicas</Text>
      {renderPlaylist(Músicas)}

      <Text style={styles.sectionTitle}>Artistas</Text>
      {renderPlaylist(Artistas, true)}

      <Text style={styles.sectionTitle}>Álbuns</Text>
      {renderPlaylist(Álbuns)}

      <Text style={styles.sectionTitle}>Playlists</Text>
      {renderPlaylist(playlists)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b071b",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#5732f1",
  },
  profileLink: {
    backgroundColor: "#5732f1",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 80,
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  itemCard: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    width: 120,
  },
  itemImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5,
  },
  artistImage: {
    borderRadius: 60,
  },
  itemText: {
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default TelaHome;