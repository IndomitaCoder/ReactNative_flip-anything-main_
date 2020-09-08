import { Button, ButtonText, Center, Input, InputField, VStack } from '@gluestack-ui/themed'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Image } from 'react-native'
import type { RootStackParamList } from '#/containers/Root/types'

type MainProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <Center
      flex={1}
      p={32}
    >
      <VStack
        gap={48}
        pb={128}
        w='100%'
      >
        <VStack
          alignItems='center'
          gap={24}
        >
          <Image
            alt='FlipAnything'
            source={require('../../assets/images/logo.png')}
          />
          <Input
            borderColor='$trueGray300'
            variant='rounded'
          >
            <InputField placeholder='Search by city or state' />
          </Input>
        </VStack>
        <VStack gap={16}>
          <Button
            $active-bg='$cyan400'
            bg='$cyan500'
            borderRadius='$full'
            hardShadow='5'
            onPress={() => { navigation.navigate('Login') }}
          >
            <ButtonText color='$white'>Show my properties</ButtonText>
          </Button>
          <Button
            $active-bg='$cyan400'
            bg='$cyan500'
            borderRadius='$full'
            hardShadow='5'
          >
            <ButtonText>Add property</ButtonText>
          </Button>
          <Button
            $active-bg='$cyan400'
            bg='$cyan500'
            borderRadius='$full'
            hardShadow='5'
          >
            <ButtonText>Recently added to Market Place</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}

export default Main
 