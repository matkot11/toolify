import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/assets/theme/GlobalStyles.ts";
import { theme } from "@/assets/theme/MainTheme.ts";
import { ReactNode } from "react";

const MainTemplate = ({ children }: { children: ReactNode }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default MainTemplate;
