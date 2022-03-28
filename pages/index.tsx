import Head from 'next/head';
import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

import Navigation from '../components/Navigation';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import Footer from '../components/Footer';
import NextHead from '../components/NextHead';
import AuthorImage from '../components/AuthorImage';
import LayoutHeader from '../components/LayoutHeader';

export const AUTHOR_NAME = 'Andrija Kapetanović';
const SITE_TITLE = 'Andrija Kapetanović | Front-End Developer';

export default function Home() {
  const imageSrc = useColorModeValue(
    '/images/andrija-kapetanovic.jpg',
    '/images/andrija-kapetanovic-dark.jpg'
  );
  const colorMode = useColorModeValue('lightMode', 'darkMode');

  return (
    <Layout home>
      <LayoutHeader title={SITE_TITLE} />

      <main>
        <AuthorImage />
      </main>
      <Footer />
      <section className={utilStyles.headingMd}>
        <Text>
          Hi, my name is <strong>Andrija</strong>. I&apos;m a front-end
          developer. You can contact me on{' '}
          <Link
            href="https://twitter.com/AndiKapetanovic"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </Link>
        </Text>
      </section>
    </Layout>
  );
}
