import { Flex } from "@chakra-ui/react";
import React from "react";

const BgWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      flex="1"
      flexDir="column"
      bgGradient="linear(to-b, blue.600 0%, transparent 70%)"
    >
      <Flex
        flex="1"
        flexDir="column"
        bgGradient="linear(to-b, blackAlpha.300 0%, transparent)"
      >
        <Flex
          flex="1"
          flexDir="column"
          alignItems="center"
          justifyContent="flex-start"
          h={{ base: "auto", md: "90vh" }}
          bgGradient="linear(to-t, blackAlpha.600 33%, transparent 70%)"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BgWrap;
