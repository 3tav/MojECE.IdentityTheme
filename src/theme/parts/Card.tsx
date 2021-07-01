import * as React from "react"
import { Flex, Box, Text, Grid } from "@chakra-ui/react"

import { mode } from "@chakra-ui/theme-tools"

const Card = (props: any) => (
  <Flex
    px={4}
    pb={4}
    pt={2}
    rounded="3xl"
    shadow="card"
    bg={mode("white", "blue.600")(props)}
    textAlign="left"
    justifyContent="space-between"
    flexDirection="column"
    flex={props?.flex || "1"}
    minHeight={props?.minHeight || "lg"}
  >
    <Flex flex={1} mt={2} flexDirection="column">
      <Box>
        {props.title && (
          <Text fontSize="lg" fontWeight="bold" color="blue.600">
            {props.title}
          </Text>
        )}
        {props.subtitle && (
          <Text mb={2} fontSize="3xs" fontWeight="bold" letterSpacing="widest">
            {props.subtitle}
          </Text>
        )}
      </Box>
      <Flex flexDirection="column" flex={1}>{props.children}</Flex>
    </Flex>

    {(props.link1 || props.link2) && (
      <Grid
        templateColumns={props.link1 && props.link2 ? "1fr 1fr" : "1fr"}
        alignItems="center"
        justifyItems={props?.linksJustify ? props.linksJustify : "center"}
        mt={4}
      >
        {props.link1}
        {props.link2}
      </Grid>
    )}
  </Flex>
)

export default Card
