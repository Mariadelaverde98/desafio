import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { addLocation } from '../api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Home = () => {

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
        console.log('hola1')
        setIsUserLocation(true)
    }

    async function getLocation() {
        await userLocation()
        console.log('hola2')
        if (isUserLocation) addLocation(mapRegion)
    }

    useEffect(() => {
        getLocation()
        setIsUserLocation(false)
    }, []);

    return (
        <View style={styles.container}>
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
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        width:'90%'
    },
    contentText: {
        fontSize: 14,
        width:'90%',
        textAlign: 'left',
    }
});

export default Home