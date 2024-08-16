import { Box, Image, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, Text, VStack } from '@gluestack-ui/themed'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookCheck, Home, Mail, Phone, UserRound } from 'lucide-react-native'
import type { RootStackParamList } from '#/containers/Root/types'

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <VStack gap='$4' h='100%' mt='$16' mx='$4'>
        <VStack
          alignItems='center'
          bg='$white'
          hardShadow='5'
          p='$5'
          rounded='$2xl'
          shadowOpacity='$10'
        >
          <Box
            bg='$trueGray200'
            h='$32'
            overflow='hidden'
            rounded='$full'
            w='$32'

          >
            <Image alt='Avatar' h='100%' source={require('#/assets/images/person.png')} w='100%' />
          </Box>
          <Text fontSize='$xl' fontWeight='bold' mt='$3'>#test_user</Text>
          <Text color='$trueGray500' fontSize='$md' mt='$1'>Austin, TX | Torrance, CA | Denver, CO</Text>
        </VStack>
        <VStack
          bg='$white'
          gap='$5'
          hardShadow='5'
          px='$5'
          py='$8'
          rounded='$2xl'
          shadowOpacity='$10'
        >
          <Input borderColor='$trueGray300' variant='underlined'>
            <InputSlot pr='$1'>
              <InputIcon as={UserRound} />
            </InputSlot>
            <InputField placeholder='Full Name' />
          </Input>
          <Input borderColor='$trueGray300' variant='underlined'>
            <InputSlot pr='$1'>
              <InputIcon as={Home} />
            </InputSlot>
            <InputField placeholder='Address' />
          </Input>
          <Input borderColor='$trueGray300' variant='underlined'>
            <InputSlot pr='$1'>
              <InputIcon as={Phone} />
            </InputSlot>
            <InputField placeholder='Phone Number' />
          </Input>
          <Input borderColor='$trueGray300' variant='underlined'>
            <InputSlot pr='$1'>
              <InputIcon as={Mail} />
            </InputSlot>
            <InputField placeholder='Email' />
          </Input>
          <Input borderColor='$trueGray300' variant='underlined'>
            <InputSlot pr='$1'>
              <InputIcon as={BookCheck} />
            </InputSlot>
            <InputField placeholder='Real Estate Licenses' />
          </Input>
        </VStack>
      </VStack>
    </KeyboardAvoidingView>
  )
}

export default Profile
