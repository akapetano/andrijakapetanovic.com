import NavLink from '../NavLink/NavLink';

const NAV_ITEMS = ['About', 'Portfolio', 'Blog'];

interface INavLinksProps {
  fontSize: string | number;
  p?: string;
  opacity?: string;
  restProps?: any;
}

export default function NavLinks({ fontSize, ...restProps }: INavLinksProps) {
  return (
    <>
      {NAV_ITEMS?.map((navItem) => (
        <NavLink
          fontSize={fontSize}
          textTransform="uppercase"
          key={navItem}
          to={`/${navItem.toLowerCase()}`}
        >
          {navItem}
        </NavLink>
      ))}
    </>
  );
}
