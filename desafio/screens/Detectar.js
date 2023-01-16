import { Image } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import TextNoEstasSola from '../components/TextNoEstasSola'
import ScreenInfo from '../components/ScreenInfo'
import Container from '../components/Container'

const Detectar = () => {
  return (
    <Layout>
      <Image
        style={{width: '100%'}}
        source={require('../img/foto4.png')}
      />
      <TextNoEstasSola>
        ¿Cómo detectar si eres víctima de violencia de género?
      </TextNoEstasSola>

      <ScreenInfo>
        Existen diferentes tipos de maltrato y cada uno de ellos tiene sus propias señales.
      </ScreenInfo>

      <Container title={'Violecia fisica'} buttonText={'VER SEÑALES'}>
        Causa daños físicos o lesiones, incluye golpes, empujones, quemaduras,...
      </Container>

      <Container title={'Violecia sexual'} buttonText={'VER SEÑALES'}>
        Cualquier acto sexual no deseado o consensuado.
      </Container>

      <Container title={'Violecia psicológica'} buttonText={'VER SEÑALES'}>
        Comportamientos que afectan a la salud mental y emocional de una persona.
      </Container>

      <Container title={'Violecia económica'} buttonText={'VER SEÑALES'}>
        Control económico y restricción a recursos económicos para dañar a otra persona.
      </Container>

      <Container title={'Violencia obstétrica'} buttonText={'VER SEÑALES'}>
        Violencia contra la salud sexual o reproductiva.
      </Container>

      <Container title={'Violencia en las redes sociales'} buttonText={'VER SEÑALES'}>
        Uso de las redes sociales y tecnologías de la información para perpetrar actos de violencia.
      </Container>

    </Layout>
  )
}

export default Detectar