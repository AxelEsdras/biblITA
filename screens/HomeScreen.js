// HomeScreen.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomButton  from './CustomButton';
import  CustomButton2  from './CustomButton2';
import { MaterialIcons } from '@expo/vector-icons';

const background = require('../assets/fondo.jpg');

const Drawer = createDrawerNavigator();

const BibliotecarioScreen = () => (
  <ImageBackground source={background} style={styles.background}>
    <View style={styles.container}>
      <CustomButton title="Gestión de Libros" onPress={() => {}} color="white" />
      <View style={styles.space} /> {/* Espacio entre los botones */}
      <CustomButton title="Préstamos" onPress={() => {}} color="white" />
      <View style={styles.bottomContainer}>
        <CustomButton2 title="Cerrar Sesión" onPress={() => {}} color="red" />
      </View>
    </View>
  </ImageBackground>
);

const PrestatarioScreen = () => (
  <ImageBackground source={background} style={styles.background}>
    <View style={styles.container}>
      <CustomButton title="Explorar Libros" onPress={() => {}} color="white" />
      <View style={styles.bottomContainer}>
        <CustomButton2 title="Cerrar Sesión" onPress={() => {}} color="red"/>
      </View>
    </View>
  </ImageBackground>
);

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Bibliotecario">
        <Drawer.Screen name="Bibliotecario" component={BibliotecarioScreen} />
        <Drawer.Screen name="Prestatario" component={PrestatarioScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    marginBottom: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center', // Alinea el botón al centro horizontalmente
  },
});

export default HomeScreen;
