import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Image,
  VStack,
  keyframes, 
  
} from "@chakra-ui/react";
import BigButton from "./BigButton";
import { MainLogo } from '../../utils'
import { Link } from "react-router-dom";
import video from './Video/video.mp4'
import photoshop from './Video/photo.png'
import photoshop2 from './Video/photo2.png'
import photoshop3 from './Video/photo3.png'
import {  ShaadEditingPack, actionTaker, actionTakerGif, logoWithText, observer, observerGif } from '../../utils';
import { useState } from "react";
import CourseCurriculum from '../product/CourseCurriculum'
import poster from "./Video/poster.png"


const Hero = () => {
  const [view, setView] = useState("observer")
  return (
    <>
      <Box
        border="0px solid blue"
        bg="brand.black"
        display="flex"
        flexDir="column"
        alignItems="center"
        py={{ base: "50px", md: null, lg: "50px" }}
        px="5px"
      >
        <Text
          textAlign={"center"}
          w={{ base: "90%", md: "70%", lg: "70%", xl: "100%" }}
          color={"white"}
          fontSize={["17px", "20px", "35px"]}
          mb="30px"
          fontWeight="bold"
        >
        Create a successful and fulfilling career as a Video Editing Expert.
        
        </Text>
        {/* <Text
          textAlign={"center"}
          w={{ base: "90%", md: "70%", lg: "70%", xl: "50%" }}
          color={"white"}
          fontSize={["17px", "20px", "23px"]}
          mb="15px"
        >
          Create a successful and fulfilling career{" "}
          <Box>as a Video Editing Expert.</Box>
        </Text> */}
        <video
          style={{ height: "60vh" , border:"10px solid white" , borderRadius:"40px" }}
          controls
          muted
          poster={poster}
        >
          <source
            src={video}
            type="video/mp4"
            
          />
        </video>

       
        <Text
        style={{display:"flex" , alignItems:"center", justifyContent:"center"}}
          textAlign={"center"}
          w={{ base: "90%", md: "70%", lg: "70%", xl: "50%" }}
          color={"white"}
          fontSize={["17px", "20px", "25px"]}
          mb="30px"
          mt="30px"
        >
          {" "}
          <span >Photoshop</span><Image w={"40px"} style={{marginLeft:"5px"}}  src={photoshop} alt='Logo' />  +
          <span style={{marginLeft:"5px"}}  >Premiere Pro </span> <Image w={"40px"} style={{marginLeft:"5px"}}  src={photoshop2} alt='Logo' />  +
          <span style={{marginLeft:"5px"}} >After Effects</span><Image w={"33px"} style={{marginLeft:"5px"}}  src={photoshop3} alt='Logo' /> 
        </Text>
        {/* <Link to={"/application_form"}>
          <BigButton>Apply Now!</BigButton>
        </Link> */}






<CourseCurriculum/>


        <VStack
        maxW="650px"
        width={{ base: "90%", md: "80%", lg: null }}
        m="auto"
        mt="70px"
        bg="brand.blackish"
        //boxSizing="border-box"
        border="1px solid"
        borderColor={"brand.100"}
        borderRadius="15px"
        px="50px"
        py="60px"
        boxShadow="0px 0px 10px #466ae8"
      >
        <Flex align="center" justify="center" border="0px solid white">
          <Image src={MainLogo} alt="Logo" w="60px" />

          <Text
          textAlign={"center"}
          w={{ base: "90%", md: "70%", lg: "70%", xl: "70%" }}
          color={"white"}
          fontSize={["17px", "20px", "23px"]}
          style={{color:"#7289da"}}
        >
         
          <span style={{ fontWeight: "500" }} >YourCheatCode Academy</span> 
          </Text>
        </Flex>
        <Text
          color="brand.whitish"
          fontSize={{ base: "13px", md: "16px", lg: "23px" }}
          mt="30px"
        >
          Value Worth <span style={{ fontWeight: "800" }}>₹5,00,000 </span>Given
          In Just{" "}
        </Text>
        <Heading
          fontSize={{ base: "34px", md: "42px", lg: "46px" }}
          mt="20px"
          mb="-15px"
          color="brand.white"
        >
          ₹81,000
        </Heading>
        {/* BUT NOW BUTTON   */}
        <Button my="20px" > <Link to="/application_form">Apply Now</Link></Button>
        
      </VStack>





      <VStack
                    w={{ base: "90%", md: "80%", lg: "65%" }}
                    mx="auto"
                    my={"50px"}
                    border="1px solid black"
                //bg={{base:"blue",sm:"green",md:"yellow",lg:"white"}}
                >
                    
                    <Heading
                        align="center"
                        color="brand.whitish"
                        fontSize={{ base: "30px", md: "35px", lg: "45px" }}
                        lineHeight={{ base: "31px", md: "36px", lg: "46px" }}
                        w={{ base: "100%", md: "80%", lg: "60%" }}
                        mb="10px"
                        mt="20px"

                    >At the end of the day, <br></br>there are 2 types <br/>of people...</Heading>
                    <Text
                        fontSize="18px"
                        color= "white"
                        mt="20px"
                        mb="20px"
                    >WHICH ONE OF THEM ARE YOU?</Text>
                    <Flex align={"center"} gap={{ base: "15px", md: "30px", lg: "35px" }}>
                        <Button onClick={() => setView("observer")}>
                            <Image w={{ base: "18px", md: "30px", lg: "20px" }} src={observer} />
                            <Text fontSize={{ base: "11px", md: "14px", lg: "16px" }} fontWeight={"bold"}>THE OBSERVER</Text>
                        </Button>
                        <Button onClick={() => setView("action_taker")}>
                            <Image w={{ base: "18px", md: "30px", lg: "20px" }} src={actionTaker} />
                            <Text fontSize={{ base: "11px", md: "14px", lg: "16px" }} fontWeight={"bold"}>THE ACTION TAKER</Text>
                        </Button>
                    </Flex>
                    {view === "observer" ?
                        <ReVStack>
                            <ReImage
                                src={observerGif} />
                            <VStack>
                                <ReText1>ARE YOU:</ReText1>
                                <ReHeading
                                >The Observer</ReHeading>
                                <ReText2

                                >
                                    These are the type of people who are always searching for the new hot opportunity but, when faced with one, they find an excuse to not take and action... And end up just observing the success of the others who decided to take action on the same opportunity they missed.
                                </ReText2>
                            </VStack>
                        </ReVStack> :
                        <>
                            <ReVStack>
                                <ReImage src={actionTakerGif} />
                                <VStack>
                                    <ReText1>ARE YOU:</ReText1>
                                    <ReHeading>The Action Taker
                                    </ReHeading>
                                    <ReText2>
                                        Those are the type of people who, went faced with an opportunity, take action and work to build their own success. They're the go-getters. They're the ones that, over the long-term, end up achieving their wildest dreams and enjoying the spoils of their decisions. And now it's time to decide: which one of them you're gonna be? This is a decision only you can take.
                                    </ReText2>
                                </VStack>
                            </ReVStack>
                    
                        </>
}
                </VStack>

      </Box>





     

     
    </>
  );
};

export default Hero;


const ReusableText = ({ children, width }) => {
  return (
      <Text
          align="center"
          color="black"
          fontSize={{ base: "10px", md: "17px", lg: "20px" }}
          mb={{ base: "10px", md: "15px", lg: "10px" }}
          width={width}
      >{children}</Text>
  )
}

const ButtonBox = ({ children, onClick }) => {
  return (
      <Box onClick={onClick}
          as="button"
          h={{ base: "50px", sm: "60px", md: null, lg: "68px" }}
          w={{ base: "140px", md: "200px", lg: "280px" }}
          bg="brand.white"
          border="1px solid white"
          rounded="xl"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          cursor="pointer"
          transitionTimingFunction="linear"
          transitionDuration="0.5s"
          _hover={{

              border: "1px solid blue",
              transform: "scale(1.03)",


          }}
      >{children}</Box>
  )
}

const fadeUp = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`
const ReVStack = ({ children }) => {
  const fadaUpAn = `${fadeUp} linear 1s;`
  return (
      <VStack
          h={"auto"} w={"100%"}
          border={"1px solid white"}
          bg="brand.white"
          mt={"45px"}
          borderRadius="25px"
          animation={fadaUpAn}
      >{children}</VStack>
  )
}

const ReImage = ({ src }) => (
  <Image
      w={"200px"} h={"200px"}
      borderRadius="20px"
      my="30px"
      src={src} />
)


const ReText1 = ({ children }) => {
  return (
      <Text
          color="brand.black" fontSize="14px"
          mt="-20px"
          fontWeight="bold"
      >
          {children}
      </Text>
  )
}

const ReHeading = ({ children }) => {
  return (
      <Heading
          color="#2d3958"
          letterSpacing="-1.32px"
          align="center"
          fontSize={{ base: "24px", md: "32px", lg: "44px" }}
      >{children}</Heading>
  )
}

const ReText2 = ({ children }) => {
  return (
      <Text
          color="#7b88a8"
          align="center"
          fontSize={{ base: "15px", md: "18px", lg: "18px" }}
          lineHeight="27px"
          width={{ base: "95%", md: "80%", lg: "60%" }}
          mb="40px"
      >{children}</Text>
  )
}