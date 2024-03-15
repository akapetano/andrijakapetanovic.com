"use client";

import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useToken,
  useColorMode,
} from "@chakra-ui/react";

export function CommunicationSkills() {
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
            Communication Skills
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <UnorderedList fontSize="medium" pt="1rem">
            <ListItem>
              great communication skills in Croatian, English and German
              acquired in the course of education and working in the
              International Relations Office at the University of Zadar
            </ListItem>
            <ListItem>
              everyday oral and written communication and correspondence
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
