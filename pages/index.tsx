import { NextPage } from 'next'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import ServiceLayout from '@/components/ServiceLayout'
import GoogleLoginBtn from '@/components/GoogleLoginBtn'
import { useAuth } from '@/contexts/auth_user.context'

const IndexPage: NextPage = function () {
  const { signInWithGoogle } = useAuth()
  return (
    <ServiceLayout title="test">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="메인 로고" />
        <Flex justify="center">
          <Heading>#Ringco</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginBtn onClick={signInWithGoogle} />
      </Center>
    </ServiceLayout>
  )
}

export default IndexPage
