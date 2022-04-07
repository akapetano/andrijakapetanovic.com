import {
  Grid,
  Icon,
  Heading,
  Tooltip,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinux, FaGitAlt, FaFigma } from 'react-icons/fa';
import { TouchFriendlyTooltip } from '../../../core/TouchFriendlyTooltip/TouchFriendlyTooltip';

export function AboutOtherTools() {
  const figmaColor = useColorModeValue('gray.700', 'gray.100');
  const linuxColor = useColorModeValue('#000', 'gray.100');

  const FRONTEND_TOOLBOX = [
    { toolName: 'Linux', toolIcon: FaLinux, toolColor: linuxColor },
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
          <TouchFriendlyTooltip
            key={tool.toolName}
            toolName={tool.toolName}
            toolIcon={tool.toolIcon}
            toolColor={tool.toolColor}
          />
        ))}
      </Grid>
    </Box>
  );
}
