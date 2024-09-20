import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import goal from "../assets/bow_arrow.png"
import vision from "../assets/vision.png"

const OurMission = () => {
  return (
    <Box bg={"brand.black"}>
      {/* <Box w='100%' bgGradient='linear(to-t, black, blue.500, black)'> */}
      <Flex flexDir={"column"} alignItems={"center"} zIndex={"5"}>
        <Box w={{base:"98%",md:null,lg:"90%"}} mt={{base:"50px",md:null,lg:"50px"}}  >
           <Heading  fontSize={{base:"35px",md:null,lg:"40px"}} color={"brand.whitish"} lineHeight={{base:"50px",md:"55px",lg:"65px"}} textAlign={"center"} fontWeight={"600"} >We are On A Mission To “Erase Unemployment From India”</Heading>
            {/* <Box w={"60%"} m={"auto"} borderBottom={"2px solid"} borderColor={"brand.whitish"} /> */}
        </Box>
        <Text w={{base:"95%",md:"80%" ,lg:"60%"}} color={"brand.orangish"} fontSize={"25px"} textAlign={"center"} lineHeight={{base:"30px",md:null,lg:"37px"}} mt={"25px"}>right now, “unskilled labour” is the route cause of unemployment in India, we will skill them up, and give them exposure through a TOP 0.1% community system, problem solved.</Text>
         <Box mt={"50px"}>
           <Heading as="i" color={"brand.whitish"}>Here's how we envision it:</Heading>
            <Box bgGradient='linear(to-l, #7928CA, #FF0080)' w={"90%"} m={"auto"} h={"2px"}  />
         </Box>
         <Text fontSize={"23px"} mt={"30px"} color={"brand.white"} >Firstly, let’s accept the fact that,</Text>
         <Text fontSize={"23px"} color={"brand.orangish"} textAlign={"center"}>having tangible modern day skills instead of 16+ year degrees</Text>
         <Text fontSize={"23px"} color={"brand.white"} textAlign={"center"} w={{base:"95%",md:null,lg:"50%"}}>is the only way to achieve this goal as fast as possible.</Text>
         <Text fontSize={"23px"} mt={"30px"} color={"brand.white"} w={{base:"95%",md:null,lg:"50%"}} align={"center"}>Our actionable steps to achieve this will be Just to keep making programs about “SKILLS” that businesses/high net worth individuals are actually in need of in today’s time.</Text>
         <Box>
            <Flex gap={"5px"} mt={"45px"} alignItems={"center"}>
                <Heading color={"brand.whitish"}>Goal</Heading>
                <Image w={33} h={33} src={goal} alt='Our Goal' />
            </Flex>
            <Box bgGradient='linear(to-l, #7928CA, #FF0080)' w={"80%"} m={"auto"} h={"2px"}  />
         </Box>
         <Text fontSize={"23px"} mt={"15px"} color={"brand.white"} w={{base:"95%",md:null,lg:"50%"}} align={"center"}>Our goal is, whenever we create a program is to make it 100x better and faster than any University for less than 1% of the price.</Text>
         <Text fontSize={"23px"} mt={"30px"} color={"brand.white"} w={{base:"95%",md:null,lg:"50%"}} align={"center"}>We intentionally underprice our programs knowing that if we can be better AND cheaper than the rest of the market, we’ll execute our vision of eradicating Unemployment From India.</Text>
         <Box>

            <Flex gap={"5px"} mt={"45px"} alignItems={"center"}>
                <Heading color={"brand.whitish"}>Vision</Heading>
                <Image w={33} h={33} src={vision} alt='Our Vision' />
            </Flex>
            <Box bgGradient='linear(to-l, #7928CA, #FF0080)' w={"80%"} m={"auto"} h={"2px"}  />
         </Box>
          <Text fontSize={"23px"} mt={"15px"} color={"brand.white"} w={{base:"95%",md:null,lg:"50%"}} align={"center"}>In addition to all of the value we give, We have also made a commitment to allocating 10% of all the company profits towards providing scholarships and equipment to underprivileged individuals residing in tier 3 and tier 4 cities in India who are unfortunate to keep up with the fast-paced global economy. </Text>
          <Text fontSize={"23px"} mt={"30px"} color={"brand.white"} w={{base:"95%",md:null,lg:"50%"}} align={"center"}>In general bringing good WiFi connection with a Computer in as many Houses as we possibly can.</Text>
          <Text fontSize={"23px"} mt={"30px"} color={"brand.white"} w={{base:"95%",md:null,lg:"40%"}} align={"center"} mb={"60px"}>(which means by you buying this course, you are literally helping a kid from a tier 4 city progress his/her family into a good direction)</Text>
      </Flex>
      {/* </Box> */}
    </Box>
  )
}

export default OurMission