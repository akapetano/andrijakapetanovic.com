import { ImageProps, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IDynamicShadowImageProps extends ImageProps {
  src: string;
  height: number;
  width: number;
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
        priority
        src={src}
        height={height}
        width={width}
        alt={alt}
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: "0",
          filter: "blur(16px)",
          zIndex: 0,
          transform: "scale(1.1, 1.1)",
          borderRadius: "100%",
        }}
      />
      <Image
        priority
        src={src}
        height={height}
        width={width}
        alt={alt}
        style={{
          zIndex: 1,
          position: "relative",
          objectFit: "cover",
          borderRadius: "100%",
        }}
      />
    </motion.div>
  );
}
