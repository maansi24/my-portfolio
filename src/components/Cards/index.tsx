import Button from "@components/Button";
import { CardInterface } from "@interfaces/ComponentInterfaces/CardInterface";
import classes from "classnames";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const BaseCard = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0; /* slate-200 */
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const Card = ({
  title = "",
  description = "",
  icon,
  image = "",
  link = "",
  btnText = "Explore",
  center = false,
}: CardInterface) => {
  return (
    <BaseCard className="text-textPrimary">
      {image && (
        <div className="relative w-full aspect-[1]">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      {icon && <div className="w-full">{icon}</div>}
      <div
        className={classes(
          "space-y-1",
          center && "text-center",
          icon && "mt-4"
        )}
      >
        <h3 className="font-bold">{title}</h3>
        {description && <p className="text-xs">{description}</p>}
      </div>
      {link && btnText && (
        <div className={classes("mt-4", center ? "text-center mx-auto" : "")}>
          <Button
            size="sm"
            variant="ghost"
            textColor="black"
            sx={classes("font-bold", center ? "mx-auto" : "")}
          >
            {btnText}
          </Button>
        </div>
      )}
    </BaseCard>
  );
};

export default Card;
