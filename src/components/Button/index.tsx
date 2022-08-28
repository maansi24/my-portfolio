import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonInterface {
  children: ReactNode;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  sx?: string;
}

const ButtonStyled = styled.button<Partial<ButtonInterface>>`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  border: 1px solid;
  border-radius: 200px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: ${({ size }) => (size === "sm" ? "normal" : "bold")};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  transition-property: background-color, color;
  color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.colors.body;
      case "ghost":
        return theme.colors.text;
      default:
        return "transparent";
    }
  }};
  background: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.colors.primary2;
      case "ghost":
        return "transparent";
      default:
        return "transparent";
    }
  }};
  border-color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.colors.primary2;
      case "ghost":
        return "transparent";
      default:
        return "transparent";
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case "sm":
        return "0.25rem 1rem";
      case "md":
        return "0.75rem 2rem";
      case "lg":
        return "1rem 2.5rem";
      default:
        return "0.75rem 1rem";
    }
  }};

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: ${({ theme }) => theme.colors.primary2};
    border-color: ${({ variant }) => {
      switch (variant) {
        case "primary":
          return "salmon";
        case "ghost":
          return "transparent";
        default:
          return "transparent";
      }
    }};
    background-color: ${({ variant }) => {
      switch (variant) {
        case "primary":
          return "salmon";
        case "ghost":
          return "transparent";
        default:
          return "transparent";
      }
    }};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonInterface> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  sx = "",
}) => {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      disabled={disabled}
      className={sx}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
