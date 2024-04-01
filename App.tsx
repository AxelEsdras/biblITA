// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SignIn">
        <Drawer.Screen name="SignIn" component={SignInScreen} options={{ title: 'Iniciar Sesión' }} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Registrarse' }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
