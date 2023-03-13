import { extendTheme, ThemeConfig } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'green.50',
        color: 'green.900',
      }
    }
  }
})