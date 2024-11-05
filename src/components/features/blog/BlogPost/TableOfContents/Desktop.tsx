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

export function Desktop({ headings }: IDesktopProps) {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      position="fixed"
      top="calc(50% - 9rem)"
      right="2rem"
      zIndex="8998"
    >
      <Popover trigger="hover" placement="start">
        <PopoverTrigger>
          <Tablets headings={headings} />
        </PopoverTrigger>
        <FocusLock persistentFocus>
          <PopoverContent
            boxShadow="lg"
            maxH={{ base: "30rem", md: "revert" }}
            maxW={{ base: "15rem", md: "auto" }}
          >
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
