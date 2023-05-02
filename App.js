import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Perfil from './Perfil';

const nombre = "Junior"
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image
          source={require('./images/descarga.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Junior</Text>
          <Text style={styles.subtext}>Hola esta es mi descripcion</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
        />
      </View>
      <DrawerItem
        label="Inicio"
        onPress={() => props.navigation.navigate('Inicio')}
      />
      <DrawerItem
        label="Mi Perfil"
        onPress={() => props.navigation.navigate('Perfil')}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin:10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});