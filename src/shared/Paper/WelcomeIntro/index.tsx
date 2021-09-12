import React, { useState, useEffect } from "react"
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react"

import EceIcons from "../../../theme/parts/Icons"

const WelcomeIntro = () => {
  const video = useDisclosure()

  const videoModal = (
    <Modal isOpen={video.isOpen} onClose={video.onClose} isCentered size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton bg="gray.50" />
        <ModalBody>
          <video preload="auto" controls autoPlay>
            <source
              src="/activations/images/registracija.webm"
              type="video/webm"
            />
            <source
              src="/activations/images/registracija.mp4"
              type="video/mp4"
            />
            Oprostite, vaš brskalnik ne podpira predvajanja tega videa.
          </video>
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  return (
    <Flex justifyContent="center" alignItems="center" my="8" flexDir="column">
      <Text>Potrebujete pomoč pri registraciji?</Text>
      <Button onClick={() => video.onOpen()} variant="ghost" size="xs">
        <Box mr="1" mb="0.5">
          <EceIcons name="chevronRight" boxSize="2" />
        </Box>
        <Text>Oglejte si predstavitveni video</Text>
      </Button>
      {videoModal}
    </Flex>
  )
}

export default WelcomeIntro
