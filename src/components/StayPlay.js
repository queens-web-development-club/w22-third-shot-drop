import React from 'react'
import { Heading, Text, Link, Center, Box, Image, Divider } from '@chakra-ui/react'

function StayPlay() {
  return (
    <>
        <Center py="5" mb="10">
            <Box>
                <Heading>Stay & Play Partners</Heading>
                <Text>Resorts/Hotels near pickleball courts in our area!</Text>
                <Divider />
            </Box>
        </Center>
        
        <Center>
            <Box maxW="xl" mb="5">
                <Text mb="5">
                From May to October Newboro, Ontario has some great outdoor pickleball courts.  Plan a vacation and consider staying at Dorothy's Lodge in beautiful Chaffey's Lock.<br />The owner is a pickleball player too!  This is a great place for a family reunion or any gathering with a bunch of friends or business associates. Check it out <span><Link href="www.rideaulakescottages.com" color="teal.500" isExternal>here</Link></span>:
                </Text>
                <Image src="https://i.imgur.com/o3be1Z1.jpeg" />
            </Box>
            <Box maxW="xl" mb="5">
            <Text>
            Refresh your travel routine during your stay at Courtyard Kingston Highway 401/Division Street. Our newly renovated hotel boasts a paramount location along Highway 401, giving you access to popular destinations including Kingston's Waterfront Pathway, Thousand Islands and Leon's Centre (formerly the K-Rock Centre).<br /><br />
            Free amenities such as high-speed Wi-Fi and on-site parking provide added value for business and leisure travellers alike. In your free time, enjoy a workout in our 24-hour fitness centre and relax in our indoor pool.  Ask a front desk professional about our pickleball new player experience.  To get a special discount on your stay, please email <span><Link href="mailto:jrebelo@courtyardmarriottkingston.com" color="teal.500" isExternal>jrebelo@courtyardmarriottkingston.com</Link></span> and mention <b>PICKLEBALL</b>.
            </Text>
            <Image src="https://i.imgur.com/T6MYjKs.jpeg" mt={"5"}/>
        </Box>

        </Center>
        
    </>
  )
}

export default StayPlay