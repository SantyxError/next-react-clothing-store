import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    ${({ theme }) => css`
      background: ${theme.color.primary};
      color: ${theme.color.white};
      border: ${theme.border[2]} solid ${theme.color.white};
      padding: ${theme.spacing[2]} ${theme.spacing[2]};
      transition: color 0.3s transform 0.4s;

      &:hover {
        transform: scale(1.1);
      }
    `}
  `,
  secondary: css`
    ${({ theme }) => css`
      background: none;
      color: ${theme.color.white};
      border: ${theme.border[1]} solid ${theme.color.white};
      padding: ${theme.spacing[2]} ${theme.spacing[2]};
      transition: color 0.3s transform 0.4s;
    `}

    &:hover {
      transform: scale(1.1);
    }
  `,
  terciary: css`
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      gap: ${theme.spacing[4]};
      background: none;
      color: ${theme.color.white};
      border: ${theme.border[1]} solid ${theme.color.white};
      padding: ${theme.spacing[2]} ${theme.spacing[3]};
      font-weight: 500;
      transition: color 0.3s, background 0.3s, gap 0.4s, transform 0.4s;

      &:hover {
        color: ${theme.color.terciary};
        gap: ${theme.spacing[4]};
        transform: scaleX(1.1);
      }
    `}
  `,
};

export const Button = styled.button<{
  variant: "primary" | "secondary" | "terciary";
}>`
  ${({ variant }) => COLOR[variant]}

  ${({ theme }) => css`
    font-weight: bold;
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSize[3]};
    padding: ${theme.spacing[3]} ${theme.spacing[3]};
    border-radius: ${theme.borderRadius[2]};
  `}

  &:hover {
    transition: 0.3s;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      &:hover {
        box-shadow: inset 0 0 0 2px white;
      }

      ${({ theme }) => css`
        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize[3]};
          font-weight: 500;
          gap: ${theme.spacing[3]};
        }
      `}
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      &:hover {
        border: 2px solid ${({ theme }) => theme.color.terciary};
        background: ${({ theme }) => theme.color.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${({ theme }) => theme.color.primary};
      }

      ${({ theme }) => css`
        ${theme.mediaQueries.mobileAndTablet} {
          font-size: ${theme.fontSize[3]};
          font-weight: 500;
          gap: ${theme.spacing[4]};
        }
      `}
    `}

  ${({ variant, theme }) =>
    variant === "terciary" &&
    css`
      &:hover {
        gap: ${theme.spacing.xl};
        transform: scaleX(1.1);
        border: ${theme.border[2]} solid ${theme.color.terciary};
      }

      ${theme.mediaQueries.mobileAndTablet} {
        font-size: ${theme.fontSize[3]};
        font-weight: 500;
        gap: ${theme.spacing[3]};
      }
    `}
`;
