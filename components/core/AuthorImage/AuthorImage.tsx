import { useColorModeValue } from "@chakra-ui/react";
import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import { motion } from "framer-motion";
import styles from "./AuthorImage.module.css";

interface IAuthorImageProps {
  isHome?: boolean;
}

export default function AuthorImage({ isHome }: IAuthorImageProps) {
  const colorMode = useColorModeValue("lightMode", "darkMode");
  const layoutId = "imageWrapper";

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
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div style={wrapperStyle}>
          <motion.div
            layoutId={layoutId}
            style={{
              width: 288,
              height: 288,
              display: "flex",
              flexDirection: "column",
              gap: "250px",
              alignItems: "center",
              originY:
                colorMode === "darkMode"
                  ? isHome
                    ? "270.5px"
                    : "234.5px"
                  : isHome
                  ? "275px"
                  : "234.5px",
              originX: colorMode === "darkMode" ? "144px" : "108px",
            }}
            animate={{
              rotate: colorMode === "darkMode" ? 180 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <DynamicShadowImage
              src="/images/andrija-kapetanovic.jpg"
              height={isHome ? 144 : 108}
              width={isHome ? 144 : 108}
              alt="Picture of the site creator, Andrija Kapetanović (dark side)"
            />
            <DynamicShadowImage
              src="/images/andrija-kapetanovic-dark.jpg"
              height={isHome ? 144 : 108}
              width={isHome ? 144 : 108}
              alt="Picture of the site creator, Andrija Kapetanović (dark side)"
              rotate={180}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
