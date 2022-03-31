import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { AiFillYoutube, AiFillFacebook } from 'react-icons/ai'

function Footer() {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      right: 0,
    }}>
      <Box
        bg={useColorModeValue('gray.300', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          >
            <Box>
              <Text noOfLines={2}><b>WE LOVE CREATING ADDICTS!</b></Text>
              <Text>Thank you to all our customers since 2016. See you on the courts!</Text>
            </Box>
            <Stack direction={'row'} spacing={6}>
              <IconButton as="a" aria-label='Email' href='mailto:david@thirdshotdrop.ca' variant={'ghost'}>
                <MdEmail />
              </IconButton>
              <IconButton aria-label='Facebook' as="a" href='https://www.facebook.com/thedavidbussiere' variant={'ghost'}>
                <AiFillFacebook />
              </IconButton>
              <IconButton aria-label='YouTube' as="a" href='https://www.youtube.com/channel/UCNlF2641KaAILreU2Sgomlg' variant={'ghost'}>
                <AiFillYoutube />
              </IconButton>
            </Stack>
          </Container>
      </Box>
    </div>
      
  )
}

export default Footer