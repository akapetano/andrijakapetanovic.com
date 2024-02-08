"use client";

import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToken,
  useColorMode,
} from "@chakra-ui/react";

export function Presentations() {
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
            Presentations
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <Box color={textColor} pt="1rem">
            <Text fontSize="medium">
              Held and organized the following presentations:
            </Text>
            <UnorderedList fontSize="medium">
              <ListItem>
                Welcome Day for international students, International Relations
                Office - from academic year 2019/2022 to 2021/2022 once per
                semester, Zadar
              </ListItem>
              <ListItem>
                Staff Training Week, International Relations Office - Topic:
                quality management of partnerships in Erasmus+ KA107 programme;
                good practices in the field of security of exchange
                students/staff and Erasmus+ without paper, Zadar, 27 - 31 May
                2019
              </ListItem>
            </UnorderedList>
          </Box>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
