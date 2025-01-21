import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]};
  background-color: ${theme.color.backgroundSecondary};

  // Ajustes para pantallas pequeñas (móviles)
  ${theme.mediaQueries.mobile} {
    grid-template-columns: 1fr; // Una columna en móviles
  }

  // Ajustes para tabletas y más grandes
  ${theme.mediaQueries.tablet} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(300px, 1fr)
    ); // Aumentamos el tamaño mínimo de las columnas
  }
`;

export const ProductCard = styled.div`
  background-color: ${theme.color.background};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.borderRadius[2]}; 
  box-shadow: ${theme.boxShadow[2]}; 
  transition: transform 0.3s ease-in-out;
  padding: ${theme.spacing[3]};
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.boxShadow[3]}; 
  }
`;

export const ProductImage = styled.div`
  max-width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: ${theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: ${theme.fontSize[3]};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.color.textPrimary};
  margin: ${theme.spacing[2]} 0;
`;

export const ProductPrice = styled.p`
  font-size: ${theme.fontSize[5]};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.color.primary};
  margin: ${theme.spacing[2]} 0;
`;

export const DetailsLink = styled.a`
  font-size: ${theme.fontSize[2]};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.color.link};
  text-decoration: none;
  padding: ${theme.spacing[2]};
  border-radius: ${theme.borderRadius};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.color.linkHover};
    color: #fff;
  }
`;
