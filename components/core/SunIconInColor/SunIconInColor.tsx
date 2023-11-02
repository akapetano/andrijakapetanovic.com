import { SunIcon, IconProps } from "@chakra-ui/icons";

export function SunIconInColor(props: IconProps) {
  const sunColor = "accent.300";

  return <SunIcon color={sunColor} {...props} />;
}
