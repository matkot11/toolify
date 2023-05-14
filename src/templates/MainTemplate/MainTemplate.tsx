import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/theme/GlobalStyles.ts";
import { theme } from "@/assets/theme/MainTheme.ts";
import { ReactNode } from "react";
import { MainTemplateWrapper } from "@/templates/MainTemplate/MainTemplate.styled.ts";

const MainTemplate = ({ children }: { children: ReactNode }) => (
  <MainTemplateWrapper>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MainTemplateWrapper>
);

export default MainTemplate;
