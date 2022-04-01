import NavLink from '../NavLink/NavLink';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

interface INavLinksProps {
  fontSize: string | number;
  flex?: string;
  opacity?: string;
  restProps?: any;
}

export default function NavLinks({
  fontSize,
  flex,
  ...restProps
}: INavLinksProps) {
  return (
    <>
      {NAV_ITEMS?.map((navItem) => (
        <NavLink
          fontSize={fontSize}
          flex={flex}
          textTransform="uppercase"
          key={navItem}
          to={`/${navItem.toLowerCase()}`}
          {...restProps}
        >
          {navItem}
        </NavLink>
      ))}
    </>
  );
}
