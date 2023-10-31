import DynamicShadowImage from "../DynamicShadowImage/DynamicShadowImage";
import AuthorImageWrapper from "./AuthorImageWrapper/AuthorImageWrapper";

interface IAuthorImageProps {
  isHome: boolean;
}

export default function AuthorImage({ isHome }: IAuthorImageProps) {
  return (
    <AuthorImageWrapper isHome={isHome}>
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
    </AuthorImageWrapper>
  );
}
