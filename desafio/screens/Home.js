import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { addLocation } from '../api';
import * as Location from 'expo-location';
import Map from '../components/Map';
import TextNoEstasSola from '../components/TextNoEstasSola';
import ScreenInfo from '../components/ScreenInfo';
import Container from '../components/Container';

const Home = () => {
    const [refresh, setRefresh] = useState(false)
    const [isMarker, setIsMarker] = useState(false)
    const [mapRegion, setMapRegion] = useState({
        latitude: 40.920320,
        longitude: -3.638262,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
        console.log(location.coords.latitude, location.coords.longitude)
    }

    async function refreshing() {
        setRefresh(true)
        setIsMarker(true)
        await userLocation()
        addLocation(mapRegion)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                refreshControl={<RefreshControl
                    refreshing={false}
                    onRefresh={() => {
                        refreshing()
                    }}
                />}
            >
                <Map mapRegion={mapRegion} isMarker={isMarker} />
                <TextNoEstasSola>
                    EN LA SIERRA NORTE NO ESTÁS SOLA
                </TextNoEstasSola>
                <ScreenInfo>
                    Programa asistencial para mujeres víctimas de violencia de género en la Sierra Norte de Madrid.
                </ScreenInfo>

                <Container title={'Derechos y recursos disponibles para las víctimas.'} buttonText={'VER MÁS'} goTo={'DerechosYRecursos'}>
                    En este apartado encontrarás todos los recursos a tu disposición de forma totalmente confidencial.
                </Container>

                <Container title={'Ellas necesitan tu voz.'} buttonText={'CÓMO ACTUAR'} goTo={'NecesitanTuVoz'}>
                    Si conoces alguna mujer que pueda estar siendo víctima de violencia de género tu ayuda puede salvarla.
                </Container>

                <Container title={'¿Cómo detectar si eres víctima de violencia de género?'} buttonText={'QUIERO SABER MÁS'} goTo={'Detectar'}>
                    Señales que pueden dar respuesta a esta pregunta.
                </Container>

                <Container title={'Necesitamos tu ayuda como voluntario/a de Cruz Roja'} buttonText={'COMO COLABORAR'} goTo={'Voluntarios'}>
                    Puedes ayudarnos de muchas maneras diferentes.
                </Container>

                <StatusBar style="auto" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%'
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'left',
        width: '90%'
    },
    contentText: {
        fontSize: 14,
        width: '90%',
        textAlign: 'left',
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 16,
        marginRight: 16,
        padding: 10,
        backgroundColor: '#D9D9D9',
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 208,
    },
    buttonInfo: {
        fontSize: 14,
        alignSelf: 'flex-end',
        width: 223,
    },
    buttonImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
    }
});

export default Home