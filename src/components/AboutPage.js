import { Heading, Center, Box, Text,  } from '@chakra-ui/react'
import Carousel from './Carousel'

function AboutPage() {
  return (
      <>
        <Center>
            <Box >
                <Heading py={"5"}>About Third Shot Drop</Heading>
            </Box>
        </Center>
        <Center>
            <Box py={"5"} maxW="lg">
                <Text py={"15"}>Third Shot Drop is a labour of love.  Founded in 2016, David Bussiere, and his wife Alice have been playing since 2013 and are completely addicted. 
                The focus of Third Shot Drop is teaching new players and helping existing players get better.<br />
                David's 90 minute "New Player" & "Up Your Game" sessions have been extremely popular in Ontario and Quebec. </Text>
                <Text>David feels that players need to be better informed prior to purchasing their paddles. 
                Players will often buy equipment from a retailer without fully understanding a product's benefits or short-comings.  
                David's pop-up store is always open when he's at the courts for a Clinic or Special Event.  <br />
                This no obligation service offers players a unique on court opportunity to try out over 20 brand name paddles before making their purchase. 
                </Text>
                <Text py={5}>David is a certified level II insured instructor with the IPTPA.  
                He is also Onix Canada's marketing point person, produces and creates content for a Youtube channel "Pickleballywood", 
                and runs a successful online and court-side store.  It is busy but fun, and he is enjoying it.  
                In 2019 he became the coach for the Kingston Special Olympics pickleball team.  
                </Text>
            </Box>
        </Center>
        <Carousel />
      </>
  )
}

export default AboutPage