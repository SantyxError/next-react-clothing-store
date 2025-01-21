import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.textPrimary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  padding: ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  box-shadow: ${({ theme }) => theme.boxShadow[2]};
  max-width: 900px; 
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column; 
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0;
  border: ${({ theme }) => theme.border[2]} solid
    ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius[2]};
`;

export const ProductInfo = styled.div`
  flex: 2; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[6]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.primary};
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize[4]};
  color: ${({ theme }) => theme.color.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize[5]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.color.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  strong {
    color: ${({ theme }) => theme.color.linkHover};
  }
`;

export const ProductReview = styled.p`
  font-size: ${({ theme }) => theme.fontSize[4]};
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-style: italic;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  cursor: pointer;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacing[4]};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.linkHover};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.secondary};
    outline-offset: 2px;
  }
`;
