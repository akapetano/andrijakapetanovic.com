import { Text, Link } from '@chakra-ui/react';

export default function HomeIntro() {
  return (
    <section>
      <Text>
        Hi, my name is <strong>Andrija</strong>. I&apos;m a front-end developer.
        You can contact me on{' '}
        <Link
          href="https://twitter.com/AndiKapetanovic"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </Link>
      </Text>
    </section>
  );
}
