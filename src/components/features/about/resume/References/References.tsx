"use client";

import {
  Box,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useToken,
  useColorMode,
} from "@chakra-ui/react";

export function References() {
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
            color={textColor}
            flex={1}
            textAlign={"left"}
          >
            References
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <Heading fontSize="large" as="h4" mb="0.5rem" pt="1rem">
            Professional References
          </Heading>
          <Divider m="0 0 0.5rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            Adrian Bićanić
          </Text>
          <UnorderedList fontSize="medium" mb="1rem">
            <ListItem>role: JavaScript Engineer</ListItem>
            <ListItem>company: Infinum</ListItem>
            <ListItem>
              email:{" "}
              <Link
                type="email"
                href="to:adibicanic@gmail.com"
                variant="slidingUnderline"
              >
                adibicanic@gmail.com
              </Link>
            </ListItem>
          </UnorderedList>
          <Text fontSize="medium" fontWeight="bold">
            Marija Džaja Sikirić
          </Text>
          <UnorderedList fontSize="medium">
            <ListItem>role: International relations officer</ListItem>
            <ListItem>company: University of Zadar</ListItem>
            <ListItem>
              email:{" "}
              <Link
                type="email"
                href="to:marija.dzajasikiric@gmail.com"
                variant="slidingUnderline"
              >
                marija.dzajasikiric@gmail.com
              </Link>
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
