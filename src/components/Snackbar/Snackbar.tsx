import { SnackbarWrapper } from "@/components/Snackbar/Snackbar.styled";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import { forwardRef, RefObject } from "react";
import { animateSnackbarClose } from "@/assets/animations/snackbarAnimation.ts";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";

const Snackbar = forwardRef<HTMLButtonElement>((_, ref) => {
  const { snackbarMessage, snackbarColor, dispatchSnackbar } = useSnackbar();

  const handleCloseSnackbar = () => {
    dispatchSnackbar("", "success");
  };

  return (
    <SnackbarWrapper
      ref={ref}
      isVisible={!!snackbarMessage}
      onClick={() => animateSnackbarClose(ref as RefObject<HTMLButtonElement>, handleCloseSnackbar)}
      color={snackbarColor}>
      <span className="snackbar__text">{snackbarMessage}</span>
      <CloseIcon className="snackbar__close-icon" />
    </SnackbarWrapper>
  );
});

Snackbar.displayName = "Snackbar";

export default Snackbar;
