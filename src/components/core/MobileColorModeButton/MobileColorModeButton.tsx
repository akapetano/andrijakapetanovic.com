import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { MoonIconInColor } from "../MoonIconInColor/MoonIconInColor";
import { SunIconInColor } from "../SunIconInColor/SunIconInColor";

export function MobileColorModeButton() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIconInColor, MoonIconInColor);
  const buttonOutlineColor = useColorModeValue("brand.600", "brand.300");
  const buttonHoverOutlineColor = useColorModeValue("brand.700", "brand.200");

  return (
    <IconButton
      aria-label="Color mode"
      zIndex="2"
      onClick={toggleColorMode}
      mr={0}
      size="md"
      overflow="hidden"
      variant="ghost"
      opacity="0.8"
      outlineColor={buttonOutlineColor}
      _hover={{
        color: buttonHoverOutlineColor,
        outlineColor: buttonHoverOutlineColor,
        opacity: "1",
      }}
      transitionDelay=".3s"
      fontWeight="300"
      icon={<SwitchIcon />}
      rounded="full"
      color={buttonOutlineColor}
    />
  );
}
