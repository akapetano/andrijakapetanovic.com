import {
  useColorModeValue,
  HStack,
  Icon,
  Heading,
  Tooltip,
} from '@chakra-ui/react';
import { FaSass, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiChakraui } from 'react-icons/si';

export function AboutFrontendToolbox() {
  const jsColor = useColorModeValue('#000', '#f7df1e');
  const nextJsColor = useColorModeValue('#000', 'gray.100');

  const FRONTEND_TOOLBOX = [
    { toolName: 'HTML5', toolIcon: FaHtml5, toolColor: '#E34C26' },
    { toolName: 'CSS3', toolIcon: FaCss3Alt, toolColor: '#167dbe' },
    { toolName: 'Sass', toolIcon: FaSass, toolColor: '#ce679a' },
    { toolName: 'JavaScript', toolIcon: FaJs, toolColor: jsColor },
    { toolName: 'React', toolIcon: FaReact, toolColor: '#5ed3f3' },
    { toolName: 'Next.js', toolIcon: SiNextdotjs, toolColor: nextJsColor },
    { toolName: 'Chakra UI', toolIcon: SiChakraui, toolColor: '#2cc6b8' },
  ];

  return (
    <>
      <Heading as="h3" fontSize="xl">
        Front-end toolbox
      </Heading>
      <HStack
        m="1rem 0"
        spacing="2rem"
        alignItems="center"
        justifyContent="center"
      >
        {FRONTEND_TOOLBOX.map((tool) => (
          <Tooltip
            key={tool.toolName}
            label={tool.toolName}
            hasArrow
            shouldWrapChildren
          >
            <Icon
              key={tool.toolName}
              as={tool.toolIcon}
              boxSize={['8', '8', '10', '10']}
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
      </HStack>
    </>
  );
}
