import {
  useColorModeValue,
  Grid,
  Icon,
  Heading,
  Tooltip,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa';
import { SiNextdotjs, SiChakraui, SiTypescript } from 'react-icons/si';

export function AboutFrontendToolbox() {
  const textColor = useColorModeValue('gray.500', 'gray.400');
  const jsColor = useColorModeValue('#f7c427', '#f7df1e');
  const nextJsColor = useColorModeValue('#000', 'gray.100');

  const FRONTEND_TOOLBOX = [
    { toolName: 'HTML5', toolIcon: FaHtml5, toolColor: '#E34C26' },
    { toolName: 'CSS3', toolIcon: FaCss3Alt, toolColor: '#167dbe' },
    { toolName: 'Sass', toolIcon: FaSass, toolColor: '#ce679a' },
    { toolName: 'JavaScript', toolIcon: FaJsSquare, toolColor: jsColor },
    { toolName: 'React', toolIcon: FaReact, toolColor: '#5ed3f3' },
    { toolName: 'TypeScript', toolIcon: SiTypescript, toolColor: '#3178c6' },
    { toolName: 'Next.js', toolIcon: SiNextdotjs, toolColor: nextJsColor },
    { toolName: 'Chakra UI', toolIcon: SiChakraui, toolColor: '#2cc6b8' },
  ];

  return (
    <Box mb="2rem">
      <Heading as="h3" fontSize="lg">
        Front-end toolbox
      </Heading>
      <Text fontSize="smaller" color={textColor}>
        These are the tools that I use in my day-to-day work.
      </Text>
      <Grid
        templateColumns={[
          'repeat(4, 1fr)',
          'repeat(4, 1fr)',
          'repeat(8, 1fr)',
          'repeat(8, 1fr)',
        ]}
        m="1rem 0"
        gap={['1rem', '1rem', '0.5rem', '0.5rem']}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {FRONTEND_TOOLBOX.map((tool) => (
          <Tooltip
            key={tool.toolName}
            label={tool.toolName}
            hasArrow
            shouldWrapChildren
            bg={tool.toolColor}
          >
            <span>
              <Icon
                key={tool.toolName}
                as={tool.toolIcon}
                boxSize={['6', '6', '8', '8']}
                transition="all 0.2s ease-in-out"
                _hover={{
                  opacity: 1,
                  transform: 'scale(1.2)',
                  color: tool.toolColor,
                }}
                _focus={{ boxShadow: 'outline' }}
              />
            </span>
          </Tooltip>
        ))}
      </Grid>
    </Box>
  );
}
