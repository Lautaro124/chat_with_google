import { Image, StyleSheet } from 'react-native'
import React from 'react'
const backgroundImage = require('../../assets/backImage.png')


const ImageBack = () => {
  return <Image source={ backgroundImage } style={ styles.backImage }/>
}

export default ImageBack

const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    height: 360,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
})