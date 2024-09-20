import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { logoWithText } from '../../utils'

const BuyNow = () => {
    return (
        <>
            <VStack
                maxW="650px"
                width={{base:"90%",md:"80%",lg:null}}
                m="auto"
                mt="70px"
                bg='brand.blackish'
                //boxSizing="border-box" 
                border="1px solid"
                borderColor={"brand.100"}
                borderRadius="15px"
                px="50px"
                py="60px"
                boxShadow="0px 0px 10px #466ae8"
                >
                <Flex
                    align="center"
                    justify="center"
                    border="0px solid white"
                >
                    <Image src={logoWithText} alt="Logo"
                        w="260px" />

                </Flex>
                <Text
                    color="brand.whitish"
                    fontSize={{ base: "13px", md: "16px", lg: "23px" }}
                    mt="30px"
                    
                >Value Worth <span style={{fontWeight: "800"}}>₹24,990 </span>Given In Just </Text>
                <Heading
                    fontSize={{ base: "34px", md: "42px", lg: "46px" }}
                    mt="20px"
                    mb="-15px"
                    color="brand.white"
                >₹501</Heading>
                {/* BUT NOW BUTTON   */}
                <BuyNowButton> <Link to="/application-form">Enroll Now</Link></BuyNowButton>
                <Text
                    color="brand.whitish"
                    my="20px"
                    align="center"
                >₹101 from this amount goes to <Box>
                        <a href="https://shaadfoundation.org" target="_Shaad Foundation" style={{ textDecoration: "underline" }}>Shaad Foundation</a>
                    </Box> </Text>
                    {/* #TODo  */}
                {/* <Flex
                    align="center"
                    gap="15px"
                    border="1px solid green"
                >
                    <Text>Payment Method</Text>
                    <Text>Payment Method</Text>
                    <Text>Payment Method</Text>

                </Flex> */}
            </VStack>
        </>
    )
}

export default BuyNow


const BuyNowButton = ({ children }) => {
    return (
        <Box
            as='button'
            w={"40%"}
            h="50px"
            mx={"auto"}
            mt="30px"
            fontSize={"23px"}
            fontWeight='bold'
            borderRadius='md'
            transition={"ease 0.3s"}
            backgroundColor="white"
            color="black"
            _hover={{ boxShadow: "0px 0px 25px white", transform: "scale(1.2)" }}
        >
        {children}
        </Box>
    )
}