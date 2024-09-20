import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Image, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AiOutlineHome, AiOutlineHistory} from "react-icons/ai"
import {BsFlagFill} from "react-icons/bs"
import {GoCodeReview} from "react-icons/go"
import {MdModelTraining,MdOutlineComment} from "react-icons/md"
import {GrPersonalComputer} from "react-icons/gr"
import { MainLogo } from "../utils/index"
import { links } from '../constants'

import "./Nav.css"

const Navbar = () => {
  return (
    <VStack bg={"black"} style={{position: "sticky", top:"0", zIndex: "10"}}>
      <Flex h={"70px"} w={"100%"}maxW="1920px" mx="auto"  align={"center"} justify={"space-between"} zIndex={"5"} pos={"sticky"} top={"0"} >

        <Box ml={["15px", "20px", "30px"]}>
          <Link to={"/"}>
            <Image w={"40px"} src={MainLogo} alt='Logo' />
          </Link>
        </Box>
        <Box className='Nav' style={{marginRight:"5vw"}}display={["none", "none", "none", "flex"]} gap={"35px"} >
          {links.map((link, idx) => (
            <Link to={`/${link.path}`} key={idx}>
              <Text color={"#fff"} fontSize={"18px"} >{link.conent}</Text>
            </Link>
          ))}
        </Box>
        <Box display={["none", "none", "none", "block"]} mr={["15px", "20px", "30px"]} >
          {/* <Link to={"/login"}  >
            <Button color={"#black"} fontSize={"18px"} rounded={"full"} bg={"brand.100"} h={"35px"} px={"20px"} >Log In</Button>
          </Link> */}
        </Box>
        <Box mr={["15px", "20px", "30px"]} display={["block", "block", "block", "none"]}>
          <MobileNav />
        </Box>
      </Flex>
    </VStack>
  )
}

export default Navbar



function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <IconButton aria-label='hamburger' bg={"transparent"} _hover={{ bg: "transparent" }}
        onClick={() => onOpen()}
        icon={<HamburgerIcon color={"white"} fontSize={["20px", "26px"]} />}
      />
      <Drawer onClose={onClose} isOpen={isOpen} w={"250px"} h={"100vh"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} fontSize={"20px"} />
          <DrawerBody m={0} p={0} h={"auto"} bg={"#353740"}>
            <Box ml={"20px"} mt={"60px"} >
              <Link to={"/"}>
                <MobileHeading onClose={onClose}>Application Form</MobileHeading>
              </Link>
              <Link to={"/our-story"}>
                <MobileHeading onClose={onClose}>Our Story</MobileHeading>
              </Link>
              <Link to={"/our-mission"}>
                <MobileHeading onClose={onClose}>Our Misson</MobileHeading>
              </Link>
              {/* <Link to={"/101-training"}>
                <MobileHeading onClose={onClose}>101 Training</MobileHeading>
              </Link>
              <Link to={"/reviews"}>
                <MobileHeading onClose={onClose}>Reviews</MobileHeading>
              </Link>
              <Link to={"/reviews"}>
                <MobileHeading onClose={onClose}>Ultimate Editing Course</MobileHeading>
              </Link>
              <Link to={"/reviews"}>
                <MobileHeading onClose={onClose}>All Course</MobileHeading>
              </Link>
              <Link to={"/login"} style={{ marginRight: "45px" }} >
                <Button onClick={() => onClose()} color={"#black"} fontSize={"18px"} rounded={"full"} bg={"white"} h={"35px"} ml={"180px"} px={"20px"} >Log In</Button>
              </Link> */}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function MobileHeading({ children, onClose }) {
  return (
    <Heading display={"flex"} gap={"5px"} justifyContent={"end"} size={"md"} fontWeight={"600"} mr={"20px"} mb={"20px"} color={"white"} _hover={{ color: "black" }} onClick={() => onClose()} >{children}</Heading>
  )
}