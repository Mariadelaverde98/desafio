import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'

const Map = ({ mapRegion, isMarker }) => {

    return (
        <MapView
            style={styles.map}
            region={mapRegion}
        >
            {isMarker && (<Marker
                title='Ubicacion'
                coordinate={mapRegion}
            />)}
            <Polyline
                coordinates={[
                    { latitude: 40.983981, longitude: -3.843722 },
                    { latitude: 41.165151, longitude: -3.556704 },
                    { latitude: 40.999529, longitude: -3.396029 },
                    { latitude: 40.825177, longitude: -3.481173 },
                    { latitude: 40.733666, longitude: -3.542971 },
                    { latitude: 40.794514, longitude: -3.719439 },
                    { latitude: 40.851224, longitude: -3.801622 },
                    { latitude: 40.793462, longitude: -3.976900 },
                    { latitude: 40.983981, longitude: -3.843722 },
                ]}
                strokeColor="gray" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                    '#B24112',
                    '#E5845C',
                    '#238C23',
                    '#7F0000'
                ]}
                strokeWidth={3}
                lineDashPattern={[1, 6]}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 202,
    },
})

export default Map