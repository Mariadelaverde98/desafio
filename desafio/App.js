import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Home from './screens/Home';
import Chat from './screens/Chat';
import ConoceTusDerechos from './screens/ConoceTusDerechos';
import DerechosYRecursos from './screens/DerechosYRecursos';
import Detectar from './screens/Detectar';
import NecesitanTuVoz from './screens/NecesitanTuVoz';
import RecursosSN from './screens/RecursosSN';
import Voluntarios from './screens/Voluntarios';

function LogoTitle() {
  return (
    <Image
      style={{ width: 130, height: 50 }}
      source={require('./img/logo_cruz_roja.jpg')}
    />
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FBFBFB',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000'
          },
          headerTitleAlign: 'center',
          headerTitle: (props) => <LogoTitle {...props} />
        }}
      >

        <Drawer.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Cruz Roja',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#E20613' },
            headerTitleStyle: { color: '#fff' },
            title: 'Chat',
            headerTitle: 'Ahora estás chateando',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: '#fff', marginRight: 20, fontSize: 15, fontWeight: 'bold' }}>Atrás</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="DerechosYRecursos"
          component={DerechosYRecursos}
          options={({ navigation }) => ({
            title: 'Derechos Y Recursos',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="ConoceTusDerechos"
          component={ConoceTusDerechos}
          options={({ navigation }) => ({
            title: 'Conoce Tus Derechos',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="RecursosSN"
          component={RecursosSN}
          options={({ navigation }) => ({
            title: 'Recursos Sierra Norte',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="NecesitanTuVoz"
          component={NecesitanTuVoz}
          options={({ navigation }) => ({
            title: 'Ellas necesitan tu voz',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="Detectar"
          component={Detectar}
          options={({ navigation }) => ({
            title: '¿Como detectar si eres victima?',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Drawer.Screen
          name="Voluntarios"
          component={Voluntarios}
          options={({ navigation }) => ({
            title: 'Hazte Voluntario',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButton}>Chat</Text>
              </TouchableOpacity>
            )
          })}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  chatButton: {
    color: '#fff',
    marginRight: 20,
    fontSize: 15,
    backgroundColor: 'red',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
})