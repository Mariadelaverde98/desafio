import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ContainerCTD = ({ children }) => {
  return (
    <View style={styles.containerCTD}>
      <Image
        style={styles.buttonImg}
        source={require('../img/cruz-roja.png')}
      />
      <Text style={styles.containerText}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCTD: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  containerText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontStyle: 'normal',
    textAlign: 'left',
    borderBottomColor: '#E20613',
    borderBottomWidth: 5,
    paddingBottom: 8
  },

})

export default ContainerCTD