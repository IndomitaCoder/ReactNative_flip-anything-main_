/**
 * FlipAnything
 */

import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import Root from '#/containers/Root'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    borderColor: 'transparent'
  }
}

const App: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer theme={theme}>
        <Root />
      </NavigationContainer>
    </GluestackUIProvider>
  )
}

export default App
