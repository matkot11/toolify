import Logo from "@/components/Logo/Logo.tsx";
import { NavigationWrapper } from "@/components/Navigation/Navigation.styled.ts";
import Navbar from "@/components/Navbar/Navbar.tsx";

const Navigation = () => (
  <NavigationWrapper>
    <Logo />
    <Navbar />
  </NavigationWrapper>
);

export default Navigation;
