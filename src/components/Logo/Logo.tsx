import { ReactComponent as ToolsIcon } from "@/assets/icons/tools.svg";
import { LogoWrapper } from "@/components/Logo/Logo.styled.ts";
const Logo = () => (
  <LogoWrapper to="/">
    <ToolsIcon className="logo__icon" />
    <h1 className="logo__text">TOOLIFY</h1>
  </LogoWrapper>
);

export default Logo;
