import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View style={styles.chat}>
      <View>
        <Text style={styles.msg}>¡Hola! Bienvenida al chat de Cruz Roja Sierra Norte.</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder='Escribe aqui...'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '95%',
    marginTop: 20,
    marginBottom: 20,
  },
  msg: {
    alignSelf: 'flex-start',
    fontSize: 20,
    textAlign: 'center',
    borderColor: '#E20613',
    borderWidth: 0.72973,
    borderTopRightRadius: 41.5946,
    borderBottomRightRadius: 41.5946,
    lineHeight: 22,
    fontSize: 16,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 32,
    paddingRight: 32,
  },
  input: {
    width:'100%',
    height: 80,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingLeft: 16,
    paddingBottom: 33,
  }
})

export default Chat