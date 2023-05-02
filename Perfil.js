import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import App from './App';

const Perfil = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('./images/descarga.jpeg')}
    />
    <Text style={styles.text}>Junior</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Perfil;