import { Link, Flex, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const iconColor = useColorModeValue('black', 'gray.400');
  const githubIconHover = useColorModeValue('black', 'white');
  const footerBorder = useColorModeValue(
    '1px solid rgba(0, 0, 0, 0.05)',
    '1px solid rgba(255, 255, 255, 0.05)'
  );
  const footerBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="footer"
      bg={footerBg}
      borderTop={footerBorder}
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
      overflow="hidden"
      zIndex="10"
    >
      <HStack spacing="3.5rem">
        <Link href="https://github.com/akapetano" target="_blank">
          <Icon
            as={FaGithub}
            color={iconColor}
            opacity="0.6"
            boxSize={['4', '4', '6', '6']}
            transition="all 0.2s ease-in-out"
            _hover={{
              opacity: 1,
              transform: 'scale(1.2)',
              color: `${githubIconHover}`,
            }}
            _focus={{ boxShadow: 'outline' }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrija-kapetanovi%C4%87"
          target="_blank"
        >
          <Icon
            as={FaLinkedin}
            color={iconColor}
            opacity="0.6"
            boxSize={['4', '4', '6', '6']}
            transition="all 0.2s ease-in-out"
            _hover={{ opacity: 1, transform: 'scale(1.2)', color: '#0e76a8' }}
            _focus={{ boxShadow: 'outline' }}
          />
        </Link>
        <Link href="https://twitter.com/AndiKapetanovic" target="_blank">
          <Icon
            as={FaTwitter}
            color={iconColor}
            opacity="0.6"
            boxSize={['4', '4', '6', '6']}
            transition="all 0.2s ease-in-out"
            _hover={{ opacity: 1, transform: 'scale(1.2)', color: '#00ACEE' }}
            _focus={{ boxShadow: 'outline' }}
          />
        </Link>
      </HStack>
    </Flex>
  );
}
