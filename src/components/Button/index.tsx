import classNames from "classnames";
import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonInterface {
  children: ReactNode;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  sx?: string;
  rounded?: boolean;
  noPadding?: boolean;
  type?: "button" | "submit";
  textColor?: string;
  shine?: boolean;
  onClick?: () => void;
  props?: any;
}

const shineAnimation = keyframes`
	0% {
		transform: translateX(-200%) rotate(55deg);
	}
	100% {
		transform: translateX(50%) rotate(55deg);
	}
`;

const ButtonStyled = styled.button<Partial<ButtonInterface>>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  border: 1px solid;
  font-size: 16px;
  font-weight: ${({ size }) => (size === "sm" ? "normal" : "bold")};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  transition-property: background-color, color;
  color: ${({ textColor }) => textColor};
  border-radius: ${({ rounded }) => (rounded ? "200px" : "4px")};
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
  padding: ${({ size, noPadding }) => {
    if (noPadding) return "0 0";
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
    text-decoration: ${({ variant }) => {
      switch (variant) {
        case "ghost":
          return "underline";
        default:
          return "none";
      }
    }};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
    cursor: not-allowed;
  }

  &.shine {
    overflow: hidden;
    &:after {
      content: "";
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      transform: translateX(-200%) rotate(55deg);
      animation: ${shineAnimation} 5s infinite;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      );
    }
  }
`;

const Button: React.FC<ButtonInterface> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  sx = "",
  rounded = true,
  noPadding = false,
  type = "button",
  textColor = "#fff",
  shine,
  onClick,
  props,
}) => {
  return (
    <ButtonStyled
      variant={variant}
      size={size}
      textColor={textColor}
      disabled={disabled}
      rounded={rounded}
      noPadding={noPadding}
      type={type}
      className={classNames(sx, shine && "shine")}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
