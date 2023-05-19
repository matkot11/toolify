import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/theme/GlobalStyles.ts";
import { theme } from "@/assets/theme/MainTheme.ts";
import { ReactNode, useEffect, useRef } from "react";
import { MainTemplateWrapper } from "@/templates/MainTemplate/MainTemplate.styled.ts";
import Navigation from "@/components/Navigation/Navigation.tsx";
import Search from "@/components/Search/Search.tsx";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";
import {
  animateSnackbarClose,
  animateSnackbarOpen
} from "@/assets/animations/snackbarAnimation.ts";
import Snackbar from "@/components/Snackbar/Snackbar.tsx";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  const { snackbarMessage, dispatchSnackbar } = useSnackbar();
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
        <Snackbar ref={snackbarRef} />
      </ThemeProvider>
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
