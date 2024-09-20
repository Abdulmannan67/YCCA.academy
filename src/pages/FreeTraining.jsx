import { Box, Button, FormControl,FormHelperText, FormLabel, Heading, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { freeTraining } from "../utils";
import BeforeSignup from "../components/freeTraining/BeforeSignup";




const FreeTraining = () => {
  const isAuthenticated = false;

  return (isAuthenticated?
    <Box w="100%" border='1px solid black' bg="brand.black" boxSizing="border-box" pb="50px">
      <ReusableVStack>
       <ReusableHeading>Free Training Reveals:</ReusableHeading>     
        <ReusableText color="brand.orangish">
            How to Install the software, and access our *Secret Editing Pack* to make a perfectly edited youtube video in Just 15 minutes.
        </ReusableText>
        <ReusableText>
           It has taken me 3 years to craft this “Secret Editing Pack” to be as beginner-friendly as possible and, at the same time, optimise it to edit YouTube videos 10x faster than any other editor, while still ensuring that they look as good as any the best youtube videos!
        </ReusableText>
        <ReusableText>
           This would basically act as a taste test for you to see if you would enjoy video editing or not. This is definitely not going to help you land jobs or clients but is enough to tingle that editing gene of yours and bring out all the creativity you have.
        </ReusableText>
        <ReusableText>
           But, this is exactly what I would give my younger self to save him 3 years of his life. Using this Tutorial pack he would have learned wayy more than watching the “youtube tutorials”.
        </ReusableText>
        <ReusableText>
          <Box>Now what am I getting out of this?</Box> - it's simple, your trust to help as many people as i can, I just want to help a younger shaad out there in the world struggling, skipping zoom classes to learn how to edit youtube videos. I am just trying to be his cheat code in life.
        </ReusableText>
      </ReusableVStack>
      <ReusableVStack>
        <ReusableHeading>Step 1</ReusableHeading>
        <ReusableText>
        go to GFX tooz sign up throuhgh our link
        <Box>download premier, make a new project blah blah</Box> 
        </ReusableText>
      </ReusableVStack>
      <ReusableVStack>
        <ReusableHeading>Step 2</ReusableHeading>
        <ReusableText>
        - editing pack download
        </ReusableText>
      </ReusableVStack>
      <ReusableVStack>
        <ReusableHeading>Step 2</ReusableHeading>
        <ReusableText>
        - Video tutorial👇
        </ReusableText>
         <Image mt="25px" src={freeTraining} alt="free training" />
         <Button rounded="none" bg="brand.100" color="brand.whitish" mt="20px"
           _hover={{bg:"brand.150",transform:"scale(1.09)"}}
          >Find out more</Button>
      </ReusableVStack>
    </Box>:
    <>
    <BeforeSignup />
    </>
  )
}

export default FreeTraining


// REUSABLE VSTACK CONTAINER 
const ReusableVStack = ({children,border}) =>{
  return(
    <VStack
        w={{base:"90%",md:"90%",lg:null,xl:"60%"}} 
        mx={"auto"} mt={"50px"}
        maxW={"1380px"}
        border={`${border?border:null}`}
    > {children}
    </VStack>
  )
}
 
// REUSABLE TEXT 
const ReusableText  = ({children,mt=25,color="brand.whitish",textAlign="center",w="auto"}) =>{
  return(
    <Text fontSize={{base:"18px",md:null,lg:"24px"}} color={color} lineHeight={"35px"} w={w} textAlign={textAlign} mt={`${mt}px`}>{children}</Text>
  )
}

const ReusableHeading = ({children}) =>{
  return(
    <Heading size={{base:"lg",md:"xl",lg:"xl",xl:null}} color={"brand.whitish"} fontWeight={"500"}>{children}</Heading>
  )
}
