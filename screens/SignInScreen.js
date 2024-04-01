// SignInScreen.js
import React from 'react';
import { View, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const background = require('../assets/library_background.jpg');

const SignInScreen = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <Button title="Iniciar sesión" onPress={() => {}} />

      </View>
    </ImageBackground>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default SignInScreen;
