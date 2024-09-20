import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/home/Hero'
import macBookPro16 from '../assets/MacBook_Pro16.png'
import discord from '../assets/Discord_Desktop.png'
import BigButton from '../components/home/BigButton'
import { Link } from 'react-router-dom'

const responsiveWidth = { base: "95%", sm: "95%", md: "70%", lg: "70%", xl: "50%" }
const Home = () => {
  return (
    <Box h={"auto"}>
      <Hero />
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={"25px"} py={"85px"} bg={"brand.whitish"}>
        <Text color={"brand.black"} textAlign={"center"} fontWeight={500} fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "24px" }} w={responsiveWidth}>The Ultimate YouTube Video Editing Course</Text>
        <Heading color={"brand.black"} fontSize={{ base: "35px", md: "40px", lg: "40px", xl: "50px" }} letterSpacing={"0.8"} lineHeight={"100%"} textAlign={"center"} w={responsiveWidth}>The only video editing course you need to maximize your skills and earnings.</Heading>
      </Box>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={"20px"} py={"50px"} bg={"brand.black"}>
        <Heading fontSize={{ base: "43px", md: "45px", lg: "55px", xl: "64px" }} color={"brand.white"} textAlign={"center"} w={responsiveWidth}>THE CHEAT CODE</Heading>
        <Text textAlign={"center"} color={"brand.white"} fontWeight={500} fontSize={{ base: "24px", md: "25px", lg: "25px", xl: "28px" }} w={responsiveWidth}>We teach from experience. Our educators are top-tier youtube video editors themselves, who will show you the exact frameworks they use to drive millions of views and engagement for some of the biggest International YouTubers.</Text>
      </Box>
      <VStack bg={"brand.black"} spacing={{ base: "4px", md: "4px", lg: "40px" }}>
        <BigImgBox num={1} heading={"Learn and grow at a pace that suits you."}
          text={"Unlock the power of self-directed learning with the added bonus of lifetime course access and a vibrant community of YCCA learners to support and inspire you."}
          imgLink={macBookPro16}
        />
        <BigImgBox num={2} heading={"Network with the Top 0.1% of Video Editors."}
          text={"Cultivate and elevate your circle in a World of Shared Wisdom, Gain Invaluable Insights from Like-Minded Individuals, and Embark on a very Beautiful Creative Journey."}
          imgLink={discord}
          columnReverse={"rowReverse"}
        />
        <BigImgBox num={3} heading={"Our Talented Professionals at your finger tips."}
          text={"Our Talented Coaches and Seasoned Experts are Just a Message Away, Ready to Empower You with Insightful Feedback and Timely Solutions! Accompanied with weekly Live QnA sessions."}
          imgLink={macBookPro16}
        />
      </VStack>
      <Flex h={{ base: "250px", md: "350px", lg: "350px" }} flexDir={"column"} bg={"brand.black"} alignItems={"center"} justifyContent={"center"}>
        <Link to={"/the-ultimate-youtube-editing-course"} >
          <BigButton>View Course</BigButton>
        </Link>
      </Flex>

      {/* 1 0 1 TAINING  */}
      <Flex h={{ base: "auto", md: "auto", lg: "350px" }}
        gap={{ base: "15px", md: "20px", lg: "25px" }}
        flexDir={"column"}
        py={{ base: "40px", md: "40px", lg: null }}
        bg={"brand.whitish"}
        alignItems={"center"}
        border={"2px solid green"}
        justifyContent={"center"}>
        <Heading color={"brand.black"} size={{ base: "2xl", md: "2xl", lg: "3xl" }} textAlign={"center"} fontWeight={"500"}>Watch Our 1O1 Training right now!</Heading>
        <Text color={"brand.100"} fontSize={{ base: "24px", md: "24px", lg: "28px" }} textAlign={"center"}>Get Your Editing Journey Started with our Free Step-By-Step Tutorial.</Text>
        <Link to={"/1-0-1-training"} >
          <Button bg={"brand.black"} color={"brand.whitish"} w={"260px"} h={"50px"} rounded={"full"} mt={"30px"}
            _hover={{ transform: "scale(1.2)" }}
          >1O1 Training</Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Home

// Local reusable  component.
const BigImgBox = ({ num, heading, text, imgLink, rowReverse }) => {
  return (
    <Box display={"flex"} h={{ base: "auto", md: "auto", lg: "580px" }} flexDir={{ base: "column", md: "column", lg: num === 2 ? "row-reverse" : "row" }}>
      <Box w={{ base: "100%", md: "100%", lg: "50%" }} bg={"brand.white"} pos={"relative"} display='flex' boxSizing={'border-box'} px={{ base: "15px", md: "25px", lg: "50px" }} flexDir={"column"} justifyContent={"center"} >
        <Box
          pos={"absolute"}
          top={{ base: "15px", sm: "20px", md: "30px", lg: "40px" }}
          left={{ base: "15px", sm: "20px", md: "30px", lg: "40px" }}
          w={"125px"}
          h={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={"2px solid black"}
          borderRadius={"25px"}
        >{num}</Box>
        <Heading fontSize={{ base: "45px", md: "50px", lg: "61px" }} fontWeight={"500"} letterSpacing={"-2px"} lineHeight={"89.9%"} mt={{ base: "100px", md: "100px", lg: null }}>{heading}</Heading>
        <Text fontSize={{ base: "24px", md: "24px", lg: "28px" }} color={"brand.100"} lineHeight={{ base: "30px", md: "35px", lg: "35px" }} my={"30px"} mb={{ base: "30px", md: "85px", lg: null }} >{text}</Text>
      </Box>

      <Box w={{ base: "100%", md: "100%", lg: "50%" }} boxSizing={"border-box"} display={"flex"} bg={"brand.100"} alignItems={"center"} justifyContent={"center"} >
        <Image w={{ base: "80%", md: "80%", lg: "70%" }} borderRadius={num === 2 ? "15px" : null} src={imgLink} alt={"macbookPro16"} m={"auto"} my={{ base: "85px", md: "85px", lg: null }} />
      </Box>
    </Box>
  )
}