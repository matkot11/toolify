import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/theme/GlobalStyles.ts";
import { theme } from "@/assets/theme/MainTheme.ts";
import { ReactNode } from "react";
import { MainTemplateWrapper } from "@/templates/MainTemplate/MainTemplate.styled.ts";
import Navigation from "@/components/Navigation/Navigation.tsx";
import Search from "@/components/Search/Search.tsx";

const MainTemplate = ({ children }: { children: ReactNode }) => (
  <MainTemplateWrapper>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Navigation />
      <Search />
      {children}
    </ThemeProvider>
  </MainTemplateWrapper>
);

export default MainTemplate;
