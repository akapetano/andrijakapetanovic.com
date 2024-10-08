import {
  ListItem,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Date from "../BlogPost/Date/Date";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Card } from "../../../core/Card/Card";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface IBlogPostCard {
  slug?: string;
  title: string;
  abstract?: string;
  publishedOn: string;
}

export function BlogPostCard({
  slug,
  title,
  abstract,
  publishedOn,
}: IBlogPostCard) {
  const dateColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const titleHoverColor = useColorModeValue("brand.600", "brand.300");
  const linkHoverColor = useColorModeValue("brand.700", "brand.200");
  const articlePath = `blog/posts/${slug}`;

  return (
    <ListItem className="blog-post-list-item" display="flex">
      <Card display="flex" flexDirection="column">
        <ChakraLink
          fontSize="lg"
          display="flex"
          alignItems="center"
          gap="0.2rem"
          as={Link}
          href={articlePath}
          variant="noUnderline"
        >
          <Heading
            as={"h3"}
            fontWeight="semibold"
            fontSize="lg"
            mb={"1rem"}
            color={textColor}
            sx={{
              ".blog-post-list-item: hover &": {
                color: titleHoverColor,
              },
            }}
          >
            {title}
          </Heading>
        </ChakraLink>
        {abstract && (
          <Text fontSize="md" color={textColor} flex={1}>
            {abstract}
          </Text>
        )}
        <VStack alignItems="flex-start" mt="1rem" gap="0.25rem">
          {publishedOn && (
            <Text fontSize="sm" color={dateColor}>
              <Date dateString={publishedOn} />
            </Text>
          )}
          <ChakraLink
            fontSize="lg"
            display="flex"
            alignItems="center"
            gap="0.3rem"
            className="read-article-button"
            p={0}
            as={Link}
            href={articlePath}
            variant="noUnderline"
            _hover={{ color: linkHoverColor }}
          >
            Read article
            <ArrowForwardIcon
              height={"16px"}
              width={"16px"}
              transition="transform .3s ease-in-out"
              sx={{
                ".read-article-button: hover &": {
                  transform: "translateX(30%) scale(1.1)",
                },
              }}
              mb="0.5"
              alignSelf="center"
            />
          </ChakraLink>
        </VStack>
      </Card>
    </ListItem>
  );
}
