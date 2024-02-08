"use client";

import {
  Box,
  Heading,
  Divider,
  Text,
  useColorModeValue,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToken,
  useColorMode,
} from "@chakra-ui/react";

export function DeveloperToolbox() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("brand.500", "brand.200");
  const [gray100, gray600] = useToken("colors", ["gray.200", "gray.600"]);
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  return (
    <AccordionItem>
      <Box color={textColor}>
        <AccordionButton>
          <Heading
            fontSize="large"
            as="h3"
            textTransform="uppercase"
            flex={1}
            textAlign={"left"}
          >
            Developer Toolbox
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <Text fontSize="medium" pt="1rem">
            HTML | CSS | JavaScript | TypeScript | React | Next.js | React
            Native | Vue | Nuxt.js | Svelte | Sveltekit | Sass | Chakra UI |
            TailwindCSS | Git | GitHub | Node.js | Go | Linux
          </Text>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
