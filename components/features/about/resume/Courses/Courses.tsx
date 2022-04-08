import {
  Box,
  Heading,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export function Courses() {
  return (
    <Box>
      <Heading fontSize="large" as="h3" textTransform="uppercase">
        Courses
      </Heading>
      <Divider mb="1rem" />
      <Heading fontSize="large" as="h4">
        Online Courses
      </Heading>
      <Divider m="0.5rem 0 1rem 0" />
      <UnorderedList fontSize="medium">
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
      <Divider m="0.5rem 0 1rem 0" />
    </Box>
  );
}
