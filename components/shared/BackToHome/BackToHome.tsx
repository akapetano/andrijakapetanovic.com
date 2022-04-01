import {
  Flex,
  Box,
  Link,
  Button,
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
            <Button
              aria-label="Back to home button"
              leftIcon={<ArrowBackIcon />}
              border="2px solid"
              borderColor={iconButtonColorScheme}
              _hover={{ borderColor: `${iconButtonHoverColorScheme}` }}
              bg="transparent"
              mr="0.5rem"
            >
              Back to home
            </Button>
          </Flex>
        </Link>
      </NextLink>
    </Box>
  );
}
