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

export function EducationAndTraining() {
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
            Education and Training
          </Heading>
          <AccordionIcon color={iconColor} />
        </AccordionButton>
        <AccordionPanel
          pt={0}
          boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
        >
          <Text pt="1rem" fontSize="medium">
            2016 - 2019
          </Text>
          <Heading fontSize="medium" as="h4">
            Master&apos;s degree in English Language and Literature (Literary
            Translation module) and Master&apos;s degree in German Language and
            Literature (Translation Studies) - University of Zadar
          </Heading>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium">2012 - 2016</Text>
          <Heading fontSize="medium" as="h4">
            Bachelor&apos;s degree in English Language and Literature (Literary
            Translation module) and Bachelor&apos;s degree in German Language
            and Literature - University of Zadar
          </Heading>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium">2008 - 2012</Text>
          <Heading fontSize="medium" as="h4">
            Economist - Business High School in Zadar
          </Heading>
        </AccordionPanel>
      </Box>
    </AccordionItem>
  );
}
