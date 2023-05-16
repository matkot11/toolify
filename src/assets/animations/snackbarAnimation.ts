import gsap from "gsap";
import { RefObject } from "react";

export const animateSnackbarOpen = (snackbarRef: RefObject<HTMLButtonElement>) => {
  const animation = gsap.timeline();
  animation.to(snackbarRef.current, { autoAlpha: 1, y: 15, duration: 0.5 });
};

export const animateSnackbarClose = (
  snackbarRef: RefObject<HTMLButtonElement>,
  handleCloseSnackbar: () => void
) => {
  const animation = gsap.timeline({ onComplete: handleCloseSnackbar });
  if (snackbarRef.current) {
    animation.to(snackbarRef.current, { autoAlpha: 0, y: -15, duration: 0.5 });
  }
};
