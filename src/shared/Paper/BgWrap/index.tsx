import { Flex } from "@chakra-ui/react"
import React from "react"

const BgWrap = ({ children }: { children: React.ReactNode }) => {
  const BG_IMAGE = "https://login.ece.si/activations/images/intro90.webp"

  return (
    <Flex
      flex={{ base: 0, lg: 4 }}
      bgImage={BG_IMAGE}
      bgSize="cover"
      bgPosition="center"
      minH={{ base: "0", lg: "90vh" }}
      color="white"
    >
      <Flex
        flex="1"
        flexDir="column"
        bgGradient="linear(to-b, blue.600 0%, transparent 50%)"
      >
        <Flex
          flex="1"
          flexDir="column"
          bgGradient="linear(to-b, blackAlpha.600, transparent)"
        >
          <Flex
            flex="1"
            flexDir="column"
            alignItems="center"
            justifyContent="flex-start"
            h={{ base: "auto", md: "90vh" }}
            bgGradient="linear(to-t, blackAlpha.600, transparent)"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BgWrap
