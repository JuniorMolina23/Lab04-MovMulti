import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/descarga.jpeg')} style={styles.image} />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Esta es mi primera aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
