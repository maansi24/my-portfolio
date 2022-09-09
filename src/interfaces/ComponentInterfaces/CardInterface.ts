import { ReactNode } from "react";

export interface CardInterface {
  title: string;
  description: string;
  icon?: ReactNode | null;
  image?: string;
  link?: string;
  btnText?: string;
  center?: boolean;
}
