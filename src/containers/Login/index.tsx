import { Button, ButtonText, Box, Heading, KeyboardAvoidingView, Icon, Input, InputIcon, InputField, InputSlot, Text, VStack } from '@gluestack-ui/themed'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ArrowRight, Mail, KeyRound } from 'lucide-react-native'
import { Image } from 'react-native'
import type { RootStackParamList } from '#/containers/Root/types'

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <VStack h='100%'>
        <VStack alignItems='center' h='$1/4' justifyContent='flex-end' pb='$9'>
          <Image alt='FlipAnything' source={require('../../assets/images/logo.png')} />
        </VStack>
        <VStack
          bg='$white'
          h='$3/4'
          hardShadow='5'
          mx='$2'
          pt='$8'
          px='$7'
          shadowOpacity={0.1}
          shadowRadius={20}
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        >
          <VStack mb='$12'>
            <Heading bold size='2xl'>Login</Heading>
            <Text color='$trueGray500' fontWeight='$light' size='lg'>
              Please sign in to continue
            </Text>
          </VStack>
          <VStack space='2xl'>
            <Input borderColor='$trueGray300' variant='underlined'>
              <InputSlot pr='$1'>
                <InputIcon as={Mail} />
              </InputSlot>
              <InputField placeholder='EMAIL' />
            </Input>
            <Input borderColor='$trueGray300' variant='underlined'>
              <InputSlot pr='$1'>
                <InputIcon as={KeyRound} />
              </InputSlot>
              <InputField placeholder='PASSWORD' />
            </Input>
            <Box alignItems='flex-end'>
              <Button
                $active-bg='$cyan400'
                bg='$cyan500'
                borderRadius='$full'
                hardShadow='5'
                my='$4'
                w='$32'
              >
                <ButtonText>LOGIN</ButtonText>
                <Icon as={ArrowRight} color='$white' ml='$1' />
              </Button>
            </Box>
          </VStack>
          <VStack flex={1} justifyContent='flex-end' py='$10'>
            <Button variant='link' onPress={() => { navigation.navigate('SignUp') }}>
              <Text alignSelf='center' color='$trueGray500'>
                {'Don\'t have an account?'}
              </Text>
              <Text color='$cyan500' fontWeight='$medium'> Sign up</Text>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </KeyboardAvoidingView>
  )
}

export default Login
 