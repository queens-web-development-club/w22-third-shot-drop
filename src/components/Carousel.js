import { useState } from 'react'
import { Center, Container, Heading, Box, Text, Stack } from '@chakra-ui/react'
import Slider from 'react-slick'

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
}

function Carousel() {

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

  return (
    <Center>
        <Box
        position={'relative'}
        height={'800px'}
        width={'500px'}
        >
        {/* CSS files for react-slick */}
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}
        <Slider {...settings}>
            {slides.map((card, index) => (
            <Box
                key={index}
                height={'xl'}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.img})`}>
                {/* This is the block you need to change, to customize the caption */}
                <Container size="container.lg" height="600px" position="relative">
                <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)">
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {card.text}
                    </Text>
                </Stack>
                </Container>
            </Box>
            ))}
        </Slider>
        </Box>
    </Center>
    
  );
}

export default Carousel