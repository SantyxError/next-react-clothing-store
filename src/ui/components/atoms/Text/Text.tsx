import React, { ReactNode } from "react";
import {
  Text as TextComponent,
  Wrapper as WrapperCommponent,
  TitleImg,
} from "./Text.styled";

type Tag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Size = "default" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TextAlign = "left" | "center" | "right" | "justify";
type FontWeight = "normal" | "bold";
type FontStyle = "normal" | "italic";
type Color = "white" | "primary" | "secondary" | "bone" | "grey" | string;

export type TextProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  size?: Size;
  image?: string;
  align?: TextAlign;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  color?: Color;
};

const Wrapper: React.FC<{ children: ReactNode; hasImage: boolean }> = ({
  children,
  hasImage,
}) => {
  if (hasImage) {
    return <WrapperCommponent>{children}</WrapperCommponent>;
  }

  return <>{children}</>;
};

const Text: React.FC<TextProps> = ({
  children,
  as = "span",
  className,
  size = "default",
  image,
  align = "justify",
  fontWeight = "normal",
  fontStyle = "normal",
  color,
}) => {
  return (
    <Wrapper hasImage={!!image}>
      <TextComponent
        as={as}
        className={className}
        size={size}
        image={image}
        align={align}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        color={color}>
        {children}
      </TextComponent>

      {image && <TitleImg src={image} alt="" />}
    </Wrapper>
  );
};

export default Text;
