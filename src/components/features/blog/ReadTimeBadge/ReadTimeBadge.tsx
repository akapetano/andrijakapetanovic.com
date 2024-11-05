import { Badge, BadgeProps } from "@chakra-ui/react";
import { WORDS_PER_MINUTE } from "@/constants";

interface IReadTimeBadgeProps extends BadgeProps {
  text: string;
}

export function ReadTimeBadge({ text, ...restProps }: IReadTimeBadgeProps) {
  if (!text) return null;

  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / WORDS_PER_MINUTE;
  const readTime = Math.ceil(minutes);

  return (
    <Badge
      display="inline"
      rounded="full"
      fontSize="small"
      variant="primary"
      pt="0.5"
      {...restProps}
    >
      {`${readTime} minute read`}
    </Badge>
  );
}
