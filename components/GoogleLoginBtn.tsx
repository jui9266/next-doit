import { Box, Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  onClick: () => void
}

const GoogleLoginBtn = function ({ onClick }: Props) {
  return (
    <Box>
      <Button
        size="lg"
        width="full"
        mx="6"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        onClick={onClick}
      >
        Google 계정으로 시작하기
      </Button>
    </Box>
  )
}
export default GoogleLoginBtn
