import { Text, Flex } from "@chakra-ui/react"
import React from "react"
import PasswordStrengthBar from "react-password-strength-bar"

const PassLabel = (pass: string, accaptable: boolean) => {
  return (
    <Flex flexDirection="column">
      <Text>
        Geslo mora vsebovati min. 8 znakov od tega vsaj eno veliko ter malo
        črko, eno številko in en poseben znak.
      </Text>
      <Text fontSize="sm" marginTop="2">
        JAKOST GESLA:
      </Text>
      <PasswordStrengthBar
        password={pass}
        minLength={accaptable ? 1 : 10000}
        shortScoreWord="Prešibko geslo"
        barColors={["#E6EEF5", "#C30000", "#DD6B20", "#ECC94B", "#50A759"]}
        scoreWords={["Slabo", "Slabo", "Šibko", "Sprejemljivo", "Močno"]}
        scoreWordStyle={{
          color: "#E6EEF5",
          fontSize: "xs",
          fontWeight: "bold",
        }}
      />
    </Flex>
  )
}

export default PassLabel
