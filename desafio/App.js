import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> </Text>
      <Text style={styles.henalu}>
        hola viti wapo!!! eyyyy
      </Text>
      <TextInput placeholder='Escribe algo...' ></TextInput>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    textDecorationColor: 'white',
    color: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: "white",
    fontSize: "100px"
  },

  henalu: {
    color: 'blue',
    fontSize: '100px'
  }

});
