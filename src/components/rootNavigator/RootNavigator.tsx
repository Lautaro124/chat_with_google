import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import ChatStack from "../chatStack/ChatStack"

const RootNavigator = () =>{
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )
}

export default RootNavigator