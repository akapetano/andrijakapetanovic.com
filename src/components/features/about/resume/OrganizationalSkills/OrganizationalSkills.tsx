"use client";

import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useToken,
  useColorMode,
} from "@chakra-ui/react";

export function OrganizationalSkills() {
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
            fontSize="large"
            as="h3"
            textTransform="uppercase"
            color={textColor}
            flex={1}
            textAlign={"left"}
          >
            Organizational Skills
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <UnorderedList fontSize="medium" color={textColor} pt="1rem">
            <ListItem>
              as essential component in the work of an International Relations
              Office while in charge of incoming students (processing
              documentation for 70-100 students per semester)
            </ListItem>
            <ListItem>
              organization of Staff Week at the University of Zadar in May 2019
            </ListItem>
            <ListItem>
              teamwork, responsibility, adaptability and flexibility
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
