import styled from "styled-components";

interface ButtonInterface {
  label: string;
}

const StyledButton = styled.button``;

const Button: React.FC<ButtonInterface> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
