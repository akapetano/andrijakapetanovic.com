import { MoonIcon, IconProps } from "@chakra-ui/icons";

export function MoonIconInColor(props: IconProps) {
  const moonColor = "accent.100";

  return <MoonIcon color={moonColor} {...props} />;
}
