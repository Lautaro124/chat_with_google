import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData } from 'react-native'
import React, { FC } from 'react'


const Input = ({...props}) => {
  return (
    <TextInput
      style={styles.input}
      { ...props }
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
})