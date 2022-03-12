import { Heading, Center, Box, Text, Image, HStack, Stack, Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './Navbar'

function AboutPage() {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black"
        },
    }

    const slides = [
          {
            img: "https://i.imgur.com/V5uYfpb.jpeg",
            label: "David & Alice",
            description: "David grew up in Montreal, Alice grew up in Kingston. They live with Murphy the dog and Ollie the cat, and can be at Lake Ontario in 5 minutes, outdoor pickleball courts in 7 minutes.  " 
          },
          {
            img: "https://i.imgur.com/uo9Oiif.jpeg",
            label: "David & Victor",
            description: "Victor Carquez is an Onix sponsored player, and is a well known pickleball personality.  David & Victor have played in tournaments and their highest level win was the Quebec provincials, where they captured the silver medals in 4.5 open mens doubles.  Victor is well known for bringing snacks and drinks to pickleball, he is a recently retired chef."
          },
          {
            img: "https://i.imgur.com/3xFDPQ1.jpeg",
            label: "Robert - Equipment Manager",
            description: "Robert is the equipment manager and also loss prevention for the pop up store for Third Shot Drop.  Robert is a Kingston legend, loves to help take down nets, and enjoys chatting with players on the sidelines and during the game.  Make sure you say hello to Robert if you see him."
          },
          {
            img: "https://i.imgur.com/qOXrI1P.jpeg",
            label: "Bill Welychka & David on CKWS Morning Show",
            description: " "
          },
          {
            img: "https://i.imgur.com/e7UBbl2.jpeg",
            label: "Continental Grip!",
            description: " "
          },
          {
            img: "https://i.imgur.com/VvlmNLs.jpeg",
            label: "Alice at a humane society fundraiser",
            description: "Third Shot Drop has raised funds for the Kingston Humane Society for years."
          }
    ]
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slideCount - 1 : s - 1));
      };
    const nextSlide = () => {
    setCurrentSlide((s) => (s === slideCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide) => {
    setCurrentSlide(slide);
    };
    
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

  return (
      <>
        <Navbar />
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
        <Flex w="full" bg={useColorModeValue("gray.200", "gray.600")} p={10} alignItems="center" justifyContent={"center"}>
            <Flex w="500px" pos="relative" overflow="hidden">
                <Flex h="400px" w="500px" { ...carouselStyle}>
                    {slides.map((slide, sid) => {
                        <Box key={`slide-${sid}`} boxSize="full" shadow={"md"} flex="none">
                            <Text
                                color="white"
                                fontSize={"xs"}
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                { sid + 1 } / {slideCount}
                            </Text>
                            <Image src={slide.img}
                                alt="Carousel image"
                                boxSize={"full"}
                                backgroundSize="cover"
                            />
                            <Stack
                                p="8px 12px"
                                pos="absolute"
                                bottom={"24px"}
                                textAlign="center"
                                w={"full"}
                                mb="8"
                                color="white"
                            >
                                <Text fontSize={"2xl"}>{slide.label}</Text>
                                <Text fontSize={"lg"}>{slide.description}</Text>
                            </Stack>
                        </Box>
                    })}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                &#10095;
                </Text>
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                {Array.from({ length: slideCount }).map((_, slide) => (
                    <Box
                    key={`dots-${slide}`}
                    cursor="pointer"
                    boxSize={["7px", "15px"]}
                    m="0 2px"
                    bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                    rounded="50%"
                    display="inline-block"
                    transition="background-color 0.6s ease"
                    _hover={{ bg: "blackAlpha.800" }}
                    onClick={() => setSlide(slide)}
                    ></Box>
                ))}
                </HStack>
            </Flex>
        </Flex>
      </>
  )
}

export default AboutPage