import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/assets/theme/MainTheme.ts";
import { SnackbarProvider } from "@/hooks/useSnackbar.tsx";
import { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>{children}</SnackbarProvider>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
