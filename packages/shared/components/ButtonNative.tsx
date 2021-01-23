import React from 'react'
import { Text, View } from 'react-native'

export interface ButtonProps {
  children?: any
}

export const ButtonNative: React.FC<ButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}
