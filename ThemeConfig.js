import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  colors: {
    primary1: "#F5296E",
    primary2: "#c57653",
  },
  social: {
    facebook: "#4267B2",
    google: "#EB4335",
    pinterest: "#e60023",
    linkedin: "#0077b5",
    twitter: "#1DA1F2",
  },
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  colors: {
    primary1: "#F5296E",
    primary2: "#c57653",
  },
  social: {
    facebook: "#4267B2",
    google: "#EB4335",
    pinterest: "#e60023",
    linkedin: "#0077b5",
    twitter: "#1DA1F2",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Lato", sans-serif;
    transition: all 0.50s linear;
  }
`;
