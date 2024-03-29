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

export function WorkExperience() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("brand.500", "brand.200");
  const [gray100, gray600] = useToken("colors", ["gray.200", "gray.600"]);
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  return (
    <AccordionItem>
      <AccordionButton>
        <Heading
          fontSize="large"
          as="h3"
          textTransform="uppercase"
          color={textColor}
          flex={1}
          textAlign={"left"}
        >
          Work Experience
        </Heading>
        <AccordionIcon color={iconColor} />
      </AccordionButton>
      <AccordionPanel
        pt={0}
        boxShadow={`inset 0 0 10px 0 ${isLightMode ? gray100 : gray600}`}
      >
        <Box color={textColor}>
          <Heading
            fontSize="medium"
            as="h4"
            textTransform="uppercase"
            pt="1rem"
          >
            Crafted - Indianapolis, USA
          </Heading>
          <Text fontSize="medium">06/2022 - present</Text>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            From June 2022
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            Front-end developer
          </Text>
          <UnorderedList fontSize="medium" color={textColor}>
            <ListItem>
              worked on 15+ projects, translating the UI/UX designs into
              components, and building them into websites and web applications
            </ListItem>
            <ListItem>
              learning new languages and technologies, such as Go, React Native
              and new frameworks such as Vue, Nuxt, and Svelte.
            </ListItem>
            <ListItem>working with SCRUM methodology</ListItem>
            <ListItem>
              collaborating with teammates, and exploring different
              architectural solutions
            </ListItem>
            <ListItem>
              integrated project documentation into the team&apos;s workflow
            </ListItem>
          </UnorderedList>
          <Divider m="0.5rem 0 1rem 0" />
        </Box>
        <Box color={textColor}>
          <Heading fontSize="medium" as="h4" textTransform="uppercase">
            International Relations Office - University of Zadar
          </Heading>
          <Text fontSize="medium">06/2017 - 01/2022</Text>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            From December 2019 to January 2022
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            Associate
          </Text>
          <UnorderedList fontSize="medium" color={textColor}>
            <ListItem>
              in charge of incoming student and staff mobility and the web
              administrator of the International Relations Office&apos;s
              official website
            </ListItem>
            <ListItem>
              site content editing with CMS, publishing scholarship
              opportunities
            </ListItem>
          </UnorderedList>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            From March 2018 to October 2019
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            Student Office Assistant
          </Text>
          <UnorderedList fontSize="medium" color={textColor}>
            <ListItem>
              in charge of incoming students (student applications, admission
              procedure, assistance in composing student&apos;s learning
              agreements
            </ListItem>
            <ListItem>
              everyday communication with students, assistance with academic and
              non-academic problems)
            </ListItem>
          </UnorderedList>
          <Divider m="0.5rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            From June 2017 to March 2018
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            Student Office Assistant
          </Text>
          <UnorderedList fontSize="medium" color={textColor}>
            <ListItem>
              administrative work, receipt of incoming and outgoing student
              applications and both academic and non-academic staff applications
            </ListItem>
            <ListItem>
              maintaining the official website and the social media (Facebook,
              Instagram) of the International Relations Office
            </ListItem>
          </UnorderedList>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
}
