import { Link, Flex, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Flex
      borderTop="1px solid rgba(0, 0, 0, 0.1)"
      align="center"
      justify="center"
      mt="1rem"
      h="1rem"
      pos="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="8rem"
      boxShadow="base"
    >
      <HStack spacing="3rem">
        <Link href="https://github.com/akapetano">
          <FaGithub color="black" opacity="0.7" size="2rem" />
        </Link>
        <Link href="https://www.linkedin.com/in/andrija-kapetanovi%C4%87">
          <FaLinkedin color="black" opacity="0.7" size="2rem" />
        </Link>
        <Link href="">
          <FaTwitter color="black" opacity="0.7" size="2rem" />
        </Link>
      </HStack>
    </Flex>
  );
}
