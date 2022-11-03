import { StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import ButtonCustom from '../../components/button/ButtonCustom'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../../utils/navigationStack'

const Home = () => {

  const navigation = useNavigation<StackNavigationProps>()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Search</Text>,
      headerRight: () => <Text>Profile</Text>,
    })
  }, [navigation])

  return (
    <SafeAreaView style={ styles.container }>
      <Text>Home</Text>
      <ButtonCustom onPress={ () => navigation.navigate('chat') }>
        <Text style={ styles.buttonText } >Go chat</Text>
      </ButtonCustom>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})