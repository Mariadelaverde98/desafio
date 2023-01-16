import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import ContainerCTD from '../components/ContainerCTD'
import TextNoEstasSola from '../components/TextNoEstasSola'
import ScreenInfo from '../components/ScreenInfo'
import Map from '../components/Map'


const RecursosSN = () => {

  const [isMarker, setIsMarker] = useState(false)
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.920320,
    longitude: -3.638262,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  return (
    <Layout>
      <Map mapRegion={mapRegion} isMarker={isMarker} />
      <TextNoEstasSola>
        RECURSOS Y AYUDAS EN LA SIERRA NORTE.
      </TextNoEstasSola>

      <ScreenInfo>
        Pincha en el mapa interactivo de arriba si quieres descubrir puntos cercanos a ti.
      </ScreenInfo>
      <ScreenInfo>
        Si prefieres, aquí tienes el listado de colaboradores:
      </ScreenInfo>

      <ContainerCTD>
        Entidades colaboradoras
      </ContainerCTD>

      <ContainerCTD>
        Refugios de emergencia
      </ContainerCTD>

      <ContainerCTD>
        Parada de taxis colaboradores
      </ContainerCTD>

      <ContainerCTD>
        Alojamiento protegido
      </ContainerCTD>

      <ContainerCTD>
        Intervención especializada presencial
      </ContainerCTD>

    </Layout>
  )
}

export default RecursosSN