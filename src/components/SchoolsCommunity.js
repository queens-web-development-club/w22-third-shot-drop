import React from 'react'
import { Heading, Text, Center, Box, Divider, Link } from '@chakra-ui/react'

function StayPlay() {
  return (
    <>
        <Center py="5" mb="10">
            <Box>
                <Heading>Equipment for a School or Community Centre</Heading>
                <Divider />
            </Box>
        </Center>
        <Center>
            <Box py={5} maxW='lg'>
                <Text py={15}>Email, call or text David Bussiere at <span><a href='mail:david@thirdshotdrop.ca'>david@thirdshotdrop.ca</a></span> or <span><a href="tel:6134848088">613-484-8088</a></span><br />
                We will be happy to help you get pickleball equipment for your students/group/club. We offer great pricing on institutional purchases.<br />
                We can make it happen on a tight budget, and also offer instruction, partnering with teachers and providing all equipment each session.
                </Text>
                <Text py={5}>
                We can also offer strategies on getting the funds together to get a pickleball program started in your school or with your group or club.<br />
                We have products that are not displayed on the website, that are specifically for institutions, groups and clubs.<br />
                Connect with us today and find out how to make it happen!
                </Text>
                <Text py={5}>
                Interested? Contact David at <span><Link href="tel:6134848088" color='teal.500' isExternal>613-484-8088</Link></span>
                </Text>
            </Box>
        </Center>        
    </>
  )
}

export default StayPlay