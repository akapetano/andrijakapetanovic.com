import { Box, Image, ImageProps, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IDynamicShadowImageProps extends ImageProps {
  src: string;
  height?: string | number;
  width?: string | number;
  alt: string;
}

export default function DynamicShadowImage({
  src,
  height,
  width,
  alt,
}: IDynamicShadowImageProps) {
  const colorMode = useColorModeValue("lightMode", "darkMode");
  return (
    <motion.div
      layout
      style={{
        position: "relative",
        rotate: colorMode === "darkMode" ? 180 : 0,
      }}
    >
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
    </motion.div>
  );
}
