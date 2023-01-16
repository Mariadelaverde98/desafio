import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Container = ({ children, title, buttonText, goTo }) => {

    const navigation = useNavigation()

    function handlePress() {
        if (goTo) {
            navigation.navigate(goTo)
        }else{
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>
                {title}
            </Text>
            <Text style={styles.containerText}>
                {children}
            </Text>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 16,
        marginRight: 16,
        display: 'flex',
        width: '92%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: '#E20613',
        borderWidth: 2,
    },
    containerTitle: {
        marginTop: 13,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        letterSpacing: 0.325
    },
    containerText: {
        marginTop: 10,
        marginLeft: 16,
        marginRight: 16,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.65
    },
    button: {
        height: 48,
        alignSelf: 'flex-end',
        backgroundColor: '#E20613',
        textAlign: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 18,
        marginBottom: 18,
        marginTop: 18
    },
    buttonText: {
        lineHeight: 22,
        textTransform: 'uppercase',
        color: '#fff'
    }
})

export default Container