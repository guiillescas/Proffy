import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

function NothingToShow() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ops, parece que não tem nada por aqui!</Text>
    </View>
  )
}

export default NothingToShow