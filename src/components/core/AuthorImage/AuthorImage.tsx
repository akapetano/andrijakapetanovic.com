import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import AuthorImageWrapper from "./AuthorImageWrapper/AuthorImageWrapper";

interface IAuthorImageProps {
  isHome: boolean;
}

export default function AuthorImage({ isHome }: IAuthorImageProps) {
  const srcLightMode = "/images/andrija-kapetanovic.jpg";
  const srcDarkMode = "/images/andrija-kapetanovic-dark.jpg";

  return (
    <AuthorImageWrapper isHome={isHome}>
      <DynamicShadowImage
        src={srcLightMode}
        height={isHome ? 144 : 108}
        width={isHome ? 144 : 108}
        alt="Andrija Kapetanović"
      />
      <DynamicShadowImage
        src={srcDarkMode}
        height={isHome ? 144 : 108}
        width={isHome ? 144 : 108}
        alt="Andrija Kapetanović (dark mode)"
        rotate={180}
      />
    </AuthorImageWrapper>
  );
}
