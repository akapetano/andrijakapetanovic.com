import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export function AboutMe() {
  const brandColor = useColorModeValue("brand.500", "brand.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack
      gap="0.5rem"
      fontSize="smaller"
      alignItems="flex-start"
      color={textColor}
    >
      <Heading
        as="h2"
        fontSize="xx-large"
        textAlign="left"
        borderBottom="1px solid"
        borderColor={textColor}
        w="100%"
      >
        About Me
      </Heading>
      <Text>
        As a frontend developer at Crafted, a digital agency that creates custom
        web and mobile solutions, I apply my skills in HTML, CSS, and JavaScript
        to build responsive and user-friendly interfaces. I also leverage my
        experience in Chakra UI, styled-components, and Figma to design and
        implement modern and attractive layouts.
      </Text>
      <Text>
        Before joining Crafted, I was an International Relations Officer at the
        University of Zadar, where I coordinated and facilitated academic and
        cultural exchange programs for students and staff. I have a
        Master&apos;s degree in English and German Language and Literature, with
        a focus on Translation Studies, from the same university. I am fluent in
        English, German, and Croatian, and have a passion for learning new
        languages and cultures. I also have a keen interest in programming and
        web development, and have completed multiple online courses and
        certifications to enhance my knowledge and skills. I built my own
        website using TypeScript, Next.js, and Chakra UI, which showcases my
        portfolio and resume. You can find the link in my LinkedIn contact info.
        My goal is to combine my linguistic and technical abilities to create
        impactful and accessible web experiences.
      </Text>
    </VStack>
  );
}
