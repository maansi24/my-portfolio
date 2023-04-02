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

  & h2 {
    font-size: 20px;
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease-in-out;
  }
  & p {
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease-in-out;
  }
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
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    &::after {
      opacity: 0.5;
      pointer-events: none;
    }
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
  const { title, desc, image, link, ctaText } = data;
  return (
    <>
      {link ? (
        <PortfolioCardStyled
          bg={image}
          className="shadow-sm hover:shadow-lg transition__300"
        >
          {/* <div className="innerContainer">
            <h2 className="text-lg line-clamp-2">{title}</h2>
            <p className="line-clamp-5">{desc}</p>
          </div> */}
          <div className="button-container">
            <Link href={link}>
              <a target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  sx="flex items-center space-x-2"
                  noPadding
                >
                  <span>{ctaText}</span> <FiExternalLink />
                </Button>
              </a>
            </Link>
          </div>
        </PortfolioCardStyled>
      ) : (
        <PortfolioCardStyled
          bg={image}
          className="shadow-sm hover:shadow-lg transition__300"
        >
          <div className="innerContainer">
            <h2 className="text-lg line-clamp-2">{title}</h2>
            <p className="line-clamp-5">{desc}</p>
          </div>
        </PortfolioCardStyled>
      )}
    </>
  );
};

export default PortfolioCard;
