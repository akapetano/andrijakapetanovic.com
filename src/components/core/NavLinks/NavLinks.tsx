import NavLink from "../NavLink/NavLink";
import { NAV_ITEMS } from "@/constants";

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
          key={navItem}
          fontSize={fontSize}
          flex={flex}
          textTransform="uppercase"
          to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
          {...restProps}
        >
          {navItem}
        </NavLink>
      ))}
    </>
  );
}
