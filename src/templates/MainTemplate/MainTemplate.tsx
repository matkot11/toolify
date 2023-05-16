import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/theme/GlobalStyles.ts";
import { theme } from "@/assets/theme/MainTheme.ts";
import { ReactNode, useEffect, useRef } from "react";
import {
  MainTemplateWrapper,
  SnackbarWrapper
} from "@/templates/MainTemplate/MainTemplate.styled.ts";
import Navigation from "@/components/Navigation/Navigation.tsx";
import Search from "@/components/Search/Search.tsx";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import {
  animateSnackbarClose,
  animateSnackbarOpen
} from "@/assets/animations/snackbarAnimation.ts";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  const { snackbarMessage, snackbarColor, dispatchSnackbar } = useSnackbar();
  const snackbarRef = useRef<HTMLButtonElement>(null);

  const handleCloseSnackbar = () => {
    dispatchSnackbar("", "success");
  };

  useEffect(() => {
    if (snackbarRef.current) {
      if (snackbarMessage) {
        animateSnackbarOpen(snackbarRef);
        setTimeout(() => {
          animateSnackbarClose(snackbarRef, handleCloseSnackbar);
        }, 5000);
      }
    }
  }, [snackbarMessage]);

  return (
    <MainTemplateWrapper>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Search />
        {children}
        {/*{snackbarMessage && (*/}
        <SnackbarWrapper
          ref={snackbarRef}
          isVisible={!!snackbarMessage}
          onClick={() => animateSnackbarClose(snackbarRef, handleCloseSnackbar)}
          color={snackbarColor}>
          <span className="main-template__text">{snackbarMessage}</span>
          <CloseIcon className="main-template__close-icon" />
        </SnackbarWrapper>
        {/*)}*/}
      </ThemeProvider>
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
