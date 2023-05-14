import gsap from "gsap";
import { RefObject } from "react";

export const hamburgerMenuAnimation = (
  menuRef: RefObject<HTMLButtonElement>,
  animationOpen: boolean
) => {
  const animation = gsap.timeline();

  if (menuRef.current) {
    const menuLine1 = menuRef.current.querySelector(".hamburger-menu__line-top");
    const menuLine2 = menuRef.current.querySelector(".hamburger-menu__line-middle");
    const menuLine3 = menuRef.current.querySelector(".hamburger-menu__line-bottom");

    animationOpen &&
      animation
        .to(menuLine1, { rotation: 45, y: 5, ease: "power2.inOut", duration: 0.3 }, 0)
        .to(menuLine2, { autoAlpha: 0, duration: 0.3 }, 0)
        .to(menuLine3, { rotation: 135, y: -5, ease: "power2.inOut", duration: 0.3 }, 0);

    !animationOpen &&
      animation
        .to(menuLine1, { rotation: 0, y: 0, ease: "power2.inOut", duration: 0.3 }, 0)
        .to(menuLine2, { autoAlpha: 1, duration: 0.3 }, 0)
        .to(menuLine3, { rotation: 0, y: 0, ease: "power2.inOut", duration: 0.3 }, 0);
  }
};
