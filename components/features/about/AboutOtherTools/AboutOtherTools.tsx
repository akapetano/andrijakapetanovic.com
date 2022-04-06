import {
  Grid,
  Icon,
  Heading,
  Tooltip,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinux, FaGitAlt, FaFigma } from 'react-icons/fa';

export function AboutOtherTools() {
  const figmaColor = useColorModeValue('gray.700', 'gray.100');

  const FRONTEND_TOOLBOX = [
    { toolName: 'Linux', toolIcon: FaLinux, toolColor: '#000' },
    { toolName: 'Git', toolIcon: FaGitAlt, toolColor: '#f05033' },
    { toolName: 'Figma', toolIcon: FaFigma, toolColor: figmaColor },
  ];

  return (
    <Box>
      <Heading as="h3" fontSize="lg">
        Other
      </Heading>
      <Grid
        templateColumns={[
          'repeat(4, 1fr)',
          'repeat(4, 1fr)',
          'repeat(8, 1fr)',
          'repeat(8, 1fr)',
        ]}
        m="1rem 0"
        gap="2rem"
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
          </Tooltip>
        ))}
      </Grid>
    </Box>
  );
}
