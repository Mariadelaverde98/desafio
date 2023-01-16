import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TextNoEstasSola from '../components/TextNoEstasSola'
import ScreenInfo from '../components/ScreenInfo'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'

const Voluntarios = () => {

  const navigation = useNavigation()

  const [isFormSent, setisFormSent] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  function handlePress() {
    setisFormSent(false)
    navigation.navigate('Home')
  }

  function handleSubmit() {
    console.log(user)
    setUser({
      name: '',
      email: ''
    })
    setisFormSent(true)
  }
  if (!isFormSent) {
    return (
      <Layout>
        <Image
          style={{ width: '100%' }}
          source={require('../img/foto2.png')}
        />
        <TextNoEstasSola>
          HAZTE VOLUNTARIO/A DE CRUZ ROJA
        </TextNoEstasSola>

        <ScreenInfo>
          Necesitamos tu colaboración en la Sierra Norte y puedes ayudarnos de muchas maneras.
        </ScreenInfo>
        <ScreenInfo>
          Rellena el siguiente formulario y recibirás toda la información en tu e-mail.
        </ScreenInfo>
        <View style={styles.form}>
          <Text style={styles.label}>
            Nombre
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Escribe aquí tu nombre'
            onChangeText={text => handleChange('name', text)}
            value={user.name}
          />

          <Text style={styles.label}>
            E-mail
          </Text>
          <TextInput
            style={styles.input}
            placeholder='nombre@email.com'
            onChangeText={text => handleChange('email', text)}
            value={user.email}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>
              Enviar Formulario
            </Text>
          </TouchableOpacity>
        </View>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Image
          style={{ width: '100%' }}
          source={require('../img/foto5.png')}
        />
        <TextNoEstasSola>
          GRACIAS POR TU INTERÉS
        </TextNoEstasSola>

        <ScreenInfo>
          Muy pronto recibirás en tu email una breve guía sobre cómo hacerte voluntario/a de Cruz Roja y comenzar a colaborar con nosotros.
        </ScreenInfo>

        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>VOLVER A INICIO</Text>
        </TouchableOpacity>
      </Layout>
    )
  }

}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#E20613',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    height: 48,
    backgroundColor: '#E20613',
    marginBottom: 60,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  buttonText: {
    fontWeight: 'bold',
    letterSpacing: 0.325,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },
})

export default Voluntarios