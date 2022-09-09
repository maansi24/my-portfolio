import { ReactNode } from "react";

export interface SkillsInterface {
  id: number;
  icon: ReactNode | null;
  title: string;
  description: string;
  btnText: string;
  btnLink: string;
}
