import { ReactNode } from "react";
import styles from "../AuthorImage.module.css";
import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IAuthorImageWrapper {
  isHome: boolean;
  children: ReactNode;
}

export default function AuthorImageWrapper({
  isHome,
  children,
}: IAuthorImageWrapper) {
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
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
