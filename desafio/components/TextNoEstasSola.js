import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextNoEstasSola = ({children}) => {
    return (
        <Text style={styles.noEstasSola}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
    },
    noEstasSola: {
        alignSelf: 'flex-start',
        marginTop: 16,
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'left',
        color: '#E20613',
        lineHeight: 26,
        letterSpacing: 0.325,
    },
})

export default TextNoEstasSola