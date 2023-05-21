import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/assets/theme/MainTheme.ts";
import { SnackbarProvider } from "@/hooks/useSnackbar.tsx";
import { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { AuthProvider } from "@/hooks/useAuth.tsx";

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </AuthProvider>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
