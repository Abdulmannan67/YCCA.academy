import { Button } from '@chakra-ui/react'
import React from 'react'

const BigButton = ({children}) => {
  return (
    <Button rounded={"full"} bg={"brand.100"} h={"65px"} w={"225px"} fontSize={"25px"}
     _hover={{bg:"#7ca7f2",boxShadow: "0px 0px 20px #7ca7f2",    transform: 'scale(1.2)',transitionDuration: '0.2s'}}>
    {children}
  </Button>
  )
}

export default BigButton