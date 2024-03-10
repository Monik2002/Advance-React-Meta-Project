import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="#18181b"
      zIndex="1000"
      py={4}
    >
      <Box maxW="1280px" mx="auto" px={4}>
        <HStack justify="space-between">
          <HStack spacing={4}>
            {socials.map((social, index) => (
              <IconButton
                key={index}
                aria-label={social.url}
                icon={<FontAwesomeIcon icon={social.icon} />}
                variant="ghost"
                onClick={() => window.open(social.url, "_blank")}
                size="md"
                color="gray.600"
              />
            ))}
          </HStack>
          <HStack spacing={8}>
            <Box
              as="a"
              href="#projects-section"
              onClick={handleClick("projects")}
              cursor="pointer"
              _hover={{ color: "purple.400" }}
              color="gray.600"
            >
              Projects
            </Box>
            <Box
              as="a"
              href="#contactme-section"
              onClick={handleClick("contactme")}
              cursor="pointer"
              _hover={{ color: "purple.400" }}
              color="gray.600"
            >
              Contact Me
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
