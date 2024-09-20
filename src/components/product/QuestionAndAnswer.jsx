import React from 'react'
import { questionAndAnswer } from '../../constants'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

const QuestionAndAnswer = () => {
  return (
    <>
      
      <Heading color="brand.white" mb="30px" fontSize={{ base: "24px", md: "35px", lg: "46px" }}>Get Your Questions Answered!</Heading>
            <Box w={{ base: "100%", md: "100%", lg: "80%" }} mx="auto">
                <Accordion allowToggle w="100%">
                    {questionAndAnswer.map((item, idx) => (
                        <AccordionItem mb="20px" key={idx}
                            border={`1px solid #2C73D2`}
                            bg="brand.blackish"
                            borderRadius={"10px"}
                        >
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading fontSize={{ base: "18px", md: "22px", lg: "22px" }} my="15px" color={"brand.whitish"} >{item.question} </Heading>
                                </Box>
                                <AccordionIcon color="brand.whitish" />
                            </AccordionButton>
                            <AccordionPanel>
                                <UnorderedList>
                                    {
                                        item.answer.map((point,idx) => (
                                            <ListItem key={idx} color={"brand.whitish"} mb={"10px"} fontSize={{ base: "15px", md: "18px", lg: "18px" }}>{point}</ListItem>
                                        ))
                                    }
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>

                    ))}
                </Accordion>
            </Box>
    </>
  )
}

export default QuestionAndAnswer