import React from 'react'
import { View, ImageBackground, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background-blue.png'

import styles from './styles'

function GiveClasses() {
  const { goBack, navigate } = useNavigation()

  function handleNavigateToWebPage() {
    navigate('https://google.com')
  }

  function handleNavigateBack() {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >

      <Text style={styles.title}>Quer ser um Proffy?</Text>
      <Text style={styles.description}>
        Para começar, você precisa se cadastrar como professor na nossa plataforma web!
      </Text>
      </ImageBackground>

      <RectButton 
        onPress={() => { Linking.openURL('http://localhost:3000/give-classes') }}
        style={[styles.button, styles.registerButton]}
      >
        <Text style={styles.buttonText}>Ir para a web</Text>
      </RectButton>

      <RectButton 
        onPress={handleNavigateBack}
        style={[styles.button, styles.backButton]}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses