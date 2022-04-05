import { Text, Heading, useColorModeValue } from '@chakra-ui/react';

export function AboutIntro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0 0.5rem 0">
        About me
      </Heading>
      <Text fontSize="smaller" color={textColor}>
        I&apos;m a highly motivated front-end developer and translator who
        specializes in JavaScript based front-end application, in particular the
        React library, and its framework Next.js.
      </Text>

      <Text fontSize="smaller" color={textColor}>
        I attained a master&apos;s degree in English and German language after
        graduating from the University of Zadar. From June 2017 to January 2022
        I worked in the international relations office at the University of
        Zadar where I dipped my toes in waters of the web development through
        simple content manipulation via CMS.
      </Text>
      <Text fontSize="smaller" color={textColor}>
        In July 2021, I decided to change my career, and to become a web
        development. Nine months in the journey, I&apos;ve created this website.
      </Text>
    </>
  );
}
