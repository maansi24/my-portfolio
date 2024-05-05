import Button from "@components/Button";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const PortfolioCardStyled = styled.div<any>`
  /* height: 180px; */
  width: 100%;
  padding-top: 63.33%;
  border-radius: 10px;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  background: ${({ bg }) => `url(${bg})`} center center no-repeat;
  background-size: contain;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  filter: grayscale(0);
  transition: all 0.3s ease-in-out;

  /* & h2 {
    font-size: 20px;
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease-in-out;
  }
  & p {
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease-in-out;
  } */
  & .button-container {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 1;
    transform: translateY(20px);
    opacity: 0;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.05;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    & .innerContainer {
      &:before {
        opacity: 0.2;
      }
    }
    & h2 {
      opacity: 1;
    }
    & p {
      opacity: 0.7;
    }
    & .button-container {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const PortfolioCard = ({ data }: { data: any }) => {
  const { title, desc, image, link, publicationDate } = data;

  return (
    <div className="space-y-3">
      <PortfolioCardStyled bg={image} className="shadow-sm hover:shadow-lg" />
      <div className="flex flex-col items-start px-1">
        <p className="text-xs font-semibold opacity-50">{publicationDate}</p>
        <div className="flex-1">
          <p className="font-semibold line-clamp-2 text-textPrimary">{title}</p>
          <p className="text-xs opacity-50 line-clamp-3">{desc}</p>
        </div>
        <Link href={link}>
          <a target="_blank" className="mt-2" rel="noopener noreferrer">
            <Button sx="flex items-center space-x-1" size="xs">
              <span>Read More</span> <FiExternalLink className="inline" />
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
