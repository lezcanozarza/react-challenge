import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        primary: "#3D3D3D",
        primaryLight: "#CCCCCC",
      }}
    >
      {children}
    </ThemeProvider>
  );
};
