import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { downArrow } from '../../utils'
import { logoWithText }  from '../../utils'

const EnrollNow = () => {
    return (
        <>
            <Stack
                direction={{ base: "column", md: "column", lg: "row" }}
                spacing={"30px"}
                w={{ base: "90%", md: "70%", lg: "65%", }}
                mx="auto"
                border="0px solid yellow">
                <VStack h={{base:"auto",md:null,lg:"400px"}} w={{base:"100%",md:"100%",lg:"50%"}} borderRadius="10px" justify="center"
                    boxSizing='border-box'
                    px={{base:0,md:"10px",lg:"20px"}}
                >
                    <Heading 
                    fontSize={{base:"35px",md:null,lg:"49px"}} 
                    align="center" 
                    color="brand.whitish" 
                    fontWeight={"extrabold"} >Exclusive Offer for our first 101 Students</Heading>
                    <Heading fontSize={{base:"28px",md:null,lg:"34px"}} align="center" color="#466ae8"  >(hurry only 80 spots left)</Heading>
                </VStack>
                <VStack h={"400px"} 
                w={{base:"100%",md:"100%",lg:"50%"}} 
                borderRadius="10px" 
                justify="center" 
                boxShadow="0px 0px 10px #466ae8"
                >
                    <Flex
                    align="center"
                    justify="center"
                    border="0px solid white"
                    mt="20px"
                    mb="30px"
                >
                    <Image src={logoWithText} alt="Logo"
                        w="260px" />

                </Flex>
                    <Flex direction="column" align="center" justify="center" gap={"10px"}>
                        <Text
                            fontSize={{ base: "25px", md: null, lg: "25px" }}
                            fontWeight="bold"
                            color="brand.whitish"
                            align="center"
                            w="90%"
                        >value worth ₹84,990 in just
                        </Text>
                        <Image display="inline" w={"30px"} src={downArrow} />
                    </Flex>

                    <Heading
                        color="#466ae8"
                        fontSize={{ base: "60px", md: null, lg: "60px" }}>₹54,990</Heading>
                    <Button my="20px" rounded="full" px="30px" py="25px" fontSize='22px'
                        _hover={{ boxShadow: "0px 0px 35px white", transform: "scale(1.2)" }}>Book your seat</Button>
                </VStack>
            </Stack>
        </>
    )
}

export default EnrollNow