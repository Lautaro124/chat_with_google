import Chat from "../../screens/chat/Chat"
import Login from "../../screens/login/Login"
import Signup from "../../screens/signup/Signup"
import Home from "../../screens/home/Home"
import { Stack } from "../../utils/navigationStack"

const ChatStack = () => {
  return (
  <Stack.Navigator 
    screenOptions={{ headerShown: false }} 
    initialRouteName='login'
    >
    <Stack.Screen 
      options={{ headerShown: true }} 
      name='chat' 
      component={ Chat } 
    />
    <Stack.Screen name='login' component={ Login } />
    <Stack.Screen name='signup' component={ Signup } />
    <Stack.Screen 
      options={{ headerShown: true }} 
      name='home' 
      component={ Home } 
    />
  </Stack.Navigator>
  )
}

export default ChatStack