import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Input from '../../components/input/Input'
import ButtonCustom from '../../components/button/ButtonCustom'
import Bacground from '../../components/background/Bacground'
import ImageBack from '../../components/imageBack/ImageBack'
import { FIELDS_CUSTOM } from '../../utils/fieldsProps'
import { onChangeinputValue } from '../../utils/utils'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProps } from '../../utils/navigationStack'
import THEMES from '../../utils/customThemes'


const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigator = useNavigation<StackNavigationProps>()

  return (
    <View style={ styles.container }>
      <ImageBack />
      <Bacground />
      <SafeAreaView style={ styles.form }>
        <Text style={ styles.title }>Login</Text>
        <Input 
          onChange={ (value: onChangeinputValue): void => setEmail(value.nativeEvent.text) }
          value= { email }
          {...FIELDS_CUSTOM.EMAIL_ADDRESS}
        />
        <Input 
          onChange={ (value: onChangeinputValue): void => setPassword(value.nativeEvent.text) }
          value={ password }
          {...FIELDS_CUSTOM.PASSWORD}
        />
        <ButtonCustom onPress={() => navigator.navigate('home')}>
          <Text style={ styles.buttonText }>Login</Text>
        </ButtonCustom>
        <View style={ styles.registerRedirectionContainer }>
          <Text style={ styles.text }>Don’t have a account? </Text>
          <TouchableOpacity onPress={() => navigator.navigate('signup')} >
            <Text style={ {...styles.text, color: THEMES.ORANGE, fontSize: 15,} }>
            {' '}Sign up here
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Login

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  THEMES.WHITE,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color:  THEMES.ORANGE,
    alignSelf: "center",
    paddingBottom: 24,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color:  THEMES.WHITE,
  },
  text: {
    color: THEMES.GRAY,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  registerRedirectionContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
})