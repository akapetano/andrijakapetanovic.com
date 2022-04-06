import {
  Text,
  Box,
  Heading,
  useColorModeValue,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaSass, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function HomeIntro() {
  const nameColor = useColorModeValue('brand.600', 'brand.300');

  return (
    <Box pb="1rem" textAlign={['center', 'center', 'left', 'left']}>
      <Heading
        fontSize={['3xl', '3xl', '5xl', '5xl']}
        sx={{ '.authorName': { color: nameColor } }}
      >
        Hi, I&apos;m <strong className="authorName">Andrija</strong>
      </Heading>
      <Text variant="secondary" fontSize="xl">
        I&apos;m a front-end developer and translator.
      </Text>
    </Box>
  );
}
