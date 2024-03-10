import React from "react";
import { Heading, HStack, Image, Text, VStack, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      maxW="sm"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2}>
        <Heading as="h3" size="md" color="gray.600">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack w="full" justify="space-between" alignItems="center">
         <Text fontSize="sm" color="gray.600" ml={250}>See more</Text>
        <IconButton
          aria-label="See more"
          icon={<FontAwesomeIcon icon={faArrowRight} size="1x" />}
          variant="ghost"
          size="sm"
          color="gray.600"
          mt={4}
        />
      </HStack>
    </VStack>
  );
};

export default Card;
