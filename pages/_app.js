import '../styles/globals.css'
import theme from '../theme.jsx'
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (<ChakraProvider resetCSS theme={theme}><Component {...pageProps} />    </ChakraProvider>)
}

export default MyApp
