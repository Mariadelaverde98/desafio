import { Image } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import TextNoEstasSola from '../components/TextNoEstasSola'
import ScreenInfo from '../components/ScreenInfo'
import Container from '../components/Container'


const NecesitanTuVoz = () => {
  return (
    <Layout>
      <Image
        style={{ width: '100%' }}
        source={require('../img/foto2.png')}
      />
      <TextNoEstasSola>
        SI CONOCES UN CASO DE VIOLENCIA DE GÉNERO, ACTÚA.
      </TextNoEstasSola>

      <ScreenInfo>
        ¿Tienes una familiar o amiga que se encuentra en esta situación? Está en tu mano el poder ayudarla.
      </ScreenInfo>

      <Container title={'Denuncia'} buttonText={'CÓMO DENUNCIAR'}>
        Si has presenciado un episodio de malos tratos tienes derecho a interponer una denuncia.      </Container>

      <Container title={'Testifica a favor de la víctima'} buttonText={'CÓMO TESTIFICAR'}>
        Declara a favor de la víctima cuando sea ésta quien presenta la denuncia.
      </Container>

      <Container title={'Solicita una orden de protección'} buttonText={'CÓMO SOLICITARLA'}>
        Solo podrán solicitar la orden de protección judicial los familiares directos de la víctima o convivientes.
      </Container>

      <Container title={'Sirve de apoyo'} buttonText={'QUIERO SERVIR DE APOYO'}>
        Crea una red segura entre familiares y amistades cercanas para mantener el contacto en todo momento.
      </Container>

    </Layout>
  )
}

export default NecesitanTuVoz