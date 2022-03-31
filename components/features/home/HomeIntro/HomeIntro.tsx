import { Text, Link } from '@chakra-ui/react';

export default function HomeIntro() {
  return (
    <section>
      <Text>
        Hi, my name is <strong>Andrija</strong>. I&apos;m a front-end developer.
        You can contact me on{' '}
        <Link
          href="https://www.linkedin.com/in/andrija-kapetanovi%C4%87"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        .
      </Text>
    </section>
  );
}
