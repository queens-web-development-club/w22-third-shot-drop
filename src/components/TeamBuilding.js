import React from 'react'
import { Heading, Text, Link, Center, Box, Divider } from '@chakra-ui/react'

function StayPlay() {
  return (
    <>
        <Center py="5" mb="10">
            <Box>
                <Heading>Team Building / Special VIP Sessions</Heading>
                <Center>
                    <Text>Introduce your guests to the fastest growing sport in North America!</Text>
                </Center>
                <Divider />
            </Box>
        </Center>
        <Center>
            <Box py={5} maxW='lg'>
                <Text py={15}>Pickleball Party or a memoral team building activity for your crew!<br />
                Trying to do something FUN, NEW + HEALTHY for a birthday, anniversary, special occasion?  You manage or own a store or company and want to get everyone out and having fun?
                </Text>
                <Text py={10}>
                We provide the equipment, and fun instruction.  Give us 90 minutes to 3 hours and we will teach everyone how to play. 
                We can provide drinks and eats, we can design your special event and make it a fun one to remember! 
                2 hour indoor events start as low as $149 plus hst. Outdoor when weather allows can be great fun as well.
                </Text>
                <Text py={10}>
                Interested? Contact David at <span><Link href="tel:6134848088" color='teal.500' isExternal>613-484-8088</Link></span>
                </Text>
            </Box>
        </Center>
    </>
  )
}

export default StayPlay