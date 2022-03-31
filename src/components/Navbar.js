import React from 'react'
import { 
    Text,
    Box, 
    Flex, 
    HStack, 
    Button, 
    Heading,
    VStack, 
    IconButton, 
    CloseButton, 
    useDisclosure, 
    useColorModeValue, 
    Link
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar() {
    const bg = useColorModeValue('white', 'gray.800')
    const mobileNav = useDisclosure()

    return (
        <>
            <Heading bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems={"center"} justifyContent="space-between" mx="auto">
                    <Flex>
                        <Link href="/" 
                            title="Third Shot Drop"
                            display={"flex"}
                            alignItems="center"
                        >
                            <Text fontSize={"2xl"} casing="capitalize">Third Shot Drop</Text>
                        </Link>
                    </Flex>
                    <HStack display="flex" alignItems={"center"} spacing="1">
                        <HStack spacing={1} mr={1} display={{ base: 'none', md: "inline-flex"}}>
                            <Button variant="ghost" as='a' href='/about'>About Us</Button>
                            <Button variant="ghost" as='a' href='/clinics'>Clinics</Button>
                            <Button variant="ghost" as='a' href='/stay-and-play'>Stay & Play</Button>
                            <Button variant="ghost" as='a' href='/team-building'>Team Building</Button>
                            <Button variant="ghost" as='a' href='/schools-community'>Schools/Community</Button>
                            <Button variant="ghost" as='a' href='court-dealers'>Court Dealers</Button>
                            <Button variant="ghost">Store</Button>
                        </HStack>
                        {/* Add Cart here */}
                            <IconButton aria-label="Cart" variant="ghost" size="md" icon={<AiOutlineShoppingCart />} />
                        {/* End cart */}
                        <Box display={{ base: 'inline-flex', md: 'none' }}>
                            <IconButton
                                display={{ base: 'flex', md: 'none' }}
                                aria-label="Open menu"
                                fontSize={"20px"}
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onCLick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />

                                <Button w="full" variant="ghost">About Us</Button>
                                <Button w="full" variant="ghost">Clinics</Button>
                                <Button w="full" variant="ghost">Stay & Play</Button>
                                <Button w="full" variant="ghost">Team Building</Button>
                                <Button w="full" variant="ghost">Schools/Community</Button>
                                <Button w="full" variant="ghost">Court Dealers</Button>
                                <Button w="full" variant="ghost">Clinics</Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </Heading>
        </>
    )
}

export default Navbar

