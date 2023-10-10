import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

type DynamicShadowImageProps = {
  src: string;
  height?: string | number;
  width?: string | number;
  alt: string;
  isClicked: boolean;
};

export default function DynamicShadowImage({
  src,
  height,
  width,
  alt,
  isClicked,
}: DynamicShadowImageProps) {
  return (
    <Box pos="relative" as={motion.div}>
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        objectFit="cover"
        position="absolute"
        inset={0}
        filter="blur(16px)"
        zIndex={0}
        transform="scale(1.1, 1.1)"
        rounded="full"
      />
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        zIndex={1}
        position="relative"
        objectFit="cover"
        rounded="full"
      />
    </Box>
  );
}
