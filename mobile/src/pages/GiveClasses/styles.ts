import { StyleSheet } from 'react-native'

// Styled Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240
  },

  button: {
    marginVertical: 10,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  },

  registerButton: {
    backgroundColor: '#04d361',
  },

  backButton: {
    backgroundColor: '#9871f5',
  }
})

export default styles