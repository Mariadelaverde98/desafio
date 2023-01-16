import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import ContainerCTD from '../components/ContainerCTD'

const ConoceTusDerechos = () => {
  return (
    <Layout>
      <Image
        style={styles.headerImg}
        source={require('../img/foto3.png')}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.noEstasSola}>CONOCE TUS DERECHOS.</Text>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.textoHome1}>Tus derechos como mujer son esenciales. Conoce cuáles son y como Cruz Roja puede ayudarte.</Text>
      </View>

      <ContainerCTD>
        Derecho a la información
      </ContainerCTD>

      <ContainerCTD>
        Derecho a la asistencia social integral
      </ContainerCTD>

      <ContainerCTD>
        Derecho a la asistencia jurídica inmediata, gratuita y especializada
      </ContainerCTD>

      <ContainerCTD>
        Derecho a la salud física y mental
      </ContainerCTD>

      <ContainerCTD>
        Derecho laboral
      </ContainerCTD>
    </Layout>
  )
}

const styles = StyleSheet.create({
  headerImg: {
    width: '100%',
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
  },
  noEstasSola: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    color: '#E20613',
    lineHeight: 26,
    letterSpacing: 0.325,
  },
  TextContainer: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  textoHome1: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.325,
  },
})

export default ConoceTusDerechos