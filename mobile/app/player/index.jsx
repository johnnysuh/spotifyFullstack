import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Capa do Álbum */}
      <Image
        source={{ uri: 'https://monkeybuzz.com.br/wp-content/uploads/2019/06/bjork-homogenic.jpg' }}
        style={styles.albumCover}
      />

      {/* Informações da Música */}
      <View style={styles.infoContainer}>
        <Text style={styles.songTitle}>Jóga</Text>
        <Text style={styles.artistName}>Björk</Text>
      </View>

      {/* Barra de Progresso */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBar} />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1:42</Text>
          <Text style={styles.timeText}>3:19</Text>
        </View>
      </View>

      {/* Controles de Reprodução */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <FontAwesome name="backward" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="play" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="forward" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  albumCover: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  artistName: {
    fontSize: 18,
    color: '#666',
  },
  progressContainer: {
    width: '90%',
    marginVertical: 20,
  },
  progressBarBackground: {
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    width: '40%', // Progresso fictício
    height: '100%',
    backgroundColor: '#3498db',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
});

export default PlayerScreen;