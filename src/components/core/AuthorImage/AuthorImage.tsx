import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import AuthorImageWrapper from "./AuthorImageWrapper/AuthorImageWrapper";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

interface IAuthorImageProps {
  isHome: boolean;
  hasDynamicShadow?: boolean;
}

export default function AuthorImage({
  isHome,
  hasDynamicShadow = true,
}: IAuthorImageProps) {
  const srcLightMode = "/images/andrija-kapetanovic.jpg";
  const srcDarkMode = "/images/andrija-kapetanovic-dark.jpg";

  return (
    <AuthorImageWrapper isHome={isHome}>
      {hasDynamicShadow ? (
        <DynamicShadowImage
          src={srcLightMode}
          height={isHome ? 144 : 108}
          width={isHome ? 144 : 108}
          alt="Andrija Kapetanović"
        />
      ) : (
        <Box>
          <Image
            src={srcLightMode}
            height={isHome ? 144 : 108}
            width={isHome ? 144 : 108}
            alt="Andrija Kapetanović"
            style={{
              borderRadius: "100%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            }}
          />
        </Box>
      )}
      {hasDynamicShadow ? (
        <DynamicShadowImage
          src={srcDarkMode}
          height={isHome ? 144 : 108}
          width={isHome ? 144 : 108}
          alt="Andrija Kapetanović (dark mode)"
          rotate={180}
        />
      ) : (
        <Box>
          <Image
            src={srcDarkMode}
            height={isHome ? 144 : 108}
            width={isHome ? 144 : 108}
            alt="Andrija Kapetanović (dark mode)"
            style={{
              borderRadius: "100%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
            }}
          />
        </Box>
      )}
    </AuthorImageWrapper>
  );
}
