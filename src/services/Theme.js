import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        primary: "#003071",
        primaryLight: "#1a7bbc",
      }}
    >
      {children}
    </ThemeProvider>
  );
};
