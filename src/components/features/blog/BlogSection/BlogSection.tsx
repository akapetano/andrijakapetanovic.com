import { Heading } from "@chakra-ui/react";
import { SectionContainer } from "../../../shared/SectionContainer/SectionContainer";
import {
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Date from "../Date/Date";
import { IPostData } from "../../../../lib/posts";
import NavLink from "../../../core/NavLink/NavLink";

export interface IAllPostsData {
  allPostsData: IPostData[];
}

export function BlogSection({ allPostsData }: IAllPostsData) {
  // const dateColor = useColorModeValue("gray.500", "gray.400");

  return (
    <SectionContainer>
      <Heading fontSize="1.5rem" lineHeight="1.4" margin="1rem 0">
        Blog posts
      </Heading>
      <UnorderedList listStyleType="none" p={0} m={0}>
        {allPostsData?.map(({ slug, date, title }) => (
          <ListItem margin="0 0 1.25rem" key={slug}>
            <NavLink pb={"0.3rem"} to={`blog/posts/${slug}`}>
              {title}
            </NavLink>
            <br />
            <Text fontSize="sm" color={"gray.500"}>
              <Date dateString={date} />
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </SectionContainer>
  );
}
