import styled from "styled-components";

// Wrapper para la tarjeta del producto
export const ProductCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.boxShadow[2]};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

// Imagen del producto
export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Nombre del producto
export const ProductName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[4]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

// Precio del producto
export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

// Enlace de detalles
export const DetailsLink = styled.a`
  color: ${({ theme }) => theme.color.link};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
  display: inline-block;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.linkHover};
  }
`;

// Botón dentro de la tarjeta
export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`;
