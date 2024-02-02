"use client";

import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

export function Courses() {
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box color={textColor}>
      <Heading fontSize="large" as="h3" textTransform="uppercase" mb="0.5rem">
        Courses
      </Heading>
      <Divider mb="0.5rem" />
      <Heading fontSize="large" as="h4">
        Frontend Masters
      </Heading>
      <Divider m="0.5rem 0" />
      <UnorderedList fontSize="medium">
        <ListItem>
          &quot;Fullstack Svelte with SvelteKit&quot; by Rich Harris - February
          2024
        </ListItem>
        <ListItem>
          &quot;Svelte 3+ Fundamentals, v2&quot; by Rich Harris - January 2024
        </ListItem>
        <ListItem>
          &quot;Intermediate React Native&quot; by Kadi Karman - November 2023
        </ListItem>
        <ListItem>
          &quot;React Native, v2&quot; by Kadi Karman - November 2023
        </ListItem>
        <ListItem>
          &quot;Basics of Go&quot; by Maximiliano Firtman - August 2023
        </ListItem>
        <ListItem>
          &quot;Go for JavaScript Developers&quot; by Brenna Martenson - August
          2023
        </ListItem>
        <ListItem>
          &quot;JavaScript: The Hard Parts, v2&quot; by Will Sentance - June
          2023
        </ListItem>
        <ListItem>
          &quot;Complete Intro to SQL & PostgreSQL&quot; by Brian Holt - June
          2023
        </ListItem>
        <ListItem>
          &quot;Building a FullStack App from Scratch v2&quot; by Scott Moss -
          May 2023
        </ListItem>
        <ListItem>
          &quot;Introduction to Next.js 13+, v2&quot; by Scott Moss - May 2023
        </ListItem>
        <ListItem>
          &quot;Complete Intro to Linux and the Command-Line&quot; by Brian Holt
          - May 2023
        </ListItem>
        <ListItem>
          &quot;API Design in Node.js, v4&quot; by Scott Moss - April 2023
        </ListItem>
        <ListItem>
          &quot;Complete Intro to Databases&quot; by Brian Holt - April 2023
        </ListItem>
        <ListItem>
          &quot;Full Stack for Front-end Engineers, v3&quot; by Jem Young -
          March 2023
        </ListItem>
        <ListItem>
          &quot;Introduction to Node.js, v2&quot; by Scott Moss - March 2023
        </ListItem>
        <ListItem>
          &quot;Design Systems with React & Storybook&quot; by Emma Boston -
          December 2022
        </ListItem>
        <ListItem>
          &quot;Figma for Developers&quot; by Steve Kinney - December 2022
        </ListItem>
        <ListItem>
          &quot;Mastering the Design Process&quot; by Paul Boag - November 2022
        </ListItem>
        <ListItem>
          &quot;SVG Essentials & Animation, v2&quot; by Sarah Drasner - November
          2022
        </ListItem>
        <ListItem>
          &quot;CSS Grid & Flexbox for Responsive Layouts, v2&quot; by Jen
          Kramer - October 2022
        </ListItem>
        <ListItem>
          &quot;Design for Developers&quot; by Sarah Drasner - October 2022
        </ListItem>
        <ListItem>
          &quot;Web UX Design for High Converting Websites&quot; by Paul Boag -
          October 2022
        </ListItem>
        <ListItem>
          &quot;Making TypeScript Stick&quot; by Mike North - October 2022
        </ListItem>
        <ListItem>
          &quot;Intermediate TypeScript&quot; by Mike North - September 2022
        </ListItem>
        <ListItem>
          &quot;TypeScript Fundamentals, v3&quot; by Mike North - September 2022
        </ListItem>
        <ListItem>
          &quot;Production-Grade Vue.js&quot; by Ben Hong - August 2022
        </ListItem>
        <ListItem>
          &quot;Building Applications with Vue & Nuxt&quot; by Sarah Drasner -
          August 2022
        </ListItem>
        <ListItem>
          &quot;Introduction to Vue 3&quot; by Sarah Drasner - August 2022
        </ListItem>
        <ListItem>
          &quot;Modern Search Engine Optimization (SEO)&quot; by Mike North -
          August 2022
        </ListItem>
        <ListItem>
          &quot;Introduction to Dev Tools, v3&quot; by Jon Kuperman - July 2022
        </ListItem>
        <ListItem>
          &quot;Website Accessibility, v2&quot; by Jon Kuperman - July 2022
        </ListItem>
        <ListItem>
          &quot;JavaScript: From Fundamentals to Functional JS, v2&quot; by
          Bianca Gandolfo - July 2022
        </ListItem>
        <ListItem>
          &quot;Getting Started with JavaScript, v2&quot; by Kyle Simpson - June
          2022
        </ListItem>
        <ListItem>
          &quot;Getting Started with CSS&quot; by Jen Kramer - June 2022
        </ListItem>
        <ListItem>
          &quot;Complete Intro to Web Development, v2&quot; by Brian Holt - June
          2022
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0" />
      <Heading fontSize="large" as="h4">
        Online Courses
      </Heading>
      <Divider m="0.5rem 0" />
      <UnorderedList fontSize="medium">
        <ListItem>
          &quot;Joy of React&quot; by Josh Comeau - October 2023
        </ListItem>
        <ListItem>
          &quot;Just JavaScript&quot; by Dan Abramov - February 2023
        </ListItem>
        <ListItem>
          &quot;Understanding TypeScript 2022&quot; by Maximilian Schwarzmüller
          - March 2022
        </ListItem>
        <ListItem>
          &quot;React - The Complete Guide (incl Hooks, React Router,
          Redux)&quot; by Maximilian Schwarzmüller - March 2022
        </ListItem>
        <ListItem>
          &quot;Git and GitHub - The Practical Course&quot; by Maximilian
          Schwarzmüller and Manuel Lorenz - February 2022
        </ListItem>
        <ListItem>
          &quot;JavaScript - The Complete Guide 2022 (Beginner + Advanced)&quot;
          by Maximilian Schwarzmüller - February 2022
        </ListItem>
        <ListItem>
          &quot;Advanced CSS and Sass: Flexbox, Grid, Animations and More!&quot;
          by Jonas Schmedtmann - December 2021
        </ListItem>
        <ListItem>
          &quot;Build Responsive Real-World Websites with HTML and CSS&quot; by
          Jonas Schmedtmann - December 2021
        </ListItem>
        <ListItem>
          &quot;The Complete JavaScript Course 2021: From Zero to Expert!&quot;
          by Jonas Schmedtmann - September 2021
        </ListItem>
        <ListItem>
          &quot;Modern HTML and CSS From the Beginning (Including Sass)&quot; by
          Brad Traversy - August 2021
        </ListItem>
        <ListItem>
          &quot;The Ultimate HTML5 and CSS3 Series&quot; by Mosh Hamedani -
          August 2021
        </ListItem>
        <ListItem>
          &quot;Introduction to CSS&quot; (Uvod u CSS) (C225) by the University
          Computing Centre in Zagreb (Srce) - July 2021
        </ListItem>
        <ListItem>
          &quot;Introduction to HTML&quot; (Uvod u HTML) (C225) by the
          University Computing Centre in Zagreb (Srce) - July 2021
        </ListItem>
      </UnorderedList>
      <Divider m="0.5rem 0" />
    </Box>
  );
}
