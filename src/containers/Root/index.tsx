import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '#/containers/Login'
import Main from '#/containers/Main'
import Profile from '#/containers/Profile'
import SignUp from '#/containers/SignUp'

const Root: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen component={Main} name='Home' />
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={SignUp} name='SignUp' />
      <Stack.Screen component={Profile} name='Profile' />
    </Stack.Navigator>
  )
}

export default Root
 