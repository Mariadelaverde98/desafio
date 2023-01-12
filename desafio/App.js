import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { addLocation } from './api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [firstTime, setFirstTime] = useState(false);
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
  }

  async function getLocation() {
    await userLocation()
    addLocation(mapRegion)
  }

  useEffect(() => {
    userLocation()
  }, []);

  useEffect(() => {
    if (firstTime) getLocation();
  }, [firstTime]);

  return (
    <View style={styles.container}>
      <Text>Yuhuuuuuuu!!!!!!</Text>
      <MapView
        style={styles.map}
        region={mapRegion}>
        <Marker
          title='Marker'
          coordinate={mapRegion}
        />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
});
