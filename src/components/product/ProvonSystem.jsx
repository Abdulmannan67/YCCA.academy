import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { provenSystem } from '../../utils'

const ProvenSystem = () => {
  return (
    <>
      <Heading textAlign="center"
      fontSize={{base:"24px",md:"35px",lg:"46px"}}
      color="brand.whitish"
      lineHeight={{base:"30px",md:"40px",lg:"55px"}}
      my={{base:"30px",md:null,lg:"60px"}}
      >Proven Systems, Processes And SOPs To
        <Box>
          Streamline Each Area Of Your Editing Process.
        </Box>
      </Heading>
      <Image w={{base:"80%",md:"70%",lg:"55%"}} src={provenSystem} alt='Proven System Image' />
    </>
  )
}

export default ProvenSystem 