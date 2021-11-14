import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  
    styles: {
      global: (props) => ({
        "html": {
          width: "100%",
          height: "100%",
        },
        "body": {
          width: "100%",
          height: "100%",
          bgGradient: "linear(brand.100, brand.200, brand.300)",
          backgroundAttachment: "fixed",
        },
      }),
    },
  })

export default theme