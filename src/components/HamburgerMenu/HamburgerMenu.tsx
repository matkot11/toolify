import { HamburgerMenuWrapper } from "@/components/HamburgerMenu/HamburgerMenu.styled.ts";
import { useEffect, useRef } from "react";
import { hamburgerMenuAnimation } from "@/assets/animations/hamburgerMenuAnimation.ts";

type HamburgerMenuProps = {
  onClick: () => void;
  isNavbarOpen: boolean;
  className: string;
};

const HamburgerMenu = ({ onClick, isNavbarOpen, className }: HamburgerMenuProps) => {
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    hamburgerMenuAnimation(menuRef, isNavbarOpen);
  }, [isNavbarOpen]);

  return (
    <HamburgerMenuWrapper className={className} onClick={onClick} ref={menuRef}>
      <span className="hamburger-menu__line hamburger-menu__line-top"></span>
      <span className="hamburger-menu__line hamburger-menu__line-middle"></span>
      <span className="hamburger-menu__line hamburger-menu__line-bottom"></span>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;
