import { Box, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { accessMaterials } from '../../constants'
import { downArrow } from '../../utils'

const AccessMaterials = () => {
    return (
        <>
            <Heading
                w={{ base: "95%", md: "90%", lg: "70%" }}
                textAlign="center"
                color="brand.whitish"
                my={"50px"}
               // fontSize={{ base: "30px", md: "46px", lg: "60px" }}
                fontSize={{ base: "24px", md: "35px", lg: "46px" }}
            >When You Join YCCA, You Get Full & Immediate Access To
                <Box as="span" borderRadius="15px">
                    <Image w={{ base: "25px", md: "35", lg: "50px" }} display="inline" src={downArrow} />
                </Box>
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }} gap={"40px"} w="100%">
                {
                    accessMaterials.map((item,idx) => (
                        <Stack key={idx}
                            direction={{ base: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row" }}
                            align="center"
                            spacing={"20px"}
                            border="1px solid #2C73D2"
                            borderRadius="10px"
                            boxShadow={"0px 0px 10px #466ae8"}
                            boxSizing="border-box"
                            p="15px"
                        >
                            <Text 
                             fontSize={{ base: "18px", md: null, lg: "22px" }}
                            color="brand.whitish">{item.count}. {item.content}</Text>
                            <Image w={{base:"400px",md:null,lg:"200px"}} src={item.image} />
                        </Stack>
                    ))
                }
            </SimpleGrid>
            <Flex align="center" justify="center"
                border="2px solid white"
                p={{ base: "15px", md: "25px", lg: "30px" }}
                mt={{ base: "20px", md: "40px", lg: "55px" }}>
                <Text fontSize={{ base: "18px", md: null, lg: "22px" }} align="center" color="brand.whitish">8. 10% of all the company profits go towards providing scholarships and equipment to underprivileged individuals residing in tier 3 and tier 4 cities in India who are unfortunate to be unable keep up with the fast-paced global economy.</Text>
            </Flex>
        </>
    )
}

export default AccessMaterials