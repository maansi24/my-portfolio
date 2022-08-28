import Button from "@components/Button";
import classes from "classnames";
import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";

const BaseCard = styled.div`
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  link?: string;
  btnText?: string;
  center?: boolean;
}) => {
  return (
    <BaseCard>
      {image && (
        <div className="relative w-full aspect-[1]">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}
      {icon && <div className="w-full">{icon}</div>}
      <div className={classes("mt-4 space-y-1", center ? "text-center" : "")}>
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
      {link && btnText && (
        <div className={classes("mt-4", center ? "text-center mx-auto" : "")}>
          <Button
            size="sm"
            variant="ghost"
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