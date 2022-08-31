import Button from "@components/Button";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const PortfolioCardStyled = styled.div<any>`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: black ${({ bg }) => `url(${bg})`} center center no-repeat;
  background-size: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  filter: grayscale(0);
  transition: all 0.8s ease-in-out;

  & .innerContainer {
    height: 90%;
    width: 88%;
    background: transparent;
    border-radius: 10px;
    transition: border 1s;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  & h2 {
    font-size: 20px;
    opacity: 0;
    color: white;
    transition: opacity 1s;
  }
  & p {
    opacity: 0;
    color: white;
    transition: opacity 1s;
  }
  & .button-container {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    & a {
      opacity: 0;
      transition: opacity 1s;
    }
  }
  &:hover {
    background: ${({ bg }) => `url(${bg})`} left center no-repeat;
    background-size: 350px;
    filter: grayscale(100%);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.6;
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
      & a {
        opacity: 1;
      }
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
          className="shadow-sm hover:shadow-lg border"
        >
          {/* <div className="innerContainer">
            <h2 className="text-lg line-clamp-2">{title}</h2>
            <p className="line-clamp-5">{desc}</p>
          </div> */}
          <div className="button-container">
            <Link href={link}>
              <a target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" noPadding>
                  {ctaText}
                </Button>
              </a>
            </Link>
          </div>
        </PortfolioCardStyled>
      ) : (
        <PortfolioCardStyled bg={image} className="shadow-sm hover:shadow-lg">
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
