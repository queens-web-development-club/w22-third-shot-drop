import React from 'react'
import { Heading, Text, Center, Box, Divider, Link } from '@chakra-ui/react'
import { ListItem, UnorderedList } from '@chakra-ui/react'

function StayPlay() {
  return (
    <>
        <Center py="5" mb="1">
            <Box>
                <Heading>Get Paid to Play Pickleball</Heading>
                <Center>
                    <Text>Be the paddle source @ your club</Text>
                </Center>
                <Divider />
            </Box>
        </Center>
        <Center>
            <Box py={3} maxW='lg'>
                <Text py={15}>Do you love pickleball and play wherever you can?<br />
                If you are someone who is training new players and bringing fresh faces to the game, <b>YOU MAY BE THE RIGHT PERSON!</b>
                </Text>
                <Text py={5}>
                The reason I am happy with Onix and have stayed with Onix - the income is steady.<br />
                Players may buy a paddle every other year, but clubs, groups, YMCAs, gyms, schools, all need balls and nets. Balls become a recurring order.<br />
                Once you have some clubs and group ordering, that is your guaranteed base income. Then when you sell paddles, that is the gravy.<br />
                The Onix Fuse ball is the preferred ball in Canada.
                </Text>
                <UnorderedList>
                    <ListItem>Onix has an actual brick and mortar head office right here in CANADA. They are serious about pickleball in Canada. They sponsor hundreds of tournaments and special events across Canada.  </ListItem>
                    <ListItem>Ordering paddles is a ten minute deal. You can order as low as $200 in paddles and balls. We have dealer pricing with Onix, and also the top pickleball suppliers.</ListItem>
                    <ListItem>You get swag, know about the latest paddles and info on balls so you can let the players know.</ListItem>
                    <ListItem>We support clubs and groups that are not political.  We believe in everyone playing and a welcoming game.  </ListItem>
                </UnorderedList>
                <Text py={0.5}>
                This is a <span color='red'>CANADIAN</span> opportunity. Some cities & towns are already taken by stores and reps. We want everyone to have a decent sized area so we limit the amount of dealers.<br />
                To chat about this in greater detail, contact David Bussiere at <span><Link href='mail:david@thirdshotdrop.ca' color='teal.500' isExternal>david@thirdshotdrop.ca</Link></span> or <span><Link href="tel:6134848088" color='teal.500'>613-484-8088.</Link></span>
                </Text>
            </Box>
        </Center>        
    </>
  )
}

export default StayPlay