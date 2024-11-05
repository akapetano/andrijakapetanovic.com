import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  FocusLock,
} from "@chakra-ui/react";
import { Tablets } from "./Tablets";
import { Headings } from "./Headings";
import { Heading } from "@/types/blog";

interface IDesktopProps {
  headings?: Heading[];
}

export function Mobile({ headings }: IDesktopProps) {
  return (
    <Box
      display={{ base: "block", lg: "none" }}
      position="fixed"
      bottom="-6rem"
      right="calc(50% - 1.3rem)"
      zIndex="8998"
    >
      <Popover trigger="click" placement="auto">
        <PopoverTrigger>
          <Tablets headings={headings} />
        </PopoverTrigger>
        <FocusLock persistentFocus>
          <PopoverContent boxShadow="lg" maxH="30rem" maxW="15rem">
            <PopoverCloseButton />
            <PopoverHeader
              pt="3"
              fontWeight="semibold"
              sx={{
                _dark: { color: "gray.300" },
                _light: { color: "gray.600" },
              }}
            >
              Table of Contents
            </PopoverHeader>
            <PopoverBody overflowY="auto">
              <Headings display="block" headings={headings} />
            </PopoverBody>
          </PopoverContent>
        </FocusLock>
      </Popover>
    </Box>
  );
}
