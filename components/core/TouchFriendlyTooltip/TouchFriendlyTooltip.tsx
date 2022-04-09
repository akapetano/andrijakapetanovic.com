import { Tooltip, TooltipProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useState } from 'react';

interface ITouchFriendlyTooltipProps {
  toolName: string;
  toolIcon: IconType;
  toolColor: string;
}

export function TouchFriendlyTooltip({
  toolName,
  toolIcon,
  toolColor,
}: ITouchFriendlyTooltipProps) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip
      isOpen={isLabelOpen}
      label={toolName}
      hasArrow
      shouldWrapChildren
      bg={toolColor}
    >
      <Icon
        key={toolName}
        as={toolIcon}
        boxSize={['6', '6', '8', '8', '8']}
        transition="all 0.2s ease-in-out"
        _hover={{
          opacity: 1,
          transform: 'scale(1.2)',
          color: toolColor,
        }}
        _focus={{ boxShadow: 'outline' }}
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      />
    </Tooltip>
  );
}
