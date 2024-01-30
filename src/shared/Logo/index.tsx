import { Link } from "@chakra-ui/react";
import { LayoutProps } from "@chakra-ui/styled-system";

import EceIcons from "../../theme/parts/Icons";

type LogoComponent = {
  boxSize?: LayoutProps["boxSize"];
  url?: string | null;
  icon?: string | null;
  theme?: "dark" | "light";
};

const Logo = (props: LogoComponent) => {
  const boxSize = props.boxSize || "80";

  const isDark = props.theme === "dark" ? true : false;
  const fill = isDark ? "#ffffff" : "#005399";

  const name = props.icon === "ECEShop" ? "eceShopLogo" : "eceLogo";
  const viewBox = props.icon === "ECEShop" ? "0 0 64 26" : "0 0 80 80";

  const Sign = () => (
    <EceIcons
      name={name}
      boxSize={boxSize}
      focusable={true}
      role="img"
      viewBox={viewBox}
      fill={fill}
      color={fill}
    />
  );
  return props.url === null ? (
    <Sign />
  ) : (
    <Link
      _focus={{ boxShadow: "none" }}
      href={props?.url ? props?.url : "https://moj.ece.si"}
    >
      <Sign />
    </Link>
  );
};

export default Logo;
