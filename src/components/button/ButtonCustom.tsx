import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, type PropsWithChildren } from 'react'

type ButtonCustomProps = PropsWithChildren<{
  onPress: () => void
}>

const ButtonCustom: FC<ButtonCustomProps> = ({ onPress, children }) => {
  return (
  <TouchableOpacity onPress={ onPress } style={ styles.button }>
    { children }
  </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
})