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


const Signup = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigator = useNavigation<StackNavigationProps>()

  return (
    <View style={ styles.container }>
      <ImageBack />
      <Bacground />
      <SafeAreaView style={ styles.form }>
        <Text style={ styles.title }>Signup</Text>
        <Input 
          value= { email }
          onChange={ (value: onChangeinputValue): void => setEmail(value.nativeEvent.text) }
          {...FIELDS_CUSTOM.EMAIL_ADDRESS}
        />
        <Input 
          value={ password }
          onChange={ (value: onChangeinputValue): void => setPassword(value.nativeEvent.text) }
          {...FIELDS_CUSTOM.PASSWORD}
        />
        <ButtonCustom onPress={() => {}}>
          <Text style={ styles.buttonText }>Signup</Text>
        </ButtonCustom>
        <View style={ styles.registerRedirectionContainer }>
          <Text style={ styles.text }>Do you have a account? </Text>
          <TouchableOpacity onPress={() => navigator.navigate('login')} >
            <Text style={ {...styles.text, color: '#f57c00', fontSize: 15,} }>
            {' '}Login here
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Signup

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  text: {
    color: 'gray',
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