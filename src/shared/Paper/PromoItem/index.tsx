import React from "react";
import { Box, Link, Text, VStack } from "@chakra-ui/react";
import EceIcons from "../../../theme/parts/Icons";
import type { PromoItemComponent } from "./types";

const PromoItem = ({ promo }: PromoItemComponent) => {
  const Item = () => (
    <VStack
      spacing={[2, 4]}
      width={{ base: 36, sm: 44, xl: 56, "2xl": 44, "3xl": 56 }}
      alignItems="center"
    >
      <EceIcons name={promo.icon} boxSize={["6", "8", "10"]} />
      <Box fontWeight="bold">
        <Text>{promo.title1}</Text>
        <Text>{promo.title2}</Text>
      </Box>
      <Text>{promo.body}</Text>
    </VStack>
  );

  return promo.url ? (
    <Link
      _focus={{ boxShadow: "none" }}
      href={promo.url}
      target="_blank"
      textDecoration="none"
      borderRadius={16}
      _hover={{ backgroundColor: "#00000033", cursor: "hand" }}
    >
      <Item />
    </Link>
  ) : (
    <Item />
  );
};

export default PromoItem;
