import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => theme.border[1]} solid
    ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  box-shadow: ${({ theme }) => theme.boxShadow[2]};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin: ${({ theme }) => theme.spacing[4]} 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow[4]};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize[5]};
  color: ${({ theme }) => theme.color.textPrimary};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const ProductPrice = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize[4]};
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

export const ProductLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize[3]};
  color: ${({ theme }) => theme.color.link};
  text-decoration: none;
  margin-top: ${({ theme }) => theme.spacing[2]};
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.linkHover};
  }
`;
