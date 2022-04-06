import { Link, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export function AboutIntro() {
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="auto 0 0.5rem 0">
        About me
      </Heading>
      <Text fontSize="smaller" color={textColor} mb="0.5rem">
        I&apos;m a highly motivated front-end developer and translator who
        specializes in JavaScript based front-end application, in particular the
        React library, and its framework Next.js.
      </Text>
      <Text fontSize="smaller" color={textColor} mb="0.5rem">
        I attained my master&apos;s degree in English and German language after
        graduating from the University of Zadar. From June 2017 to January 2022
        I worked in the international relations office at the University of
        Zadar where I dipped my toes in waters of the web development through
        simple content manipulation via CMS.
      </Text>
      <Text fontSize="smaller" color={textColor} mb="0.5rem">
        In July 2021, I decided to change my career, and to become a web
        developer. Nine months in the journey, I&apos;ve created this website.
        You can read more about it in my{' '}
        <NextLink href="/blog/posts/first-post" passHref>
          <Link variant="withoutUnderline">first blog post</Link>
        </NextLink>
        .
      </Text>
    </>
  );
}
