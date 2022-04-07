import { SectionContainer } from '../../../shared/SectionContainer/SectionContainer';
import {
  Heading,
  Box,
  Text,
  Link,
  Divider,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Date from '../../blog/Date/Date';

export function ResumeSection() {
  return (
    <SectionContainer>
      <Box>
        <Heading fontSize="2xl" as="h2">
          Andrija Kapetanović
        </Heading>
        <Text fontSize="medium">Date of birth: 07/07/1993</Text>

        <Text fontSize="medium">
          Email:{' '}
          <Link
            href="mailto:andrija.kapetanovic@gmail.com"
            variant="withoutUnderline"
          >
            andrija.kapetanovic@gmail.com
          </Link>
        </Text>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Work Experience
        </Heading>
        <Divider mb="1rem" />
        <Box>
          <Heading fontSize="medium" as="h4" textTransform="uppercase">
            International Relations Office - University of Zadar
          </Heading>
          <Text fontSize="medium">06/2017 - 01/2022</Text>
          <Divider m="1rem 0" />
          <Text fontSize="medium" fontWeight="bold">
            From December 2019 to January 2022
          </Text>
          <Text fontSize="medium">
            - associate; in charge of incoming student and staff mobility and
            the web administrator of the International Relations Office&apos;s
            official website; site content editing with CMS, publishing
            scholarship opportunities
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            From March 2018 to October 2019
          </Text>
          <Text fontSize="medium">
            - student office assistant; in charge of incoming students (student
            applications, admission procedure, assistance in composing
            student&apos;s learning agreements, everyday communication with
            students, assistance with academic and non-academic problems)
          </Text>
          <Text fontSize="medium" fontWeight="bold">
            From June 2017 to March 2018
          </Text>
          <Text fontSize="medium">
            - student office assistant; administrative work, receipt of incoming
            and outgoing student applications and both academic and non-academic
            staff applications
          </Text>
          <Text fontSize="medium">
            - maintaining the official website and the social media (Facebook,
            Instagram) of the International Relations Office
          </Text>
        </Box>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Education and Training
        </Heading>
        <Divider mb="1rem" />
        <Text fontSize="medium">2016 - 2019</Text>
        <Heading fontSize="medium" as="h4">
          Master&apos;s degree in English Language and Literature (Literary
          Translation module) and Master&apos;s degree in German Language and
          Literature (Translation Studies) - University of Zadar
        </Heading>
        <Divider m="0.5rem 0 1rem 0" />
        <Text fontSize="medium">2012 - 2016</Text>
        <Heading fontSize="medium" as="h4">
          Bachelor&apos;s degree in English Language and Literature (Literary
          Translation module) and Bachelor&apos;s degree in German Language and
          Literature - University of Zadar
        </Heading>
        <Divider m="0.5rem 0 1rem 0" />
        <Text fontSize="medium">2008 - 2012</Text>
        <Heading fontSize="medium" as="h4">
          Economist - Business High School in Zadar
        </Heading>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
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
            &quot;Understanding TypeScript 2022&quot; by Maximilian
            Schwarzmüller - March 2022
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
            &quot;JavaScript - The Complete Guide 2022 (Beginner +
            Advanced)&quot; by Maximilian Schwarzmüller - February 2022
          </ListItem>
          <ListItem>
            &quot;Advanced CSS and Sass: Flexbox, Grid, Animations and
            More!&quot; by Jonas Schmedtmann - December 2021
          </ListItem>
          <ListItem>
            &quot;Build Responsive Real-World Websites with HTML and CSS&quot;
            by Jonas Schmedtmann - December 2021
          </ListItem>
          <ListItem>
            &quot;The Complete JavaScript Course 2021: From Zero to
            Expert!&quot; by Jonas Schmedtmann - September 2021
          </ListItem>
          <ListItem>
            &quot;Modern HTML and CSS From the Beginning (Including Sass)&quot;
            by Brad Traversy - August 2021
          </ListItem>
          <ListItem>
            &quot;The Ultimate HTML5 and CSS3 Series&quot; by Mosh Hamedani -
            August 2021
          </ListItem>
          <ListItem>
            &quot;Introduction to CSS&quot; (Uvod u CSS) (C225) by the
            University Computing Centre in Zagreb (Srce) - July 2021
          </ListItem>
          <ListItem>
            &quot;Introduction to HTML&quot; (Uvod u HTML) (C225) by the
            University Computing Centre in Zagreb (Srce) - July 2021
          </ListItem>
        </UnorderedList>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Projects
        </Heading>
        <Divider mb="1rem" />
        <Heading fontSize="large" as="h4">
          Front-end development experience
        </Heading>
        <Divider m="0.5rem 0 1rem 0" />
        <UnorderedList fontSize="medium">
          <ListItem>
            As part of my self-taught web development journey, through the
            online courses which I have taken via different learning platforms
            (Udemy, Academind, Code With Mosh, The Odin Project), I have built
            several fully responsive static websites, such as Natours, Trillo,
            Nexter, and Omnifood showcasing the gained skill set in HTML and
            CSS, particularly in CSS Flexbox and Grid.
          </ListItem>
          <ListItem>
            In regards to JavaScript, as part of &quot;The Complete JavaScript
            Course 2021: From Zero to Expert&quot;, I have built a modern recipe
            application called Forkify. Furthermore, I have also taken part in
            the 30- day challenge by Wes Bos in which I&apos;ve built 30 vanilla
            JavaScript projects by using different APIs such as geolocation,
            speech recognition, speech sythnesis etc. As part of the
            &quot;JavaScript - The Complete Guide 2022&quot; course by
            Maximilian Schwarzmüller I have further consolidated my JavaScript
            knowledge, and made a leap in the direction of learning one of
            JavaScript&apos;s framework, React.
          </ListItem>
          <ListItem>
            After completing the &quot;React - The Complete Guide (incl Hooks,
            React Router, Redux)&quot; course by Maximilian Schwarzmüller,
            I&apos;ve started working on my project. I am building a
            cryptocurrency portfolio application using TypeScript and Next.js, a
            framework within React. This project will allow me to solidify my
            JavaScript and React knowledge, as well as allow me to acquire new
            knowledge of TypeScript and Next.js.
          </ListItem>
        </UnorderedList>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Developer Toolbox
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium">
          Next.js | React | TypeScript | JavaScript | CSS/Sass | HTML | Git |
          GitHub | Linux | Node.js
        </Text>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Language Skills
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium">Native language: Croatian</Text>
        <Text fontSize="medium">Other languages:</Text>
        <UnorderedList fontSize="medium">
          <ListItem>English (C2)</ListItem>
          <ListItem>German (C1)</ListItem>
          <ListItem>Italian (B1)</ListItem>
        </UnorderedList>
        <Text fontSize="small" color="gray.500" fontStyle="italic">
          Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2:
          Proficient user
        </Text>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Communication Skills
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium">
          - great communication skills in Croatian, English and German acquired
          in the course of education and working in the International Relations
          Office at the University of Zadar
        </Text>
        <Text fontSize="medium">
          - everyday oral and written communication and correspondence
        </Text>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Organizational Skills
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium">
          - as essential component in the work of an International Relations
          Office while in charge of incoming students (processing documentation
          for 70-100 students per semester) / organization of Staff Week at the
          University of Zadar in May 2019
        </Text>
        <Text fontSize="medium">
          - teamwork, responsibility, adaptability and flexibility
        </Text>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          Presentations
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium">
          Held and organized the following presentations:
        </Text>
        <UnorderedList fontSize="medium">
          <ListItem>
            Welcome Day for international students, International Relations
            Office - academic year 2021/2022, Zadar, 1 October 2021
          </ListItem>
          <ListItem>
            Welcome Day for international students, International Relations
            Office - academic year 2020/2021, Zadar, 1 October 2020, and 22
            February 2021
          </ListItem>
          <ListItem>
            Welcome Day for international students, International Relations
            Office - academic year 2019/2022, Zadar, 1 October 2019, and 24
            February 2020
          </ListItem>
          <ListItem>
            Staff Training Week, International Relations Office - Topic: quality
            management of partnerships in Erasmus+ KA107 programme; good
            practices in the field of security of exchange students/staff and
            Erasmus+ without paper, Zadar, 27 - 31 May 2019
          </ListItem>
        </UnorderedList>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
      <Box>
        <Heading fontSize="large" as="h3" textTransform="uppercase">
          References
        </Heading>
        <Divider mb="1rem" />
        <Heading fontSize="large" as="h4">
          Professional References
        </Heading>
        <Divider m="0 0 1rem 0" />
        <Text fontSize="medium" fontWeight="bold">
          Adrian Bićanić
        </Text>
        <UnorderedList fontSize="medium">
          <ListItem>role: JavaScript Engineer</ListItem>
          <ListItem>company: Infinum</ListItem>
          <ListItem>
            email:{' '}
            <Link href="to:adibicanic@gmail.com" variant="withoutUnderline">
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
            email:{' '}
            <Link
              href="to:marija.dzajasikiric@gmail.com"
              variant="withoutUnderline"
            >
              marija.dzajasikiric@gmail.com
            </Link>
          </ListItem>
        </UnorderedList>
        <Divider m="0.5rem 0 1rem 0" />
      </Box>
    </SectionContainer>
  );
}
