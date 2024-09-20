import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { courseCurriculum } from '../../constants'

const CourseCurriculum = () => {
    return (
        <>
        <div style={{display:"flex" , flexDirection:"column" ,alignItems:"center",justifyContent:"center", width:"100%" , backgroundColor:"white"}}>
            <Heading color="black"
             fontSize={{ base: "24px", md: "35px", lg: "46px" }}
            mb="30px" mt="30px">Course Curriculum</Heading>
            <Box w={{ base: "100%", md: "100%", lg: "80%" }} mb="30px" mx="auto">
                <Accordion allowToggle w="100%">
                    {courseCurriculum.map((course, idx) => (
                        <AccordionItem mb="20px"
                            border={`1px solid ${idx === 8 ? "#ffb900" : "#2C73D2"}`}
                            bg="brand.blackish"
                            borderRadius={"10px"}
                            boxShadow={idx === 8 ? "0px 0px 10px 0px #ffb900" : null}
                        >
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading fontSize={{ base: "18px", md: "22px", lg: "22px" }} my="15px" color={"brand.whitish"} >Week {course.week} - {course.title} </Heading>
                                </Box>
                                <AccordionIcon color="brand.whitish" />
                            </AccordionButton>
                            <AccordionPanel>
                                <UnorderedList>
                                    {
                                        course.points.map((point) => (
                                            <ListItem color={"brand.whitish"} fontSize={{ base: "15px", md: "18px", lg: "18px" }}>{point}</ListItem>
                                        ))
                                    }
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>

                    ))}
                </Accordion>
            </Box>
            </div>
        </>
    )
}

export default CourseCurriculum