import { AspectRatio, Box, Heading, Stack, Text } from '@chakra-ui/react'
import React, { Children } from 'react'

const Reviews = () => {
    return (
        <>
            <Heading color="brand.white" fontSize={{ base: "24px", md: "35px", lg: "46px" }}>What Changed After They Went Through?</Heading>
            <Text
                fontSize={{ base: "19px", md: "25px", lg: "36px" }}
                textAlign="center" w="95%"
                lineHeight={{ base: "25px", lg: "45px" }}
                color="brand.whitish">Yes, The Ultimate YT Editing Course works!</Text>
            <Text color="brand.whitish"
                textAlign={"center"}
                fontSize={{ base: "15px", md: "21px", lg: "25px" }}
                mt={{ base: "13px", md: null, lg: "20px" }}>Get to know the story of regular people, just like me and you, who mastered the craft from scratch, or transformed their existing ones.</Text>
            <Stack
                direction={{ base: "column", md: "column", lg: "row" }}
                spacing={"30px"}
                align="center"
                justify="space-between"
                mt="40px"
                w={"100%"}>
                <VideoBox>
                    <AspectRatio w={"100%"} mx="auto" bg="gray" ratio={16 / 9}>
                    <iframe src="https://drive.google.com/file/d/19ZMXK3Smgy0AnHwy08y5UcOB9zqSklRu/preview"
                    allow="autoplay"></iframe>
                    </AspectRatio>
                    <Text color="brand.whitish" fontSize={{ base: "15px", md: "21px", lg: "25px" }}>Alex</Text>
                    <Text color="brand.whitish" fontSize={{ base: "12px", md: "15px", lg: "17px" }}>Austria, Europe</Text>
                </VideoBox>
                <VideoBox>
                    <AspectRatio w={"100%"} mx="auto" bg="gray" ratio={16 / 9}>
                    <iframe src="https://drive.google.com/file/d/1MrazcYR7IwTM4jlSDCg_9kWtyCxO2rJb/preview" allow="autoplay"></iframe>
                    </AspectRatio>
                    <Text color="brand.whitish" fontSize={{ base: "15px", md: "21px", lg: "25px" }}>Harsh Paryani</Text>
                    <Text color="brand.whitish" fontSize={{ base: "12px", md: "15px", lg: "17px" }}>Mumbai India</Text>
                </VideoBox>
            </Stack>
        </>
    )
}

export default Reviews



const VideoBox = ({ children }) => {
    return (
        <Box display="flex"
            align="start"
            justify="center"
            flexDir="column"
            w={{ base: "100%", md: "50%", lg: "50%" }}>{children}</Box>
    )
}