/**
 * Paper / Card
 * (unstyled)
 */

import { Container, Grid, Box, Flex, GridItem, Text } from "@chakra-ui/react"
import { CompositionComponent } from "../types"

import Logo from "shared/Logo"
import EceIcons, { IconName } from "theme/parts/Icons"

export default function Paper({ children }: CompositionComponent) {
  const IntroItem = ({
    icon,
    title,
    subtitle,
  }: {
    icon: IconName
    title: string
    subtitle: string
  }) => (
    <Box color="white">
      <Box
        display="inline-block"
        borderBottom="2px"
        borderColor="white"
        pb="2"
        mb="2"
      >
        <EceIcons name={icon} boxSize="10" />
      </Box>
      <Text fontWeight="bold" my="2">
        {title}
      </Text>
      <Text my="2">{subtitle}</Text>
    </Box>
  )

  return (
    <Flex minHeight="100vh" flexDir={["column", "column", "row", "row"]}>
      <Flex flex="4" bgImage="login90.webp" bgSize="cover" bgPosition="center">
        <Flex
          flex="1"
          justifyContent="flex-start"
          alignItems="center"
          bgGradient="linear(to-b, blue.700, transparent)"
          flexDir="column"
        >
          <Box color="white" mt="10">
            <Logo theme="dark" boxSize={[28, 32, 32, 32, 40]} />
          </Box>

          <Grid
            display={["none", "none", "grid", "grid"]}
            templateColumns={[
              "auto",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={8}
            px="16"
            mt="16"
            maxW="container.sm"
          >
            <GridItem>
              <IntroItem
                icon="energySolar"
                title="Lastna sončna elektrarna"
                subtitle="Sončna elektrarna na ključ iz ECE vam omogoča, da boste preskrbljeni z lastnim virom električne energije."
              />
            </GridItem>
            <GridItem>
              <IntroItem
                icon="energyAirCondition"
                title="Nakup energetskih naprav"
                subtitle="V spletni trgovini ECE shop posebno pozornost namenjamo energetsko učinkovitim napravam."
              />
            </GridItem>
            <GridItem>
              <IntroItem
                icon="energyHeatPump"
                title="Toplotne črpalke"
                subtitle="Z učinkovitim načinom izkoriščanja energije lahko stroške priprave sanitarne vode in ogrevanja znižamo tudi do 75%."
              />
            </GridItem>
            <GridItem>
              <IntroItem
                icon="energySmartHouse"
                title="Pametni dom"
                subtitle="Na voljo so rešitve, ki omogočajo nadzor nad obstoječimi električnimi napravami brez dodatnih posegov v gradnjo."
              />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
      <Box flex="5">
        <Container maxW="container.sm">
          {children}
        </Container>
      </Box>
    </Flex>
  )
}
