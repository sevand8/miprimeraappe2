import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorldText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔥🔥Hola Mundo🔥🔥</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebba',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 64,
    borderRadius: 10,
    padding: 10,
    borderColor: '#000000',
    borderWidth: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#87e4ff',
  },
})

export default HelloWorldText