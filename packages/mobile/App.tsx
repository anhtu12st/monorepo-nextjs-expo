import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonNative } from '@anhtu12st/shared'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello Anh Tu</Text>
      <ButtonNative>Anh Tu</ButtonNative>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
