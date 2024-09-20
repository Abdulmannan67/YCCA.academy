import { AspectRatio, Box, Button, Flex, Heading, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Skeleton, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { loadingGif, starFilled } from '../utils'



const Reviews = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [review, setReview] = useState(null)
  const [isLoading,setIsloading] = useState(false)

  const triggeredModel = (item) => {
    setReview(item)
    onOpen()
  }
  return (
    <Box
      border="0px solid blue"
      // boxSizing='border-box'
      pt={{ base: 15, md: null, lg: 25 }}
      pb={{ base: 30, md: null, lg: 40 }}
      bg="brand.black"
    >
      <ReVStack>
        <Box w={"100%"}>
          <Heading
            color="brand.white"
            fontSize={{ base: "22px", md: "25px", lg: "32px" }}
            mb={{ base: "10px", md: null, lg: 15 }}

          >Reviews</Heading>
          <Flex
            mb={{ base: 15, md: null, lg: 25 }}
          >
            {/* FILTER  */}
            <Text color="brand.white" >Filter</Text>
            <Spacer />
            {/* RESULT COUNT HERE  */}
            <Text color="brand.white" >9 results</Text>
          </Flex>
        </Box>
        <SimpleGrid
          w={"100%"}
          columns={{ base: 2, sm: 3, md: 3, lg: 3 }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "15px", md: "20px", lg: "40px" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <>
              <Box onClick={() => triggeredModel(item)}>
                <ReviewCard >
                  <Box>
                    <Heading color={"brand.white"}
                      fontSize={{ base: "22px", md: "28px", lg: "33px" }}
                    >Jose Cardon</Heading>
                    <Flex gap={"2px"}>
                      {[1, 2, 2, 3, 4].map((star, idx) => (
                        <i style={{ color: "orange" }} className="fa-solid fa-star"></i>
                      ))
                      }
                    </Flex>
                  </Box>
                  <Flex
                    h={"30px"}
                    w={"90%"}
                    align="center"
                    pos={"absolute"}
                    left={"auto"}
                    right={"auto"}
                    bottom={"20px"}
                  >
                    <i style={{ color: "white", fontSize: "30px" }} className="fa-regular fa-circle-play"></i>
                    <Spacer />
                    <Text fontSize="14px" color="brand.whitish" >Carrolton, USA</Text>
                  </Flex>
                </ReviewCard>
              </Box>
              <ModalBox isOpen={isOpen} onClose={onClose} >
                <Box
                 bgImage={`url(${loadingGif})`}
                 bgPos="center"
                 bgRepeat="no-repeat"
                
                >
                  <AspectRatio w="600px" ratio={16 / 9} >
                    <iframe src="https://drive.google.com/file/d/1MrazcYR7IwTM4jlSDCg_9kWtyCxO2rJb/preview" width="640" height="480" allow="autoplay"></iframe>
                  </AspectRatio>
                </Box>
              </ModalBox>
            </>
          ))

          }
        </SimpleGrid>
        {/* PAGINATION  */}
        <Flex
          align="center"
          my={25}
          gap={30}
        >
          <IconButton
            colorScheme='blue'
            variant="outline"
            size={"sm"}
            _hover={{ variant: "unstyled" }}
            icon={<i className="fa-solid fa-chevron-left"></i>} />
          <Text color="brand.midwhite">2</Text>
          <IconButton
            colorScheme='blue'
            variant="outline"
            size={"sm"}
            _hover={{ variant: "unstyled" }}
            icon={<i className="fa-solid fa-chevron-right"></i>} />

        </Flex>
      </ReVStack>
    </Box>
  )
}

export default Reviews


const ReVStack = ({ children }) => {
  return (
    <VStack
      w={{ base: "95%", md: "85%", lg: "55%" }}
      maxW="1400px"
      mx="auto"
      border="0px solid white"

    >{children}</VStack>
  )
}

//REVIEW CARD
const ReviewCard = ({ children }) => {
  return (
    <Box
      h={{ base: "230px", sm: null, md: "330px", lg: null }}
      w="auto"
      border="1px solid white"
      borderRadius={{ base: "10px", md: "15px", lg: "20px" }}
      bg="brand.blackish"
      bgImage="url(https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      boxSizing='border-box'
      p="15px"
      justify="space-between"
      pos="relative"
    >
      {children}
    </Box>
  )
}

const ModalBox = ({ isOpen, onClose, children }) => {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered
        size={"2xl"}
      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='0%'
          backdropBlur='1px' />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}