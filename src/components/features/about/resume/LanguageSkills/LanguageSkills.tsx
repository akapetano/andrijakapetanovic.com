"use client";

import {
  Box,
  Heading,
  useToken,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Link as ChakraLink,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
} from "@chakra-ui/react";

export function LanguageSkills() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("brand.500", "brand.200");
  const [gray100, gray600] = useToken("colors", ["gray.200", "gray.600"]);
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  return (
    <AccordionItem>
      <Box>
        <AccordionButton>
          <Heading
            color={textColor}
            fontSize="large"
            as="h3"
            textTransform="uppercase"
            flex={1}
            textAlign={"left"}
          >
            Language Skills
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          pb="0.5rem"
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <Box color={textColor} pt="0.5rem">
            <Text fontSize="medium">Native language: Croatian</Text>
            <Text fontSize="medium">Other languages:</Text>
            <UnorderedList fontSize="medium">
              <ListItem>English (C2)</ListItem>
              <ListItem>German (C1)</ListItem>
              <ListItem>Italian (B1)</ListItem>
            </UnorderedList>
          </Box>
          <Text fontSize="small" color="gray.500" fontStyle="italic">
            CEFR Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1
            and C2: Proficient user
          </Text>
          <Text fontSize="small" color="gray.500" fontStyle="italic">
            (Source:{" "}
            <ChakraLink
              variant="slidingUnderline"
              href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions"
              target="_blank"
              rel="noreferrer"
              pb="0.5rem"
            >
              Council of Europe
            </ChakraLink>
            )
          </Text>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
