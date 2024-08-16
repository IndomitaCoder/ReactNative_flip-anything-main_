import { Box, HStack, StatusBar, Text } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native'

const AppBar: React.FC = () => {
  return (
    <Box bg='$primary500'>
      <StatusBar />
      <SafeAreaView>
        <HStack
          bg='$primary500'
          justifyContent='space-between'
          px={10}
          py={10}
          w='100%'
        >
          <HStack />
          <HStack>
            <Text color='white' fontSize={18} fontWeight='600'>FlipAnything</Text>
          </HStack>
          <HStack />
        </HStack>
      </SafeAreaView>
    </Box>
  )
}

export default AppBar
