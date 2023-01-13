import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, RefreshControl } from 'react-native';
import { addLocation } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Home = () => {
    const [refresh, setRefresh] = useState(false)
    const [isUserLocation, setIsUserLocation] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.7882,
        longitude: -122.4324,
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
        setIsUserLocation(true)
    }

    // async function getLocation() {
    //     await userLocation()
    //     addLocation(mapRegion)
    // }
    
    async function refreshing() {
        setRefresh(true)
        await userLocation()
        addLocation(mapRegion)
    }

    // useEffect(() => {
    //     getLocation()
    //     setIsUserLocation(false)
    // }, []);

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
                <MapView
                    style={styles.map}
                    region={mapRegion}>
                    <Marker
                        title='Marker'
                        coordinate={mapRegion}
                    />
                </MapView>
                <Text style={styles.contentTitle}>En la Sierra Norte no estás sola</Text>
                <Text style={styles.contentText}>Este programa asistencial te ofrece toda la información y los recursos de los que dispones si eres víctima de violencia de género de forma totalmente confidencial. </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Derechos y recursos disponibles para las víctimas.</Text>
                    <Image
                        style={styles.buttonImg}
                        source={require('../img/logo_cruz_roja.jpg')}
                    />
                    <Text style={styles.buttonInfo}>En este apartado encontrarás todos los recursos a tu disposición.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Derechos y recursos disponibles para las víctimas.</Text>
                    <Image
                        style={styles.buttonImg}
                        source={require('../img/logo_cruz_roja.jpg')}
                    />
                    <Text style={styles.buttonInfo}>En este apartado encontrarás todos los recursos a tu disposición.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>Derechos y recursos disponibles para las víctimas.</Text>
                    <Image
                        style={styles.buttonImg}
                        source={require('../img/logo_cruz_roja.jpg')}
                    />
                    <Text style={styles.buttonInfo}>En este apartado encontrarás todos los recursos a tu disposición.</Text>
                </TouchableOpacity>

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
    map: {
        width: '100%',
        height: 202,
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
        marginTop: 20,
        marginBottom: 20,
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