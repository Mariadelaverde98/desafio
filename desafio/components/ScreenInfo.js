import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ScreenInfo = ({ children }) => {
    return (
        <Text style={styles.screenInfo}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    screenInfo: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        alignSelf: 'flex-start',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.325,
    }

})

export default ScreenInfo