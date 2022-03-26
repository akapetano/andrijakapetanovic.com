import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import NextLink from 'next/link';
import NavBar from './NavBar';
import {
  Box,
  Container,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from './Footer';

interface Props {
  children: ReactNode;
  home?: boolean;
}

export const name = 'Andrija Kapetanović';
export const siteTitle = 'Andrija Kapetanović | Front-End Developer';

export default function Layout({ children, home }: Props) {
  const imageSrc = useColorModeValue(
    '/images/andrija-kapetanovic.jpg',
    '/images/andrija-kapetanovic-dark.jpg'
  );

  return (
    <Container maxWidth="36rem" padding="0 1rem" margin="8rem auto 6rem">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andrija Kapetanović - Front-end Developer"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <NavBar />
        {home ? (
          <Flex justify="center">
            <Box margin="0 0 1.5rem">
              <Image
                priority
                height={144}
                width={144}
                className={utilStyles.borderCircle}
                src={imageSrc}
                alt={name}
              />
            </Box>
          </Flex>
        ) : (
          <Flex justify="center">
            <Flex flexDir="column" align="center" margin="0 0 1.5rem">
              <NextLink passHref href="/">
                <Link>
                  <Image
                    priority
                    height={108}
                    width={108}
                    className={utilStyles.borderCircle}
                    src={imageSrc}
                    alt={name}
                  />
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <Box margin="3rem 0 0">
          <NextLink passHref href="/">
            <Link fontSize="md">← Back to home</Link>
          </NextLink>
        </Box>
      )}

      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
