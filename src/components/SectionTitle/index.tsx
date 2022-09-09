import React from "react";
import styled from "styled-components";

const StyledName = styled.span`
  color: ${({ theme }) => theme.colors.primary2};
  position: relative;
  padding-left: 40px;
  &:before {
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;
    top: 11px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;

const StyledTitle = styled.h2``;
const StyledDescription = styled.p``;

const SectionTitle = ({
  name = "",
  title = "",
  description = "",
}: {
  name: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div>
      <StyledName className="text-sm uppercase font-bold">{name}</StyledName>
      <StyledTitle className="text-2xl font-bold leading-snug">
        {title}
      </StyledTitle>
      <StyledDescription className="mt-4 text-sm text-textPrimary">
        {description}
      </StyledDescription>
    </div>
  );
};

export default SectionTitle;
