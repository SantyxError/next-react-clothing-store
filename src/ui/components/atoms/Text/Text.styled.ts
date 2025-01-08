import styled, { css, DefaultTheme } from "styled-components";
import React, { ReactNode } from "react";
import { TextProps } from "./Text";

type StyledTextProps = TextProps & { theme: DefaultTheme };

const mapFontSize = {
  default: css`
    ${({ theme }) => theme.fontSize[3]};
  `,
  1: css`
    ${({ theme }) => theme.fontSize[1]};
  `,
  2: css`
    ${({ theme }) => theme.fontSize[2]};
  `,
  3: css`
    ${({ theme }) => theme.fontSize[3]};
  `,
  4: css`
    ${({ theme }) => theme.fontSize[4]};
  `,
  5: css`
    ${({ theme }) => theme.fontSize[5]};
  `,
  6: css`
    ${({ theme }) => theme.fontSize[6]};
  `,
  7: css`
    ${({ theme }) => theme.fontSize[7]};
  `,
  8: css`
    ${({ theme }) => theme.fontSize[8]};
  `,
  9: css`
    ${({ theme }) => theme.fontSize[9]};
  `,
};

const mapFontSizeMobile = {
  default: css`
    ${({ theme }) => theme.fontSize[3]};
  `,
  1: css`
    ${({ theme }) => theme.fontSize[1]};
  `,
  2: css`
    ${({ theme }) => theme.fontSize[2]};
  `,
  3: css`
    ${({ theme }) => theme.fontSize[3]};
  `,
  4: css`
    ${({ theme }) => theme.fontSize[4]};
  `,
  5: css`
    ${({ theme }) => theme.fontSize[5]};
  `,
  6: css`
    ${({ theme }) => theme.fontSize[6]};
  `,
  7: css`
    ${({ theme }) => theme.fontSize[7]};
  `,
  8: css`
    ${({ theme }) => theme.fontSize[8]};
  `,
  9: css`
    ${({ theme }) => theme.fontSize[9]};
  `,
};

const commonTextStyles = (
  align?: string,
  fontStyle?: string,
  fontWeight?: string
) => css`
  text-align: ${align};
  font-style: ${fontStyle || "normal"};
  font-weight: ${fontWeight || "normal"};
`;

type StylesObject = {
  h1: ReturnType<typeof css>;
  h2: ReturnType<typeof css>;
  h3: ReturnType<typeof css>;
  p: ReturnType<typeof css>;
  span: ReturnType<typeof css>;
};

const mapTypeStyles = (
  baseStyles: ReturnType<typeof commonTextStyles>,
  theme: DefaultTheme,
  size: keyof typeof mapFontSize,
  color: string | undefined
): StylesObject => ({
  h1: css`
    ${baseStyles}
    position: relative;
    padding: ${theme.spacing[0]} ${theme.spacing[5]};
    font-size: ${theme.fontSize[9]};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${theme.fontSize[6]};
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
      font-size: ${!!size && mapFontSizeMobile[size]};
    }
  `,
  h3: css`
    ${baseStyles}
    font-size: ${theme.fontSize[6]};
    font-weight: 600;

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
    }
  `,
  p: css`
    ${baseStyles}
    font-size: ${!!size && mapFontSize[size]};
    line-height: ${theme.lineHeight[4]};
    margin: ${theme.spacing[3]};
    ${color &&
    css`
      color: ${({ theme }) => theme.color[color]};
    `}

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
    }
  `,
  span: css`
    ${baseStyles}
    ${color
      ? css`
          color: ${({ theme }) => theme.color[color]};
        `
      : css`
          background: ${theme.background.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
    font-size: ${!!size && mapFontSize[size]};
    margin: ${theme.spacing[3]};

    ${theme.mediaQueries.mobileAndTablet} {
      font-size: ${!!size && mapFontSizeMobile[size]};
      margin: ${theme.spacing[3]};
    }
  `,
});

const getStyles = ({
  as,
  theme,
  size,
  color,
  align,
  fontStyle,
  fontWeight,
}: StyledTextProps): ReturnType<typeof css> => {
  const baseStyles = commonTextStyles(align, fontStyle, fontWeight);
  const stylesObject = mapTypeStyles(baseStyles, theme, size!, color);

  return stylesObject[as as keyof StylesObject] || css``;
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
    ...rest
  }: TextProps & { children: ReactNode }) =>
    React.createElement(as, { className, ...rest }, [
      children,
      image && as === "h1",
    ])
)<TextProps & { children: ReactNode }>`
  ${({ theme, ...props }) => getStyles({ theme, ...props })}
`;
