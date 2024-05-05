import React from "react";

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = "bg-blue-500" }) => {
  return (
    <p
      className={`inline-block px-3 py-1 text-xs font-semibold text-white uppercase rounded-[6px] bg-brownPrimary ${color}`}
    >
      {text}
    </p>
  );
};

export default Badge;
