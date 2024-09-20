import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, AspectRatio, Box, Button, Heading, Image, ListItem, SimpleGrid, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { useRef } from "react";
import { adobeAfterEffects, adobePremiere, clipart_arrow, downArrow, macbook_Pro16, qMark1, qMark2 } from "../utils";
import { courseCurriculum, accessMaterials } from "../constants/index"
import CourseCurriculum from "../components/product/CourseCurriculum";
import AccessMaterials from "../components/product/AccessMaterials";
import ProvenSystem from "../components/product/ProvonSystem";
import OurAchievement from "../components/product/OurAchievement";
import EnrollNow from "../components/product/EnrollNow";
import QuestionAndAnswer from "../components/product/QuestionAndAnswer";
import Reviews from "../components/product/Reviews";

const Products = () => {
    const scollToRef = useRef();


    console.log("course ", accessMaterials)
    return (
        <Box>
            <Box bg="brand.black">
                <CommonVStack>
                    <Heading textAlign="center"
                        // fontSize={{ base: "31px", md: "35px", lg: "50px" }}
                        fontSize={{ base: "24px", md: "35px", lg: "46px" }}
                        fontWeight="extrabold"
                        letterSpacing="-2px"
                        color="brand.whitish"
                        my="65px"
                    >Everything is changing, and it’s changing FAST! <Box>Either change with it or regret later.... </Box> </Heading>
                    <AspectRatio ratio={16 / 9} maxW="900px" w={"100%"} mx="auto" bg="gray">
                        {/* <iframe src="https://www.youtube.com/embed/KCoGoHIW2f4" 
                         title="YouTube video player" frameborder="0" 
                         allow="accelerometer; 
                         autoplay;
                          clipboard-write; 
                          encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <iframe src="https://drive.google.com/file/d/1bHDNoOZobc-ThgGTEJjncRdXS-7FqU3h/preview" 
                        allowfullscreen
                        autoplay
                        ></iframe>
                    </AspectRatio>
                    <EnrollButton mx={"auto"} onClick={() => scollToRef.current.scrollIntoView({ behavior: "smooth" })}>Enroll Now</EnrollButton>
                </CommonVStack>
            </Box>
            <Box bg="brand.black" borderY="1px solid white">
                <CommonVStack>
                    <Heading 
                    
                    //fontSize={{ base: "30px", sm: "35px", md: "45px", lg: "63px" }} 
                    fontSize={{ base: "24px", md: "35px", lg: "46px" }}
                    textAlign="center" color="brand.whitish"
                    mt={["60px", null, "90px"]}
                    mb={["30px", null, "45px"]}>What Is The Ultimate YouTube Editing Course?</Heading>
                    <CommonText >For the past 1 year me and my team have trained 26+ editors to be the best to ever do it, They are now editing for some of the biggest names on youtube, making 2x more money than any average engineer.</CommonText>
                    <Box w={{ base: "95%", md: null, lg: "85%" }} mx="auto">
                        <CommonText2>This course is the culmination of everything I and my team know about editing the best YouTube videos possible. Painstakingly made over an entire year, this course includes everything you could ever need to bring your creative vision into premier pro and after effects in-turn creating a retention optimised viral piece of content.</CommonText2>
                        <CommonText2>In this We have designed a Custom “YCCA Preset and Plugin Pack” for you, It has 3+ years of me and my team’s condensed knowledge and experience which will literally 10x your editing speed. You will be able to do 1 hour long complex animations which just a “drag and drop”. It contains custom after effects templates, memes, sound effects & background music (sorted by mood and niche), Overlays and a lot more stuff all optimised towards making your workflow seemless and FAST.</CommonText2>
                        <CommonText2>I had one purpose in mind when I created this – To make it as easy and time efficient as possible for anyone to start editing the best youtube videos, and make an awesome living out of it. See you inside!</CommonText2>
                    </Box>
                    <Stack
                        direction="row"
                        w={{ base: "95%", md: "80%", lg: "70%" }}
                        my={{ base: "30px", md: null, lg: "55px" }}
                        justify="space-around" align="center">
                        <IconImage src={adobeAfterEffects} />
                        <PlusText>+</PlusText>
                        <IconImage src={adobePremiere}
                        />
                        <PlusText>+</PlusText>
                        <IconImage src={qMark1} shadowColor="#764A16"

                        />
                        <PlusText>+</PlusText>
                        <IconImage src={qMark2} shadowColor="#764A16"
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        w={{ base: "95%", md: "80%", lg: "70%" }}
                        mx="auto"
                        justify="space-between"
                        align="center"
                        mb={{ base: "25px", md: null, lg: "45px" }}
                    >
                        <Image w="45%" src={macbook_Pro16} />
                        <VStack>
                            <Image w="45%" transform={"rotate(180deg)"} src={clipart_arrow} />
                            <Heading color="brand.whitish" fontSize={{ base: "35px", md: "45px", lg: "60px" }} >Bonus</Heading>
                        </VStack>
                    </Stack>
                    <CustomHeading>FROM Installing THE Editing Software -----{`>`} A TOP 0.1% VIDEO EDITOR</CustomHeading>
                    <CustomHeading>EVERYTHING will be taught from complete scratch to the most advanced animations and VFX</CustomHeading>
                </CommonVStack>
            </Box>
            <Box boxSizing="border-box" bg="black" py="80px">
                <CommonVStack>
                    {/* COURSE CURRICULUM  */}
                    <CourseCurriculum />
                    {/* ACCESS MATERIALS  */}
                    <AccessMaterials />
                </CommonVStack>
            </Box>
            <Box bg="brand.blackish" borderY={"1px solid white"}
                boxSizing="border-box"
                pb="50px"
            >
                <CommonVStack>
                    <ProvenSystem />
                </CommonVStack>
            </Box>
            <Box
                bgGradient='linear(to-b, black, #00053E)'
                w={"auto"}
                boxSizing="border-box"
                py={{ base: "60px", md: null, lg: "140px" }}
            >
                <CommonVStack>
                    <OurAchievement />
                </CommonVStack>
            </Box>
            {/* ENROLL NOW SECTION  */}
            <Box id="enrollnow" ref={scollToRef}
                bg="black"
                py={{base:"70px",md:null,lg:"120px"}}
            >
                <EnrollNow />
            </Box>
            {/* QUERY SECTION  */}
            <Box
                bgGradient='linear(to-t, black, #00053E)'
                w={"auto"}
                boxSizing="border-box"
                py={{ base: "60px", md: null, lg: "100px" }}
            >
                <CommonVStack>
                    <Heading
                        fontSize={{ base: "24px", md: "35px", lg: "46px" }}
                        color="brand.whitish"
                    >Still Have Questions?</Heading>
                    <CommonText>
                        Book in a call with our student success manager, KK, to get all your questions answered.
                    </CommonText>
                    <a href="https://api.whatsapp.com/send/?phone=9920786117&text=hey, I am from the ycca query sections" target="_blanck">
                        <Button rounded={"full"}
                            fontWeight={"200"}
                            colorScheme="whatsapp"
                            _hover={{ transform: "scale(1.1)" }}
                            mt={{base:"20px",md:null,lg:"30px"}}
                        >
                            <i style={{ marginRight: "8px" }} className="fa-brands fa-whatsapp"></i>
                            Whatsapp
                        </Button>
                    </a>
                    <CommonText2 textAlign="center">
                        This call is to see where you're currently at & if YCCA can help you achieve your goals.
                        <Box align="center">
                            Just send KK this on whatsapp
                        </Box>
                    </CommonText2>
                    <Image w="25px" src={downArrow} />
                    <CommonText>"hi, from ycca query section"</CommonText>
                </CommonVStack>
            </Box>

            {/* REVIEWS SECTION  */}
            <Box bg="black" boxSizing="border-box"
             py="80px"
             borderTop="1px solid white"
            >
                <CommonVStack>
                    <Reviews/>
                </CommonVStack>
            </Box>

            {/* QUESTION & ANSWER SECTION  */}
            <Box bg="brand.blackish" py={"100px"}>
                <CommonVStack>
                    <QuestionAndAnswer/>
                </CommonVStack>
            </Box>

        </Box>
    )
}

export default Products

// COMMON VSTACK 

const CommonVStack = ({ children }) => {
    return (
        <VStack
            w={{ base: "90%", md: "70%", lg: "65%", }}
            maxW={"1400px"}
            mx="auto" border="0px solid blue">{children}</VStack>
    )
}

// COMMON HEAD TAG
const CustomHeading = ({ children }) => {
    return (
        <Heading
            color="brand.whitish"
            fontSize={{ base: "22px", md: "30px", lg: "35px" }}
            fontWeight="500"
            textAlign="center"
            mb={{ base: "15px", md: "25px", lg: "30px" }}
        >{children}</Heading>
    )
}

// COMMON PARAGRAPTH TAG
const CommonText = ({ children, }) => {
    return (<Text fontSize={{ base: "10px", md: "10px", lg: "25px" }} textAlign="center" w="95%"
        lineHeight={{ base: "25px", lg: "45px" }}
        color="brand.whitish">{children}</Text>)
}


// COMMON PARAGRAPTH2 TAG
const CommonText2 = ({ children,textAlign="start"}) => {
    return (<Text color="brand.whitish"
        textAlign={textAlign}
        fontSize={{ base: "15px", md: "21px", lg: "25px" }}
        mt={{ base: "20px", md: null, lg: "30px" }}
    >{children}</Text>)
}

// ENROLL BUTTON 
const EnrollButton = ({ children, onClick }) => {
    return (
        <Button my="40px" rounded="full" px="30px" py="25px" fontSize='22px'
            _hover={{ boxShadow: "0px 0px 45px white" }}
            onClick={onClick}>{children}</Button>
    )
}

// PLUS TEXT

const PlusText = ({ children }) => {
    return (
        <Heading
            fontSize={{ base: "40px", md: "50px", lg: "70px" }} color="brand.whitish"
        >{children}</Heading>
    )
}

const IconImage = ({ src, shadowColor = "#fff" }) => {
    return (
        <Image src={src}
            w={["60px", "90px", null, "120px"]}
            boxShadow={`0px 0px 25px ${shadowColor}`}
            borderRadius={{ base: "10px", md: "15px", lg: "25px" }}
        />
    )
}