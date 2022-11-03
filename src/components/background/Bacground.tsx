import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bacground = () => {
  return <View style={ styles.whiteSheet }></View>
}

export default Bacground

const styles = StyleSheet.create({
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
})