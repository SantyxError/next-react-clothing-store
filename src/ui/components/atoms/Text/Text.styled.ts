import styled, { css, DefaultTheme } from "styled-components";
import { TextProps } from "./Text";
import React from "react";

type StyledTextProps = TextProps & { theme: DefaultTheme };

const createFontSizeMap = (theme: DefaultTheme) => ({
  default: theme.fontSize[3],
  1: theme.fontSize[1],
  2: theme.fontSize[2],
  3: theme.fontSize[3],
  4: theme.fontSize[4],
  5: theme.fontSize[5],
  6: theme.fontSize[6],
  7: theme.fontSize[7],
  8: theme.fontSize[8],
  9: theme.fontSize[9],
});

const mapFontSize = (theme: DefaultTheme) => createFontSizeMap(theme);
const mapFontSizeMobile = (theme: DefaultTheme) => createFontSizeMap(theme);

const commonTextStyles = (
  align?: string,
  fontStyle?: string,
  fontWeight?: string
) => css`
  text-align: ${align || "justify"};
  font-style: ${fontStyle || "normal"};
  font-weight: ${fontWeight || "normal"};
`;

const mapTypeStyles = (
  baseStyles: ReturnType<typeof commonTextStyles>,
  theme: DefaultTheme,
  size: keyof ReturnType<typeof createFontSizeMap>,
  color?: string
) => ({
  h1: css`
    ${baseStyles}
    position: relative;
    padding: ${theme.spacing[0]} ${theme.spacing[5]};
    font-size: ${theme.fontSize[9]};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${mapFontSizeMobile(theme)[size]};
      padding: ${theme.spacing[0]};
    }
  `,
  h2: css`
    ${baseStyles}
    background: ${theme.color.secondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${theme.fontSize[8]};
    padding: ${theme.spacing[0]};
    margin-bottom: ${theme.spacing[5]};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${mapFontSizeMobile(theme)[size]};
    }
  `,
  h3: css`
    ${baseStyles}
    font-size: ${theme.fontSize[6]};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${mapFontSizeMobile(theme)[size]};
    }
  `,
  p: css`
    ${baseStyles}
    font-size: ${mapFontSize(theme)[size]};
    line-height: ${theme.lineHeight[4]};
    margin: ${theme.spacing[1]};
    ${color &&
    css`
      color: ${theme.color[color] || color};
    `}

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${mapFontSizeMobile(theme)[size]};
    }
  `,
  span: css`
    ${baseStyles}
    ${color
      ? css`
          color: ${theme.color[color] || color};
        `
      : css`
          background: ${theme.color.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
    font-size: ${mapFontSize(theme)[size]};
    margin: ${theme.spacing[3]};

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${mapFontSizeMobile(theme)[size]};
      margin: ${theme.spacing[3]};
    }
  `,
});

const getStyles = (props: StyledTextProps) => {
  const {
    as = "span",
    theme,
    size = "default",
    color,
    align,
    fontStyle,
    fontWeight,
  } = props;
  const baseStyles = commonTextStyles(align, fontStyle, fontWeight);
  const stylesObject = mapTypeStyles(baseStyles, theme, size, color);

  return stylesObject[as as keyof typeof stylesObject] || css``;
};

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const TitleImg = styled.img`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[0]};
  right: ${({ theme }) => theme.spacing[0]};
  z-index: -1;

  ${({ theme }) => theme.mediaQueries.mobileAndTablet} {
    width: 130px;
    right: -20px;
  }
`;

export const Text = styled(
  ({
    as = "span",
    children,
    className,
    size,
    image,
  }: TextProps & { children: React.ReactNode }) =>
    React.createElement(as, { className }, children)
)<TextProps & { children: React.ReactNode }>`
  ${({ theme, ...props }) => getStyles({ theme, ...props })}
`;
