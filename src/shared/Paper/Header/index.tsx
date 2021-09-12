import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react"

import Logo from "shared/Logo"

const Header = () => {
  return (
    <Flex
      py={{ base: 10, md: 16, "3xl": 20 }}
      px="4"
      flexDir="column"
      alignItems="center"
    >
      <Box>
        <Logo theme="dark" url={null} boxSize={[24, 24, 28, 28, 28]} />
      </Box>

      <Text
        textAlign="center"
        fontSize={["2lg", "3lg", "2lg", "3lg", "4lg", "xl"]}
        lineHeight="shorter"
        maxW={["90%", "75%", "75%", "66%", "80%", "66%"]}
        fontWeight="light"
        sx={{ wordWrap: "initial" }}
      >
        Dobrodošli na vpisni strani v aplikaciji Moj&nbsp;ECE in ECE&nbsp;shop
      </Text>
    </Flex>
  )
}

export default Header
