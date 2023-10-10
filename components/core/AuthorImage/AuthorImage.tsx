import {
  useColorModeValue,
  Flex,
  Box,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface IAuthorImageProps {
  isHome?: boolean;
}

export default function AuthorImage({ isHome }: IAuthorImageProps) {
  const colorMode = useColorModeValue("lightMode", "darkMode");
  const [isClicked, setIsClicked] = useState(false);
  const id = "imageWrapper";

  const wrapperStyle = {
    display: "flex",
    gap: "5rem",
    flexDirection: "column" as "column",
    justifyContent: "start",
    alignItems: "center",
    margin: "0 0 1.5rem",
    height: isHome ? 150 : 114,
    width: isHome ? 150 : 114,
    borderRadius: "100%",
    originX: 0.9,
  };

  const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear",
  };

  return (
    <Box>
      <Button onClick={() => setIsClicked(!isClicked)}>Click me</Button>
      <Flex justify="center">
        <motion.div
          style={wrapperStyle}
          layoutId={id}
          animate={{
            rotateX: isClicked ? 180 : 0,
          }}
          transition={spinTransition}
        >
          <DynamicShadowImage
            src="/images/andrija-kapetanovic.jpg"
            height={isHome ? 144 : 108}
            width={isHome ? 144 : 108}
            alt="Picture of the site creator, Andrija Kapetanović (dark side)"
            isClicked={isClicked}
          />
          <DynamicShadowImage
            src="/images/andrija-kapetanovic-dark.jpg"
            height={isHome ? 144 : 108}
            width={isHome ? 144 : 108}
            alt="Picture of the site creator, Andrija Kapetanović (dark side)"
            isClicked={isClicked}
          />
        </motion.div>
      </Flex>
    </Box>
  );
}
