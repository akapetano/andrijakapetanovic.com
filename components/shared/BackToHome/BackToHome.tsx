import {
  Flex,
  Box,
  Link,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function BackToHome() {
  const iconButtonColorScheme = useColorModeValue('gray.200', 'gray.500');
  const iconButtonHoverColorScheme = useColorModeValue(
    'brand.400',
    'brand.500'
  );

  return (
    <Box>
      <NextLink passHref href="/">
        <Link fontSize="md">
          <Flex align="center" justify="flex-start">
            <IconButton
              aria-label="Back to home button"
              icon={<ArrowBackIcon />}
              border="2px solid"
              borderColor={iconButtonColorScheme}
              _hover={{ borderColor: `${iconButtonHoverColorScheme}` }}
              isRound
              bg="transparent"
              mr="1rem"
            />{' '}
            <Text>Back to home</Text>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}
