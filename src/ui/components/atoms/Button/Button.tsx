import React from "react";
import { Button as ButtonComponent } from "./Button.styled";

type Props = {
  variant: "primary" | "secondary" | "terciary";
  children: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ variant, children, onClick }) => {
  console.log(variant);

  return (
    <ButtonComponent variant={variant} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};
