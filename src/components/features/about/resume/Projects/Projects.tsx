"use client";

import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

export function Projects() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box>
      <Heading
        fontSize="large"
        as="h3"
        textTransform="uppercase"
        color={textColor}
        mb="0.5rem"
      >
        Projects
      </Heading>
      <Divider mb="0.5rem" />
      <Heading fontSize="large" as="h4" color={textColor}>
        Front-end development experience
      </Heading>
      <Divider m="0.5rem 0" />
      <UnorderedList fontSize="medium" color={textColor}>
        <ListItem>
          As part of my self-taught web development journey, through the online
          courses which I have taken via different learning platforms (Udemy,
          Academind, Code With Mosh, The Odin Project), I have built several
          fully responsive static websites, such as Natours, Trillo, Nexter, and
          Omnifood showcasing the gained skill set in HTML and CSS, particularly
          in CSS Flexbox and Grid.
        </ListItem>
        <ListItem>
          In regards to JavaScript, as part of &quot;The Complete JavaScript
          Course 2021: From Zero to Expert&quot;, I have built a modern recipe
          application called Forkify. Furthermore, I have also taken part in the
          30-day challenge by Wes Bos in which I&apos;ve built 30 vanilla
          JavaScript projects by using different APIs such as geolocation,
          speech recognition, speech sythnesis etc. As part of the
          &quot;JavaScript - The Complete Guide 2022&quot; course by Maximilian
          Schwarzmüller I have further consolidated my JavaScript knowledge, and
          made a leap in the direction of learning one of JavaScript&apos;s
          framework, React.
        </ListItem>
        <ListItem>
          After completing the &quot;React - The Complete Guide (incl Hooks,
          React Router, Redux)&quot; course by Maximilian Schwarzmüller,
          I&apos;ve started working on my project. I am building a
          cryptocurrency portfolio application using TypeScript and Next.js, a
          framework within React. This project will allow me to solidify my
          JavaScript and React knowledge, as well as allow me to acquire new
          knowledge of TypeScript and Next.js. However, before finishing the
          crypto project, I decided to build my own website first which will
          help me create a platform where I showcase my projects.
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0" />
    </Box>
  );
}
