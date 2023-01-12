import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Home from './screens/Home';
import Chat from './screens/Chat';

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
          headerTitle: (props) => <LogoTitle {...props}/>
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
            title: 'Chat',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: '#000', marginRight: 20, fontSize: 15 }}>Atrás</Text>
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
    color: '#000', 
    marginRight: 20, 
    fontSize: 15,
    backgroundColor: 'red',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
})