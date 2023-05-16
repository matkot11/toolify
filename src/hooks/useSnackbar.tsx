import { createContext, ReactNode, useCallback, useContext, useState } from "react";

type SnackbarColor = "success" | "error";

type SnackbarContext = {
  snackbarMessage: string;
  snackbarColor: SnackbarColor;
  dispatchSnackbar: (message: string, color: SnackbarColor) => void;
};

const SnackbarContext = createContext<SnackbarContext | null>(null);

type SnackbarProps = {
  children: ReactNode;
};

export const SnackbarProvider = ({ children }: SnackbarProps) => {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarColor, setSnackbarColor] = useState<SnackbarColor>("error");

  const dispatchSnackbar = useCallback((message: string, color: SnackbarColor) => {
    setSnackbarMessage(message);
    setSnackbarColor(color);
  }, []);

  return (
    <SnackbarContext.Provider value={{ snackbarMessage, snackbarColor, dispatchSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const snackbarContext = useContext(SnackbarContext);

  if (!snackbarContext) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }

  return snackbarContext;
};
