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
    <div className="pb-4 border-b">
      <StyledName className="text-sm font-bold uppercase">{name}</StyledName>
      <h2 className="text-2xl font-bold leading-snug">{title}</h2>
      <p className="text-sm opacity-75 text-textPrimary">{description}</p>
    </div>
  );
};

export default SectionTitle;
