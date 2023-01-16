import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import TextNoEstasSola from '../components/TextNoEstasSola'
import ScreenInfo from '../components/ScreenInfo'
import Container from '../components/Container'

const DerechosYRecursos = () => {
  return (
    <Layout>
      <Image
        style={styles.headerImg}
        source={require('../img/foto1.png')}
      />
      <TextNoEstasSola>
        TUS DERECHOS SON LO MÁS IMPORTANTE.
      </TextNoEstasSola>

      <ScreenInfo>
        Aquí encontrarás todos los recursos e información que necesitas a la hora de actuar.
      </ScreenInfo>

      <Container title={'Quiero denunciar'} buttonText={'CÓMO DENUNCIAR'}>
        Descubre todas las formas de presentar una denuncia si sufres violencia de género.
      </Container>

      <Container title={'Recursos y ayudas Sierra Norte'} buttonText={'VER RECURSOS'} goTo={'RecursosSN'}>
        Te mostramos una lista de colaboradores avalados por Cruz Roja en la Sierra Norte de Madrid.
      </Container>

      <Container title={'Recursos y ayuda generales'} buttonText={'QUIERO SABER MÁS'}>
        No estás sola. Conoce más acerca de todas las ayudas y recursos a tu disposición.
      </Container>

      <Container title={'Conoce tus derechos'} buttonText={'CONOCER MIS DERECHOS'} goTo={'ConoceTusDerechos'}>
        Tus derechos como mujer son esenciales. Conoce cuáles son y cómo Cruz Roja puede ayudarte.
      </Container>

    </Layout>
  )
}

const styles = StyleSheet.create({
  headerImg: {
    width: '100%',
  }
})

export default DerechosYRecursos