import { UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';
import { getSortedPostsData } from '../../../lib/posts';
import Date from '../../Date';
import NextLink from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export function BlogPostsList({ allPostsData }) {
  return (
    <UnorderedList listStyleType="none" p={0} m={0}>
      {allPostsData.map(({ id, date, title }) => (
        <ListItem margin="0 0 1.25rem" key={id}>
          <NextLink passHref href={`blog/posts/${id}`}>
            <Link>{title}</Link>
          </NextLink>
          <br />
          <Text fontSize="sm" color="gray.400">
            <Date dateString={date} />
          </Text>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
