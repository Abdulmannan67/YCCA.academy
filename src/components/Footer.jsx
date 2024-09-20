import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

import { Link } from "react-router-dom"
import {links} from "../constants"

import "./Nav.css"

import yccaLogo from "../assets/MainLogo.png"

const Footer = () => {

  return (
    <Box bg="black" h="auto" border="3px solid white" display={["block","block","flex","flex"]}>
      <Box  w={["auto","auto","50%","50%"]} my={"50px"} pl={"50px"}>
        {/* <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"15px"} mb={"20px"}>
           <Image w={{base:"20%",md:null, lg:"5%"}} src={yccaLogo} alt="YourCheatCode Academy" />
        </Box> */}
        <Text width={["90%","70%","50%"]} style={{marginBottom:"3vh"}} color={"white"}>Crafted with love, passion and devotion by Industry Experts for YCCA students.</Text>
        <Text width={["90%","70%","50%"]}  color={"#7289DA"}>Copyright © 2023 YourCheatCode Academy</Text>
        <Text width={["90%","70%","100%"]} style={{marginTop:"3vh"}} color={"white"}>  <Link className="Nav" to={"/privacy-policy"}>  Privacy Policy </Link> |  <Link  className="Nav" to={"/terms-conditions"}>   Terms of Service </Link> | <Link  className="Nav" to={"/refund-cancellation"}>Refund & Cancellation </Link></Text>
        <Text  className="Nav"  style={{color:"white" , marginTop:"3vh"}}> <a href="mailto:info@ycca.in" > <i class="fa fa-envelope" >   </i>  info@ycca.in  </a>  </Text>
      </Box>
      <Box borderLeft={"1px solid white"} pl={"50px"} w={["90%","90%","50%","50%"]}>
       <SimpleGrid columns={3}  my={"50px"} rowGap={"15px"}>
        <Stack>
          <Box borderBottom={"1px solid white"} w={"fit-content"}>
          <Text fontSize={"18px"} color={"white"}>Company</Text>
          </Box>
          {/* <Link to={"/"}>
             <Text color={"#fff"}>Home</Text>
           </Link> */}
         
            <Link className='Nav' to="/our-story" >
            <Text className='Nav' color={"#fff"} > Our Story</Text>
            </Link>

            <Link className='Nav' to="/our-mission">
            <Text className='Nav' color={"#fff"} >Our Mission</Text>
            </Link>
       
      
        </Stack>
        <Stack>
          <Box borderBottom={"1px solid white"} w={"fit-content"}>
          <Text fontSize={"18px"} color={"white"}>Courses</Text>
          </Box>
          <Link className='Nav' to={"/"}>
            <Text  color={"white"} width={"80%"}>Master Video Editing </Text>
          </Link>
        </Stack>
        <Stack>
          <Box borderBottom={"1px solid white"} w={"fit-content"}>
          <Text fontSize={"18px"} color={"white"}>Socials</Text>
          </Box>
          <a className='Nav' href="https://www.instagram.com/ycca.in" target="_blank">
             <Text color={"white"}>Instagram</Text>
          </a>
          <a className='Nav' href="https://www.youtube.com/channel/UCy6AA-G4ezebzYc_gUR4ddQ" target="_blank">
             <Text color={"white"}>Youtube</Text>
          </a>
          
        </Stack>
       </SimpleGrid>
    </Box>
    </Box>
  )
}

export default Footer