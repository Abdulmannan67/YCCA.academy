import { Box, Button, Fade, Flex, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Text, VStack, keyframes, useDisclosure } from '@chakra-ui/react'
import React, { Children, useState } from 'react'
import { MainLogo, ShaadEditingPack, actionTaker, actionTakerGif, logoWithText, observer, observerGif } from '../../utils';
import BuyNow from './BuyNow';


const BeforeSignup = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [view, setView] = useState("observer")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);

    const submitForm = () => {
        if (name) setNameErr(false)
        else setNameErr(true);

    }
    const [error, setError] = useState(false)

    return (
        <>
            <Box w={"100%"} border={"1px solid black"} bg="brand.black" h="auto" minH="700px">
                <Heading size="xl" mt='50px' textAlign="center" fontWeight="600" color="brand.whitish">Edit Your First Youtube Video Today! <br/>With our 101-training program</Heading>
                {/* <VStack maxW="600px" m="auto" mt="20px" bg='brand.white' boxSizing="border-box" border="0px solid blue" px="50px" py="30px" >
                    <FormControl>
                        <FormLabel htmlFor="name">Enter Your Full Name</FormLabel>
                        <Input id="name" placeholder="Enter Your Full Name" />
                        {nameErr && <Text mb='-15px' fontSize='14px' color="red">Name is required</Text>}
                    </FormControl>
                    <FormControl>
                        <FormLabel mt={"15px"} htmlFor="email">Enter Your Best Email</FormLabel>
                        <Input id="email" placeholder="Enter Your Best Email" required={true} />
                        {error && <Text mb='-15px' fontSize='14px' color="red">Email is required</Text>}
                        {!error && <FormHelperText>We'll never share your email.</FormHelperText>}
                    </FormControl>
                    <Button
                        type="submit"
                        w="100%"
                        bg="brand.100"
                        my="15px"
                        color='brand.whitish'
                        borderRadius='none'
                        _hover={{ bg: "brand.150", transform: "scale(1.01)" }}
                        onClick={() => {

                        }}
                    >WATCH THE FREE TRAINING NOW</Button>

                </VStack> */}
                {/* BUY NOW  */}
                
                

                {/* What You'll GET  */}
                <VStack w={{ base: "90%", md: "65%", lg: "50%" }}
                    mx="auto"
                    mt="30px"
                    mb="30px"
                    padding="40px"
                    backgroundColor={"white"}
                    color={"black"}
                    borderRadius={"40px"}
                    >
                    <Heading
                         size="xl"  paddingBottom='30px' textAlign="center" fontWeight="600" color="black">What You'll GET:</Heading>
                    <ReusableText
                        align="center"
                        color='brand.whitish'
                       
                    >
                       1 - Latest Industry Graded Software 
                    </ReusableText>
                    <ReusableText
                        align="center"
                        color='brand.whitish'
                    >2 - Shaad’s Basic Editing Pack which he used in the initial months of building His Post Production Company.
                    </ReusableText>
                    <Image src={ShaadEditingPack} alt="Shaad's Complete editing pack." />
                    <ReusableText
                        width={"80%"}
                    >
                       3 - 100 + Motion Graphic and Text Templates, Title Animations, and Transitions
                    </ReusableText>
                    <ReusableText
                        width={"80%"}
                    >
                      4 - Complete guide from installing premier pro to exporting your first youtube video
                    </ReusableText>
                    </VStack>
                    <VStack w={{ base: "90%", md: "65%", lg: "50%" }}
                    mx="auto"
                    mt="30px"
                    mb="30px"
                    padding="40px"
                    backgroundColor={"white"}
                    color={"black"}
                    borderRadius={"40px"}
                    >
                    <Heading size="xl"  paddingBottom='30px' textAlign="center" fontWeight="600" color="black">What You Will Learn!</Heading>
                    <ReusableText>1 - Cutting videos at least 8x Faster using our top secrect cutting shortcuts.(the most convenient and fastest cutting techniqueyou cant find this anywhere else)</ReusableText>
                    <ReusableText>
                     2 -  Premier Pro's Basic Tools, and features, like masking, key framing, green screen etc.
                    </ReusableText>
                    <ReusableText>
                    3 - MrBeast Style Subtitle Animations.
                    </ReusableText>
                    <ReusableText>
                    4 - Smooth Png Animations Using our custom presets.
                    </ReusableText>
                    <ReusableText>
                    5 - Exporting A 6 minute ready to upload Youtube Video
                    </ReusableText>
                </VStack>

                <BuyNow />

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
                        <ButtonBox onClick={() => setView("observer")}>
                            <Image w={{ base: "18px", md: "30px", lg: "40px" }} src={observer} />
                            <Text fontSize={{ base: "11px", md: "14px", lg: "16px" }} fontWeight={"bold"}>THE OBSERVER</Text>
                        </ButtonBox>
                        <ButtonBox onClick={() => setView("action_taker")}>
                            <Image w={{ base: "18px", md: "30px", lg: "40px" }} src={actionTaker} />
                            <Text fontSize={{ base: "11px", md: "14px", lg: "16px" }} fontWeight={"bold"}>THE ACTION TAKER</Text>
                        </ButtonBox>
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
    )
}

export default BeforeSignup;




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