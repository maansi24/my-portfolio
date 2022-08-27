import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonInterface {
  children: ReactNode;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const ButtonStyled = styled.button<Partial<ButtonInterface>>`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary2};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary2};
  border-radius: 20px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: ${({ size }) => (size === "sm" ? "normal" : "bold")};
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: white;
    border-color: salmon;
    background-color: salmon;
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
  size = "md",
  disabled = false,
}) => {
  return (
    <ButtonStyled size={size} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
