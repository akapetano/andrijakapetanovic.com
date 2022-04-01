import { Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

interface INavItemsProps {
  fontSize: string | number;
  p?: string;
  opacity?: string;
  restProps?: any;
}

export default function NavItems({ fontSize, ...restProps }: INavItemsProps) {
  return (
    <>
      {NAV_ITEMS?.map((navItem) => (
        <NextLink key={navItem} passHref href={`/${navItem.toLowerCase()}`}>
          <Link
            fontSize={fontSize}
            opacity="0.8"
            textTransform="uppercase"
            fontWeight={300}
            _hover={{ opacity: '1' }}
            transitionDelay=".3s"
            {...restProps}
          >
            <Text display="block">{navItem}</Text>
          </Link>
        </NextLink>
      ))}
    </>
  );
}
