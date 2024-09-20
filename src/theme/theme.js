import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
  colors:{
       brand:{
        100:"#7289DA",
        150:"#466ae8",
        white:"white",
        midwhite:"#7b88a8",
        black:"black",
        whitish:"#F9F7EF",
        blackish:"#00050B",
        orangish:"#E4AB2A",
        success:"#19a803",
        failure:"#ed2f39",
        golden:"#ffb900"
       },
       fonts:{
        alkatra:`'Alkatra', cursive`
       }
  }
})

export default theme