import { RefObject } from "react";
import gsap from "gsap";

export const animateDropdownCategories = (
  categoriesRef: RefObject<HTMLUListElement>,
  isCategoriesOpen: boolean
) => {
  const animation = gsap.timeline();

  if (categoriesRef.current) {
    if (isCategoriesOpen) {
      animation.to(categoriesRef.current, { autoAlpha: 0, duration: 0.3 });
    } else {
      animation.to(categoriesRef.current, { autoAlpha: 1, duration: 0.3 });
    }
  }
};
