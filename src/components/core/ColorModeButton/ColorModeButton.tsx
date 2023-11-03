"use client";

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { MoonIconInColor } from "../MoonIconInColor/MoonIconInColor";
import { SunIconInColor } from "../SunIconInColor/SunIconInColor";

export function ColorModeButton() {
  const { toggleColorMode } = useColorMode();
  const iconButtonBorderColor = useColorModeValue("gray.200", "gray.500");
  const iconButtonHoverBorderColor = useColorModeValue(
    "brand.400",
    "brand.200"
  );
  const SwitchIcon = useColorModeValue(SunIconInColor, MoonIconInColor);

  return (
    <Flex>
      <IconButton
        variant="ghost"
        fontSize="xl"
        isRound
        display={["none", "none", "flex", "flex", "flex"]}
        aria-label="Color mode toggler"
        zIndex="2"
        onClick={toggleColorMode}
        size="sm"
        overflow="hidden"
        border="2px solid"
        borderColor={iconButtonBorderColor}
        _hover={{ borderColor: iconButtonHoverBorderColor }}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
}
